import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { MeetingInfo } from './Report/MeetingInfo';
import { Comments } from './Report/Comments';
import { ReactionsChart } from './Report/ReactionsChart';
import { CommentsChart } from './Report/CommentsChart';
import { NoResponse } from './Report/NoResponse';
import { Footer } from './Feedback/Footer';
import { MoreDataForm } from './Report/MoreDataForm';
import { useGetReportLazyQuery } from '../lib/graphql/hooks';

const Root = styled.div`
  margin: auto;
`;

const FooterSection = styled(Footer)`
  padding: 30px;
`;

type Props = {
  reportUid?: string;
};

const Report: FC<Props> = (props) => {
  const [getReport, { data, loading, error }] = useGetReportLazyQuery();
  const { reportUid } = props;

  // To avoid sending the extra queries when the reportUid is empty
  // like in initial load
  useEffect(() => {
    if (reportUid) {
      getReport({
        variables: { reportUid: reportUid },
      });
    }
  }, [reportUid, getReport]);

  if (!reportUid) return <Root />;
  if (error) return <Root>Error</Root>;
  if (loading) return <Root>Loading</Root>;
  if (!data?.report) return <Root>404: Wrong link</Root>;

  const responses = data.report.feedbackResponses;

  return (
    <Root>
      <MeetingInfo
        title={data.report.title || 'Your Meeting'}
        date={data.report.createdAt || ''}
      />
      {responses.length > 0 ? (
        <>
          <ReactionsChart data={responses} />
          <CommentsChart data={responses} />
          <Comments data={responses} />
          <MoreDataForm />
        </>
      ) : (
        <NoResponse feedbackLink={data.report.feedbackLink} />
      )}
      <FooterSection />
    </Root>
  );
};

export default Report;
