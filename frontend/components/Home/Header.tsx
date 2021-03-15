import React, { FC } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';

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
        <NextLink passHref href="/">
          <LogoContainer aria-label="homepage">
            <Image width="128" height="58" src={'/img/logo.png'} alt="Miten" />
          </LogoContainer>
        </NextLink>
      </Container>
    </Root>
  );
};
