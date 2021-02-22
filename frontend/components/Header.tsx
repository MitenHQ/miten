import React, { useState, FC } from 'react';
import { useGenerateLinkMutation } from '../lib/graphql/hooks';
import styles from '../styles/Home.module.css';
import { Button, Input } from '@chakra-ui/react';
import styled from 'styled-components';

const Root = styled.header`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  width: 320px;
  height: 480px;
`;

const MessageContainer = styled.section`
  display: flex;
  flex-flow: column nowrap;
  width: 320px;
  height: 200px;
  color: teal;
  text-align: center;
  & span {
    font-size: 0.8rem;
  }
`;

const Header: FC = () => {
  const [generateLink, { loading, data, error }] = useGenerateLinkMutation({
    errorPolicy: 'all',
  });

  const [email, setEmail] = useState('');

  const handleChangeEmail = (event: any) => {
    setEmail(event.target.value);
  };

  const handleClickGenerate = () => {
    generateLink({ variables: { data: { email } } });
  };

  return (
    <Root>
      <h1 className={styles.title}>Miten!</h1>
      <Input placeholder="Your Email..." value={email} onChange={handleChangeEmail} />
      <Button
        isLoading={loading}
        loadingText="Generating..."
        colorScheme="teal"
        onClick={handleClickGenerate}
      >
        Generate a Link!
      </Button>
      <MessageContainer>
        {data ? <span>The related links has been sent to your email.</span> : error}
      </MessageContainer>
    </Root>
  );
};

export default Header;
