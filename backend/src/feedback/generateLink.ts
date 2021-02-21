import { MutationResolvers } from '../graphql/resolvers-types';

export const generateLink: MutationResolvers['generateLink'] = () => {
  return {
    id: 0,
    title: 'Sample',
    link: 'https://miten.io/feedback/',
    reportLink: 'https://miten.io/report/',
  };
};
