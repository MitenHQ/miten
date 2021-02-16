import Head from 'next/head';
import Feedback from '../components/Feedback';

export default function FeedbackPage() {
  return (
    <>
      <Head>
        <title>Miten Feedback</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Feedback />
    </>
  );
}
