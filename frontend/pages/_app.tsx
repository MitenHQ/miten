import React, { FC } from 'react';
import { ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import { RtlProvider } from '../lib/RTLProvider';
import { appWithTranslation } from 'next-i18next';
import { useApollo } from '../lib/apolloClient';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { theme } from '../lib/theme';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps);
  return (
    <ApolloProvider client={apolloClient}>
      <RtlProvider>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </RtlProvider>
    </ApolloProvider>
  );
};

export default appWithTranslation(App);
