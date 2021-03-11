import { MutationResolvers } from '../graphql/resolvers-types';

export const saveFeedback: MutationResolvers['saveFeedback'] = async (
  parent,
  { data: { rating, items, comment, feedbackUid } },
  { prisma },
) => {
  try {
    const feedbackBase = await prisma.feedbackBase.findUnique({
      where: { feedbackUid },
      include: { feedbackResponses: true },
    });

    if (!feedbackBase) throw Error('No feedbackBase found');

    await prisma.feedbackResponse.create({
      data: {
        rating,
        items,
        comment: comment || '',
        feedbackBase: { connect: { id: 12 } },
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
