import React, { FC } from 'react';
import { useGenerateLinkMutation } from '../lib/graphql/hooks';
import {
  Button as ChakraButton,
  Input as ChakraInput,
  FormControl,
  FormHelperText,
  FormLabel,
  Image,
  Tooltip,
} from '@chakra-ui/react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { emailRegex } from './utils/constants';
import { getMessage } from './Header/getMessage';

const Root = styled.div`
  background: url('/mario-gogh-VBLHICVh-lI-unsplash.png') no-repeat center center fixed;
  background-size: cover;
  height: 100%;
`;

const Container = styled.div`
  margin: auto;
  width: 90%;
  max-width: 1000px;
  height: 100%;
`;

const Logo = styled.div`
  padding-top: 20px;
  width: 200px;
`;

const Left = styled.div`
  position: relative;
  height: calc(100% - 150px);
  display: grid;
  align-content: center;
  color: white;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 500;
`;

const SubTitle = styled.h3`
  font-size: 24px;
  font-weight: 200;
`;

const Form = styled.form`
  margin-top: 30px;
`;

const Input = styled(ChakraInput)`
  display: inline-block;
  max-width: 338px;
  margin-right: 10px;
  margin-bottom: 10px;
`;

const Button = styled(ChakraButton)`
  vertical-align: top !important;
`;

type FormValues = {
  email: string;
};

const Header: FC = () => {
  const { handleSubmit, register, errors } = useForm<FormValues>();

  const [generateLink, { loading, data, error }] = useGenerateLinkMutation({
    errorPolicy: 'all',
  });

  const submit = ({ email }: FormValues): void => {
    generateLink({ variables: { data: { email } } });
  };

  const message = getMessage(data, error);

  return (
    <Root>
      <Container>
        <Logo>
          <Image src="/logo-white.png" alt="Logo" />
        </Logo>
        <Left>
          <Title>Improve your meetings by getting feedback</Title>
          <SubTitle>Enter you email to receive a feedback form link</SubTitle>
          <Form onSubmit={handleSubmit(submit)}>
            <FormControl id="email">
              <FormLabel mb="0">Your email</FormLabel>
              <Tooltip label={errors?.email?.message} isOpen={!!errors?.email}>
                <Input
                  type="email"
                  name="email"
                  ref={register({
                    required: 'Email is required to get the feedback form link',
                    pattern: {
                      message: 'Email is not entered correctly',
                      value: emailRegex,
                    },
                  })}
                />
              </Tooltip>
              <Button
                type="submit"
                isLoading={loading}
                loadingText="Generating..."
                colorScheme="teal"
              >
                Get a feedback link!
              </Button>
              <FormHelperText color="white">
                {message ? message : 'We will never share your email.'}
              </FormHelperText>
            </FormControl>
          </Form>
        </Left>
      </Container>
    </Root>
  );
};

export default Header;
