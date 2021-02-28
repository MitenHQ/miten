import { nanoid } from 'nanoid';
import mail from '@sendgrid/mail';
import { MutationResolvers } from '../graphql/resolvers-types';
import { getOrMakeUser } from '../user/getOrMakeUser';
import { EMAIL_SENDER, FEEDBACK_TEMPLATE_ID, REPLY_TO } from '../utils/constants';
import { isDevEnv, isTestEnv } from '../utils/envTools';
import { feedbackUniqueId } from './utils/feedbackUniqueId';
import { getRecentTime } from '../utils/getRecentTime';
import { RateLimiterMemory } from 'rate-limiter-flexible';

export const DAY = 24 * 60; // a day is 24h * 60min
export const GENERATE_LINK_DAY_LIMIT = 3;
export const GENERATE_LINK_IP_DAY_LIMIT = 10;

// limit using generateLink from a single ip
const userIPrateLimiter = new RateLimiterMemory({
  keyPrefix: 'user-ip-generate-link',
  points: GENERATE_LINK_IP_DAY_LIMIT,
  duration: DAY,
});

export const generateLink: MutationResolvers['generateLink'] = async (
  parent,
  { data: { email } },
  { prisma, ip },
) => {
  if (!isTestEnv()) {
    try {
      await userIPrateLimiter.consume(ip);
    } catch (error) {
      return { success: false, message: 'Too many requests' };
    }
  }

  try {
    const user = await getOrMakeUser({ email });

    // limit usage for a single email per day
    const recentServicesCount = await prisma.feedbackBase.count({
      where: {
        userId: user.id,
        createdAt: {
          gte: getRecentTime(DAY),
        },
      },
    });

    if (recentServicesCount >= GENERATE_LINK_DAY_LIMIT) {
      return {
        success: false,
        message: 'You have reached the daily limit for a free user.',
      };
    }

    const feedbackUid = feedbackUniqueId();
    const reportUid = nanoid();
    await prisma.feedbackBase.create({
      data: { feedbackUid, reportUid, user: { connect: { id: user.id } } },
    });

    const msg = {
      to: email,
      from: {
        name: 'Miten.io',
        email: EMAIL_SENDER,
      },
      reply_to: REPLY_TO,
      templateId: FEEDBACK_TEMPLATE_ID,
      dynamicTemplateData: {
        feedback: `${process.env.CLIENT_ADDRESS}/feedback/${feedbackUid}`,
        report: `${process.env.CLIENT_ADDRESS}/report/${reportUid}`,
      },
    };

    if (isDevEnv()) {
      console.log('Email sent: ', msg);
    } else {
      await mail.send(msg);
    }

    return { success: true };
  } catch (error) {
    console.log('error in generateLink', error);
    return {
      success: false,
      message: 'Sending feedback link was unsuccessful',
    };
  }
};
