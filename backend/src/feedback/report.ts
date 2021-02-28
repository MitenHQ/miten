import {
  FeedbackBase,
  FeedbackResponse,
  QueryResolvers,
} from '../graphql/resolvers-types';
import { makeFeedbackLink, makeReportLink } from './utils/makeLinks';

export const DAY = 24 * 60; // a day is 24h * 60min
export const GENERATE_LINK_DAY_LIMIT = 3;

export const report: QueryResolvers['report'] = async (
  parent,
  { reportUid },
  { prisma },
) => {
  const feedbackBase = await prisma.feedbackBase.findUnique({
    where: { reportUid: reportUid },
    include: { feedbackResponses: true },
  });

  const feedbackLink = makeFeedbackLink(feedbackBase?.feedbackUid || '');
  const reportLink = makeReportLink(feedbackBase?.reportUid || '');

  return { ...feedbackBase, feedbackLink, reportLink } as FeedbackBase & {
    feedbackResponses: FeedbackResponse[];
  };
};
