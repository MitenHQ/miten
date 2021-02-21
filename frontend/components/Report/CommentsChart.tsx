import React, { FC } from 'react';
import styled from 'styled-components';
import { D3Wrapper } from './D3Wrapper';
import { makeStackedBarChart } from './CommentsChart/makeStackedBarChart';
import { getStackedChartData } from './CommentsChart/getStackedChartData';
import { theme } from '@chakra-ui/react';
import { HowToReadStackedChart } from './CommentsChart/HowToReadStackedChart';
import { LimitWidth } from './LimitWidth';

const Root = styled.div`
  background-color: ${theme.colors.yellow[50]};
  padding: 30px 30px;
`;

const Title = styled.h3`
  color: ${theme.colors.yellow[800]};
  font-size: 20px;
  margin-bottom: 10px;
`;

const StackedChart = styled(D3Wrapper)`
  text {
    font-size: 12px;
    transition: 200ms opacity;
  }

  g:hover > text {
    opacity: 1;
  }
`;

type Props = {
  data: any;
};

export const CommentsChart: FC<Props> = (props) => {
  const stackedChartData = getStackedChartData(props.data);

  return (
    <Root>
      <LimitWidth>
        <Title>Areas of strength and improvement</Title>
        <StackedChart data={stackedChartData} makeChart={makeStackedBarChart} />
        <HowToReadStackedChart />
      </LimitWidth>
    </Root>
  );
};
