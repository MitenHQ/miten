import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import React, { FC } from 'react';
import styled from 'styled-components';

const Root = styled.section`
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 768px) {
    padding: 8rem 0 6rem;
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
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 400px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Col = styled.div`
  display: block;
  flex: 0 0 45.83333333%;
  max-width: 45.83333333%;
`;

type Section = { icon?: string; title?: string; content?: string };
type Props = Section & { section?: Section[]; id?: string; button?: any[] };

export const RightContentBlock: FC<Props> = ({
  title,
  content,
  button,
  icon,
  id,
  children,
}) => {
  return (
    <Root>
      <Row id={id}>
        <Col>
          <ContentWrapper>
            <Title>{title}</Title>
            <Content>{content}</Content>
            <ButtonWrapper>
              {button &&
                typeof button === 'object' &&
                button.map((item, id) => {
                  return (
                    <Button key={id} color={item.color} width="true">
                      {item.title}
                    </Button>
                  );
                })}
            </ButtonWrapper>
            {children}
          </ContentWrapper>
        </Col>
        <Col>
          <Image
            src={'/img/' + icon}
            className="about-block-image"
            width="100%"
            height="100%"
          />
        </Col>
      </Row>
    </Root>
  );
};
