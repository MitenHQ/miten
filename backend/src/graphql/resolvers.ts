import { mergeResolvers } from '@graphql-tools/merge';
import feedbackResolver from '../feedback/feedback.resolver';

export default mergeResolvers([feedbackResolver]);
