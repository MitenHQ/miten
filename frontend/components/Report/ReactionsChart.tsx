import React, { FC } from 'react';
import styled from 'styled-components';
import { D3Wrapper } from './D3Wrapper';
import { makeBarChart } from './ReactionsChart/makeBarChart';
import { getBarChartData } from './ReactionsChart/getBarChartData';
import { theme } from '@chakra-ui/react';
import { LimitWidth } from './LimitWidth';

const Root = styled.div`
  background-color: ${theme.colors.purple[50]};
  padding: 30px 30px;
`;

const Title = styled.h3`
  color: ${theme.colors.purple[800]};
  font-size: 20px;
  margin-bottom: 10px;
`;

type Props = {
  data: any;
};

export const ReactionsChart: FC<Props> = (props) => {
  const data = getBarChartData(props.data);

  return (
    <Root>
      <LimitWidth>
        <Title>
          Responses to <i>&quot;How was the meeting experience?&quot;</i>
        </Title>
        <D3Wrapper data={data} makeChart={makeBarChart} />
      </LimitWidth>
    </Root>
  );
};
