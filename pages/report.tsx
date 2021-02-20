import Head from 'next/head';
import Report from '../components/Report';

export default function ReportPage() {
  return (
    <>
      <Head>
        <title>Miten Report</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Report />
    </>
  );
}
