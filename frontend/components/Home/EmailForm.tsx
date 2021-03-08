import React, { FC } from 'react';
import { useGenerateLinkMutation } from '../../lib/graphql/hooks';
import {
  Button,
  Collapse,
  Input,
  FormControl,
  FormHelperText,
  FormLabel,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { emailRegex } from '../utils/constants';
import { getMessage } from './getMessage';

type FormValues = {
  email: string;
};

export const EmailForm: FC = () => {
  const { handleSubmit, register } = useForm<FormValues>();

  const [generateLink, { loading, data, error }] = useGenerateLinkMutation({
    errorPolicy: 'all',
  });

  const submit = ({ email }: FormValues): void => {
    generateLink({ variables: { data: { email } } });
  };

  return (
    <>
      <Collapse startingHeight={0} in={!data}>
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
      </Collapse>
      <Text fontSize="2xl" color="teal" mt={4}>
        {getMessage(data, error)}
      </Text>
    </>
  );
};
