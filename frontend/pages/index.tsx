import React, { FC } from 'react';
import Head from 'next/head';
import Header from '../components/Header';

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Miten</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </>
  );
};

export default Home;
