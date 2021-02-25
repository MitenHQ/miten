import React, { useState, FC, FormEvent } from 'react';
import { useGenerateLinkMutation } from '../lib/graphql/hooks';
import styles from '../styles/Home.module.css';
import { Button, Container, Heading, Input, FormControl, FormHelperText, FormLabel, SimpleGrid } from '@chakra-ui/react';
import styled from 'styled-components';

const Root = styled.header`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  padding: 20px; 
  max-width: 90%;
`;

const MessageContainer = styled.section`
  display: flex;
  flex-flow: column nowrap;
  margin-top: 20px;
  color: teal;
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

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault(); if(!email) return; generateLink({ variables: { data: { email } } });
  }

  return (
    <Root>
      <Container>
      <Heading as="h1" size="md" mb="7">Get a feedback form link!</Heading>
      <form onSubmit={handleSubmit}>
     <FormControl id="email">
       <SimpleGrid spacing="10px">
      <FormLabel mb="0">Your email</FormLabel>
      <Input type="email" value={email} onChange={handleChangeEmail} />
      <Button
        type="submit"
        isLoading={loading}
        loadingText="Generating..."
        colorScheme="teal"
      >
        Get a feedback link!
      </Button>
  <FormHelperText>We'll never share your email.</FormHelperText>
       </SimpleGrid>
</FormControl>   
      </form>
      <MessageContainer>
        {data ? <span>The related links has been sent to your email.</span> : error}
      </MessageContainer>
      </Container>
    </Root>
  );
};

export default Header;
