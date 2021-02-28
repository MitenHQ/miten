import { Resolvers } from '../graphql/resolvers-types';
import { generateLink } from './generateLink';
import { report } from './report';

const resolver: Resolvers = {
  Query: {
    report,
  },
  Mutation: {
    generateLink,
  },
};

export default resolver;
