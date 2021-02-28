import { FeedbackResponse } from '../../lib/graphql/hooks';

export type ChartFeedbackResponse = Pick<FeedbackResponse, 'rating' | 'items'>;
