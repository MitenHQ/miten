import React, { FC } from 'react';
import Head from 'next/head';
import Header from '../components/Header';

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Miten</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          defer
          data-domain="miten.io"
          src="https://plausible.io/js/plausible.js"
        ></script>
      </Head>
      <Header />
    </>
  );
};

export default Home;
