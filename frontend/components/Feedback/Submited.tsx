import { theme } from '@chakra-ui/react';
import React, { FC } from 'react';
import styled from 'styled-components';

const Root = styled.div`
  width: 100%;
  padding: 100px 30px;
  height: 100%;
  text-align: center;
  background: linear-gradient(165deg, #c6ffdd99, #fbd78669, #f7797da6);
  font-size: 20px;
  font-weight: 500;
  color: ${(theme as any).colors.pink[900]};
`;

export const Submited: FC = () => (
  <Root>
    <span role="img" aria-label="Love">
      ❤️
    </span>{' '}
    Thanks for the feedback!
  </Root>
);
