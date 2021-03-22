import { mergeResolvers } from '@graphql-tools/merge';
import { DateTimeResolver } from 'graphql-scalars';
import feedbackResolver from '../feedback/feedback.resolver';
import userResolver from '../user/user.resolver';

export default mergeResolvers([
  { DateTime: DateTimeResolver },
  userResolver,
  feedbackResolver,
]);
