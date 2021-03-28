import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

export const createContentfulGrapqlQLClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri:
        'https://graphql.contentful.com/content/v1/spaces/' +
        process.env.contentfulSpace +
        '/environments/master/?access_token=' +
        process.env.contentfulAccessToken,
    }),
    cache: new InMemoryCache(),
  });
};
