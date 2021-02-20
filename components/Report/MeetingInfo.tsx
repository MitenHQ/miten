import React, { FC } from 'react';
import styled from 'styled-components';
import { theme } from '@chakra-ui/react';

const Root = styled.div`
  background-color: ${theme.colors.orange[100]};
  padding: 50px 30px;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 500;
  color: ${theme.colors.orange[800]};
`;

const SubTitle = styled.div`
  font-size: 16px;
  color: ${theme.colors.orange[700]};
`;

type Props = {
  title: string;
  date: string;
};

export const MeetingInfo: FC<Props> = (props) => (
  <Root>
    <Title>{props.title} Report</Title>
    <SubTitle>{props.date}</SubTitle>
  </Root>
);
