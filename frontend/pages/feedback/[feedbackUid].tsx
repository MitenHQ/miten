import React, { FC } from 'react';
import { useRouter } from 'next/router';
import Feedback from '../../components/Feedback';
import { Layout } from '../../components/Layout';

const FeedbackPage: FC = () => {
  const router = useRouter();
  const { feedbackUid: queryFeedbackUid } = router.query;
  const feedbackUid = Array.isArray(queryFeedbackUid)
    ? queryFeedbackUid[0]
    : queryFeedbackUid;

  return (
    <Layout title="How was the meeting?">
      <Feedback feedbackUid={feedbackUid} />
    </Layout>
  );
};

export default FeedbackPage;
