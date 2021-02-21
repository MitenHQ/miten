import React, { FC } from 'react';
import Head from 'next/head';
import Report from '../components/Report';

const ReportPage: FC = () => {
  return (
    <>
      <Head>
        <title>Miten Report</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Report />
    </>
  );
};

export default ReportPage;
