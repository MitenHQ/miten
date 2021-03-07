import React, { FC } from 'react';
import { Image } from '@chakra-ui/image';
import styled from 'styled-components';

const Root = styled.header`
  padding: 1rem 0.5rem;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1280px;
  padding-right: 25px;
  padding-left: 25px;
  margin-right: auto;
  margin-left: auto;
`;

const LogoContainer = styled.a`
  display: flex;
  padding-top: 1rem;
`;

export const Header: FC = () => {
  return (
    <Root>
      <Container>
        <LogoContainer href="/" aria-label="homepage">
          <Image width="140px" height="100%" src="img/logo.png" alt="Miten" />
        </LogoContainer>
      </Container>
    </Root>
  );
};
