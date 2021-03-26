import React, { FC } from 'react';
import styled from 'styled-components';
import { Footer } from '../Home/Footer';
import { Header } from '../Home/Header';
import { PageContainer } from '../Home/PageContainer';

const Root = styled.div`
  height: 100%;
`;

const Title = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 4rem;
`;

const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  margin: 6rem auto;
  width: 100%;
  max-width: 26rem;
`;

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
`;

type Props = {
  title: string;
  onSubmit: React.FormEventHandler;
};

export const AuthContainer: FC<Props> = (props) => (
  <Root>
    <Header />
    <Title>{props.title}</Title>
    <PageContainer>
      <Form onSubmit={props.onSubmit}>
        <Container>{props.children}</Container>
      </Form>
    </PageContainer>
    <Footer />
  </Root>
);
