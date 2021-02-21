import React, { FC } from 'react';
import styled from 'styled-components';
import { getData } from './Report/getData';
import { MeetingInfo } from './Report/MeetingInfo';
import { Comments } from './Report/Comments';
import { ReactionsChart } from './Report/ReactionsChart';
import { CommentsChart } from './Report/CommentsChart';
import { Footer } from './Feedback/Footer';
import { MoreDataForm } from './Report/MoreDataForm';

const Root = styled.div`
  margin: auto;
`;

const FooterSection = styled(Footer)`
  padding: 30px;
`;

const Report: FC = () => {
  const data = getData().responds;

  return (
    <Root>
      <MeetingInfo title={getData().title} date={getData().date} />
      <ReactionsChart data={data} />
      <CommentsChart data={data} />
      <Comments data={data} />
      <MoreDataForm />
      <FooterSection />
    </Root>
  );
};

export default Report;
