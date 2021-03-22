import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useRememberMe } from '../../lib/utils/rememberMe';
import { setToken } from '../../lib/utils/token';
import { CredentialsInput, useLoginMutation } from '../../lib/graphql/hooks';
import { AuthContainer } from './AuthContainer';
import { GoogleLogin } from './GoogleLogin';
import {
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
} from '@chakra-ui/react';
import { emailRegex } from '../utils/constants';
import { useRouter } from 'next/router';
import { Link } from './Link';

export const Login: FC = () => {
  const { push } = useRouter(); // used to redirect after login
  const { handleSubmit, register, errors } = useForm<CredentialsInput>(); // handles form values
  const [remember, setRemember] = useRememberMe(false); // preserves rememberMe state in the localStorage
  const [loginUserMutation, { loading, data }] = useLoginMutation({
    errorPolicy: 'all',
  }); // request handler

  const handle = async (values: CredentialsInput): Promise<void> => {
    const { data } = await loginUserMutation({ variables: { credentials: values } });
    // if it was successful
    if (data?.login?.success && data?.login?.token) {
      setToken(data.login.token);
      push('/');
    }
  };

  const handleRememberMe = (): void => setRemember(!remember);

  return (
    <AuthContainer title="Login to Miten dashboard" onSubmit={handleSubmit(handle)}>
      <GoogleLogin />
      <Divider />
      <Heading py="4" as="h2" size="l">
        Or login with your email
      </Heading>
      <FormControl id="email">
        <FormLabel>Email address</FormLabel>
        <Input
          name="email"
          placeholder="Email"
          type="email"
          ref={register({
            required: 'Email is required to login',
            pattern: {
              message: 'Email is not entered correctly',
              value: emailRegex,
            },
          })}
        />
        <FormHelperText>{errors.email?.message}</FormHelperText>
      </FormControl>
      <FormControl id="password">
        <FormLabel>Password</FormLabel>
        <Input
          name="password"
          placeholder="Password"
          type="password"
          ref={register({ required: 'Password is requried to login' })}
        />
        <FormHelperText>{errors.password?.message}</FormHelperText>
      </FormControl>
      <Checkbox
        colorScheme="teal"
        marginY="16px"
        onChange={handleRememberMe}
        checked={remember}
      >
        Remember me
      </Checkbox>
      {data?.login?.message}
      <Button type="submit" disabled={loading} colorScheme="teal">
        Login
      </Button>
      <Link href={'/forgotPassword'}>Forgot your password?</Link>
      <Link href={'/register'}>Create account</Link>
    </AuthContainer>
  );
};
