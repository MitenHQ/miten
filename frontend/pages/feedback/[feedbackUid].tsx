import React, { FC } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Feedback from '../../components/Feedback';

const FeedbackPage: FC = () => {
  const router = useRouter();
  const { feedbackUid } = router.query;

  return (
    <>
      <Head>
        <title>Miten Report</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Feedback feedbackUid={feedbackUid} />
    </>
  );
};

export default FeedbackPage;
