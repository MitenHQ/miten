import React, { FC } from 'react';
import styled from 'styled-components';
import { theme } from '@chakra-ui/react';
import { LimitWidth } from './LimitWidth';

const Root = styled.div`
  background-color: ${(theme as any).colors.purple[50]};
  padding: 30px 30px;
`;

const Title = styled.h3`
  color: ${(theme as any).colors.purple[800]};
  font-size: 20px;
  margin-bottom: 10px;
`;

const SubTitle = styled.div`
  font-size: 16px;
  color: ${(theme as any).colors.purple[600]};
`;

export const NoResponse: FC = () => (
  <Root>
    <LimitWidth>
      <Title>No response yet</Title>
      <SubTitle>
        <p>Have you shared the feedback link to your audience?</p>
        <p>Find the feedback link in your mailbox, and share that with the attendees.</p>
        <p>
          You can share the feedback link when sending the meeting invite or at the end of
          the meeting. Remind attendees to provide feedback at the end of the meeting.
        </p>
        <p>
          If they use the link to submit feedback, you can see the anonymous responses
          here.
        </p>
      </SubTitle>
    </LimitWidth>
  </Root>
);
