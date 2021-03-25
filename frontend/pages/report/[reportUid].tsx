import React, { FC } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Report from '../../components/Report';

const ReportPage: FC = () => {
  const router = useRouter();
  const { reportUid: queryReportUid } = router.query;
  const reportUid = Array.isArray(queryReportUid) ? queryReportUid[0] : queryReportUid;

  return (
    <>
      <Head>
        <title>Miten | Report</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Report reportUid={reportUid} />
    </>
  );
};

export default ReportPage;
