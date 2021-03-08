import { ApolloError } from '@apollo/client';
import { GenerateLinkMutation } from '../../lib/graphql/hooks';

export const getMessage = (
  data?: GenerateLinkMutation | null,
  error?: ApolloError,
): string => {
  if (error) return error.message;

  if (data?.generateLink?.message) {
    return data.generateLink.message;
  } else if (data?.generateLink?.success) {
    return 'Check your email!';
  }

  return '';
};
