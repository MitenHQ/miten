import React, { FC } from 'react';
import { ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import { useApollo } from '../lib/apolloClient';
import '../styles/globals.css';
import { AppProps } from 'next/dist/next-server/lib/router/router';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps);
  return (
    <ApolloProvider client={apolloClient}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  );
};

export default App;
