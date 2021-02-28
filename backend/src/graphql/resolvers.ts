import { mergeResolvers } from '@graphql-tools/merge';
import { DateTimeResolver } from 'graphql-scalars';
import feedbackResolver from '../feedback/feedback.resolver';

export default mergeResolvers([{ DateTime: DateTimeResolver }, feedbackResolver]);
