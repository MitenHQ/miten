import { QueryResolvers } from '../graphql/resolvers-types';

export const DAY = 24 * 60; // a day is 24h * 60min
export const GENERATE_LINK_DAY_LIMIT = 3;

export const report: QueryResolvers['report'] = async (
  parent,
  { reportUid },
  { prisma },
) => {
  return await prisma.feedbackBase.findUnique({
    where: { reportUid: reportUid },
    include: { feedbackResponse: true },
  });
};
