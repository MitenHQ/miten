import React, { FC } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import styled from 'styled-components';
import { ChangeLocale } from './Header/ChangeLocale';
import { Drawer } from './Drawer';

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
  padding-top: 1rem;
`;

const Flex = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

export const Header: FC = () => {
  return (
    <Root>
      <Container>
        <Flex>
          <NextLink href="/" passHref>
            <a href="/" aria-label="homepage">
              <Image width="128" height="58" src={'/img/logo.png'} alt="Miten" />
            </a>
          </NextLink>
          <Drawer>
            <ChangeLocale />
          </Drawer>
        </Flex>
      </Container>
    </Root>
  );
};
