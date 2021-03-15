import React, { FC } from 'react';
import Image from 'next/image';
import { PageContainer } from './PageContainer';
import styled from 'styled-components';
import NextLink from 'next/link';

const SocialLink: FC<{ href: string; src: string }> = ({ href, src }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" key={src} aria-label={src}>
      <Image src={src} width="25px" height="25px" />
    </a>
  );
};

const Container = styled.footer`
  background: rgb(249, 250, 252);
  padding: 2.5rem 0;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

const LastRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 3rem;
  align-items: center;
`;

const Col = styled.div`
  display: block;
  flex: 33%;
  max-width: 30%;

  @media only screen and (max-width: 1024px) {
    max-width: 30%;
  }
  @media only screen and (max-width: 768px) {
    max-width: 450px;
    width: 100%;
    margin-top: 30px;
  }
`;

const Para = styled.div`
  color: #319795;
  max-width: 340px;
  font-size: 14px;
  width: 100%;
`;

const Chat = styled.p`
  color: #319795;
  max-width: 85px;
  border-bottom: 1px solid #319795;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    border-bottom: 1px solid #c53030;
    color: #c53030;
  }
`;

const Title = styled.h4`
  font-size: 16px;
  text-transform: uppercase;
  color: #000;
  line-height: 3.0625rem;
  font-weight: 500;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;

const Large = styled.a<{ left?: boolean }>`
  font-size: 16px;
  color: #319795;
  text-align: ${(props) => (props.left ? 'left' : '')};
  padding: ${(props) => (props.left ? '0 10%' : '')};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-transform: capitalize;
  line-height: 24px;
  display: block;
  margin-bottom: 0.625rem;

  &:hover {
    color: #c53030;
  }

  @media only screen and (max-width: 768px) {
    padding: 0;
  }
`;

const Extra = styled.section`
  background: rgb(249, 250, 252);
  position: relative;
  width: 100%;
  padding-right: 25px;
  padding-left: 25px;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 2rem;
`;

export const NavLink = styled.a`
  display: block;
  font-size: 1rem;
  margin-bottom: 0.625rem;
  transition: all 0.2s ease-in-out;
  &:hover,
  &:active,
  &:focus {
    color: #15418e;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  position: relative;
`;

const FooterContainer = styled.div`
  max-width: 350px;
  width: 100%;
  display: flex;

  div {
    cursor: pointer;
    margin-right: 15px;
    width: 25px;
    height: 25px;

    &:hover {
      fill: #c53030;
    }
  }
`;

const OpenSource = styled.span`
  margin-right: 10px;
`;

export const Footer: FC = () => {
  return (
    <>
      <Container>
        <PageContainer>
          <Row>
            <Col>
              <Title>Contact</Title>
              <Para>Do you have any questions? Feel free to reach out.</Para>
              <a href="mailto:support@miten.io">
                <Chat>Let&apos;s Chat</Chat>
              </a>
            </Col>
            <Col>
              <Title>Policy</Title>
              <NextLink passHref href="/privacy" aria-label="privacy policy">
                <Large>Privacy policy</Large>
              </NextLink>
              <NextLink passHref href="/" aria-label="terms of service">
                <Large>Terms of service</Large>
              </NextLink>
            </Col>
            <Col>
              <Title>Address</Title>
              <Para>Artingle OY</Para>
              <Para>Konepajankuja 1</Para>
              <Para>00510 Helsinki, Finland</Para>
            </Col>
          </Row>
        </PageContainer>
      </Container>
      <Extra>
        <PageContainer border>
          <LastRow>
            <NavLink href="/">
              <LogoContainer>
                <Image width="128" height="58" src="/img/logo.png" alt="Miten" />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <OpenSource>Miten 2021 © - Opensource software</OpenSource>
              <SocialLink href="https://github.com/MitenHQ/miten" src="/img/github.svg" />
            </FooterContainer>
          </LastRow>
        </PageContainer>
      </Extra>
    </>
  );
};
