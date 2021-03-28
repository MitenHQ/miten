import React, { FC } from 'react';
import { useRouter } from 'next/router';
import Report from '../../components/Report';
import { Layout } from '../../components/Layout';

const ReportPage: FC = () => {
  const router = useRouter();
  const { reportUid: queryReportUid } = router.query;
  const reportUid = Array.isArray(queryReportUid) ? queryReportUid[0] : queryReportUid;

  return (
    <Layout title={'Miten | Report'}>
      <Report reportUid={reportUid} />
    </Layout>
  );
};

export default ReportPage;
