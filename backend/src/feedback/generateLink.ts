import { nanoid } from 'nanoid';
import mail from '@sendgrid/mail';
import { MutationResolvers } from '../graphql/resolvers-types';
import { getOrMakeUser } from '../user/getOrMakeUser';
import { EMAIL_SENDER, FEEDBACK_TEMPLATE_ID, REPLY_TO } from '../utils/constants';
import { isDevEnv } from '../utils/envTools';
import { feedbackUniqueId } from './utils/feedbackUniqueId';

export const generateLink: MutationResolvers['generateLink'] = async (
  parent,
  { data: { email } },
  { prisma },
) => {
  try {
    const user = await getOrMakeUser({ email });

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

    return {
      // TODO add error handling
      success: true,
    };
  } catch (error) {
    console.log('error in generateLink', error);
    return {
      success: false,
      message: 'Sending feedback link was unsuccessful',
    };
  }
};
