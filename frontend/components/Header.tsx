import React, { FC } from 'react';
import { useGenerateLinkMutation } from '../lib/graphql/hooks';
import {
  Button,
  Container,
  Heading,
  Input,
  FormControl,
  FormHelperText,
  FormLabel,
  SimpleGrid,
} from '@chakra-ui/react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { emailRegex } from './utils/constants';
import { getMessage } from './Header/getMessage';

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

type FormValues = {
  email: string;
};

const Header: FC = () => {
  const { handleSubmit, register } = useForm<FormValues>();

  const [generateLink, { loading, data, error }] = useGenerateLinkMutation({
    errorPolicy: 'all',
  });

  const submit = ({ email }: FormValues): void => {
    generateLink({ variables: { data: { email } } });
  };

  return (
    <Root>
      <Container>
        <Heading as="h1" size="md" mb="7">
          Get a feedback form link!
        </Heading>
        <form onSubmit={handleSubmit(submit)}>
          <FormControl id="email">
            <SimpleGrid spacing="10px">
              <FormLabel mb="0">Your email</FormLabel>
              <Input
                type="email"
                name="email"
                ref={register({
                  required: 'Email is required to register',
                  pattern: {
                    message: 'Email is not entered correctly',
                    value: emailRegex,
                  },
                })}
              />
              <Button
                type="submit"
                isLoading={loading}
                loadingText="Generating..."
                colorScheme="teal"
              >
                Get a feedback link!
              </Button>
              <FormHelperText>{'We will never share your email.'}</FormHelperText>
            </SimpleGrid>
          </FormControl>
        </form>
        <MessageContainer>
          <span>{getMessage(data, error)}</span>
        </MessageContainer>
      </Container>
    </Root>
  );
};

export default Header;
