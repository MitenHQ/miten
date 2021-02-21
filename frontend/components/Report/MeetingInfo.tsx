import React, { FC } from 'react';
import styled from 'styled-components';
import { theme } from '@chakra-ui/react';
import { LimitWidth } from './LimitWidth';

const Root = styled.div`
  background-color: ${(theme as any).colors.green[50]};
  padding: 50px 30px;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 500;
  color: ${(theme as any).colors.green[900]};
`;

const SubTitle = styled.div`
  font-size: 16px;
  color: ${(theme as any).colors.green[800]};
`;

type Props = {
  title: string;
  date: string;
};

export const MeetingInfo: FC<Props> = (props) => (
  <Root>
    <LimitWidth>
      <Title>{props.title} Report</Title>
      <SubTitle>{props.date}</SubTitle>
    </LimitWidth>
  </Root>
);
