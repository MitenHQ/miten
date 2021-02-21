import { Resolvers } from '../graphql/resolvers-types';
import { generateLink } from './generateLink';

const resolver: Resolvers = {
  Query: {
    report: () => ({ title: 'Sample', date: 'Feb. 23rd 2021' }),
  },
  Mutation: {
    generateLink,
  },
};

export default resolver;
