import React, { FC } from 'react';
import Head from 'next/head';
import Feedback from '../components/Feedback';

const FeedbackPage: FC = () => {
  return (
    <>
      <Head>
        <title>Miten Feedback</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Feedback />
    </>
  );
};

export default FeedbackPage;
