import { initializeApollo, addApolloState } from '../lib/apolloClient';

const cacheQuery = async (queries: any, variables: any) => {
  const apolloClient = initializeApollo();
  return Promise.all(
    [].concat(queries).map((query) => {
      return apolloClient.query({
        query,
        variables,
      });
    }),
  ).then(() => {
    return addApolloState(apolloClient, {
      props: {},
      revalidate: 1,
    });
  });
};

export default cacheQuery;
