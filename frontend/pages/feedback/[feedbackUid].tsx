import React, { FC } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Feedback from '../../components/Feedback';

const FeedbackPage: FC = () => {
  const router = useRouter();
  const { feedbackUid: queryFeedbackUid } = router.query;
  const feedbackUid = Array.isArray(queryFeedbackUid)
    ? queryFeedbackUid[0]
    : queryFeedbackUid;

  return (
    <>
      <Head>
        <title>How was the meeting?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Feedback feedbackUid={feedbackUid} />
    </>
  );
};

export default FeedbackPage;
