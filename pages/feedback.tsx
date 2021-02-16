import Head from 'next/head';
import Feedback from '../components/Feedback';

export default function FeedbackPage() {
  return (
    <div>
      <Head>
        <title>Miten Feedback</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Feedback />
      </main>
    </div>
  );
}
