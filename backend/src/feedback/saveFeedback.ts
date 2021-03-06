import { MutationResolvers } from '../graphql/resolvers-types';
import { isTestEnv } from '../utils/envTools';
import { RateLimiterMemory } from 'rate-limiter-flexible';

export const DAY = 24 * 60; // a day is 24h * 60min
export const GENERATE_LINK_DAY_LIMIT = 3;
export const GENERATE_LINK_IP_DAY_LIMIT = 10;

// limit using saveFeedback from a single ip
const userIPrateLimiter = new RateLimiterMemory({
  keyPrefix: 'user-ip-generate-link',
  points: GENERATE_LINK_IP_DAY_LIMIT,
  duration: DAY,
});

export const saveFeedback: MutationResolvers['saveFeedback'] = async (
  parent,
  { data: { rating, items, comment, feedbackUid } },
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
    // TODO
    // Add a record to feedbackResponse, connect the feedbackBaseId to
    // feedbackBase where the feedbackUid is the one I'm giving you!
    //

    const feedbackBase = await prisma.feedbackBase.findUnique({
      where: { feedbackUid },
      include: { feedbackResponses: true },
    });

    if (!feedbackBase) throw Error('No feedbackBase found');

    await prisma.feedbackResponse.create({
      data: {
        rating,
        items: items || [],
        comment: comment || '',
        feedbackBase: { connect: { id: feedbackBase.id } },
      },
    });

    return { success: true };
  } catch (error) {
    console.log('error in saveFeedback', error);
    return {
      success: false,
      message: 'Saving feedback failed',
    };
  }
};
