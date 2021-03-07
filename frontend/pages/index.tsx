import React, { FC } from 'react';
import Head from 'next/head';
// import Header from '../components/Header';
import Home from '../components/Home';

const HomePage: FC = () => {
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
        <meta name="theme-color" content="#2C7A7B" />
        <meta
          name="description"
          content="Miten - Improve your meetings by getting feedback."
        />
        <meta
          name="keywords"
          content="Miten - Improve your meetings by getting feedback."
        />
        <meta property="og:title" content="Miten - Meeting feedback tool" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://miten.io/" />
        <meta
          property="og:description"
          content="Miten - Improve your meetings by getting feedback."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:locale" content="en_EN" />
        <meta property="og:site_name" content="Miten" />
        <meta property="og:url" content="https://miten.io/" />
        <meta property="twitter:title" content="Miten - Meeting feedback tool" />
        <meta
          property="twitter:description"
          content="Miten - Improve your meetings by getting feedback."
        />
        <meta property="twitter:site" content="https://miten.io/" />
      </Head>
      <Home />
    </>
  );
};

export default HomePage;
