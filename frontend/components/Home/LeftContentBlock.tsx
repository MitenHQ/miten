import Image from 'next/image';
import React, { FC } from 'react';
import styled from 'styled-components';

const Root = styled.section`
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 768px) {
    padding: 4rem 0 2rem;
  }
`;

const Content = styled.p`
  margin: 1.5rem 0 2rem 0;
  color: #343d48;
  font-size: 1.125rem;
  line-height: 1.5715;
`;

const ContentWrapper = styled.div`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 480px) {
    margin: 2rem 0;
  }
`;

const Title = styled.h3`
  color: #0a1f44;
  font-size: 2.575rem;
  line-height: 3.0625rem;
  font-weight: 500;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const ServiceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

const MinTitle = styled.h6`
  font-size: 1rem;
  line-height: 1rem;
  padding: 0.5rem 0;
  font-weight: 500;
`;

const MinPara = styled.p`
  font-size: 0.75rem;
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

const Col = styled.div`
  display: block;
  flex: 50%;
  max-width: 45%;

  @media only screen and (max-width: 1024px) {
    max-width: 48%;
  }
  @media only screen and (max-width: 768px) {
    max-width: 450px;
    width: 100%;
    margin-top: 30px;
  }
`;

type Section = { icon?: string; title?: string; content?: string };
type Props = Section & { section?: Section[]; id?: string };

export const LeftContentBlock: FC<Props> = ({
  icon,
  title,
  content,
  section,
  id,
  children,
}) => {
  return (
    <Root>
      <Row id={id}>
        <Col>
          <Image src={'/img/' + icon} width="500" height="300" layout="responsive" />
        </Col>
        <Col>
          <ContentWrapper>
            <Title>{title}</Title>
            <Content>{content}</Content>
            <ServiceWrapper>
              <Row>
                {section &&
                  typeof section === 'object' &&
                  section.map((item, index) => {
                    return (
                      <Col key={index}>
                        <Image src={'/img/' + item.icon} width="60px" height="60px" />
                        <MinTitle>{item.title}</MinTitle>
                        <MinPara>{item.content}</MinPara>
                      </Col>
                    );
                  })}
                {children}
              </Row>
            </ServiceWrapper>
          </ContentWrapper>
        </Col>
      </Row>
    </Root>
  );
};
