import { Resolvers } from '../graphql/resolvers-types';
import { generateLink } from './generateLink';
import { saveFeedback } from './saveFeedback';
import { report } from './report';

const resolver: Resolvers = {
  Query: {
    report,
  },
  Mutation: {
    generateLink,
    saveFeedback,
  },
};

export default resolver;
