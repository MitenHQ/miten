import React, { FC, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { Button, FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react';
import { NewPasswordInput, useResetPasswordMutation } from '../../lib/graphql/hooks';
import { AuthContainer } from './AuthContainer';
import { Link } from './Link';
import { setToken } from '../../lib/utils/token';

type ResetPasswordFormType = Omit<NewPasswordInput, 'token'> & { repeatPassword: string };

export const ResetPassword: FC = () => {
  const { replace, push, query } = useRouter(); // used to redirect to app after successful password reset
  const { token } = query as { token: string };

  const { handleSubmit, register, errors, watch } = useForm<ResetPasswordFormType>(); // handles form values
  const password = useRef<string | null | undefined>(''); // to use form watch and get password field value to compare it with repeatPassword
  password.current = watch('password', '');
  const [resetPasswordMutation, { loading, data }] = useResetPasswordMutation({
    errorPolicy: 'all',
  }); // request handler

  const handle = async (values: ResetPasswordFormType): Promise<void> => {
    const { repeatPassword, ...credentials } = values;
    if (!token) {
      // this actually always exists, because we would redirect user to forgetPassword otherwise
      return;
    }

    const { data } = await resetPasswordMutation({
      variables: { credentials: { ...credentials, token } },
    });
    // if it was successful
    if (data?.resetPassword?.success && data.resetPassword.token) {
      setToken(data.resetPassword.token);
      push('/');
    }
  };

  return (
    <AuthContainer title="Reset your password" onSubmit={handleSubmit(handle)}>
      <FormControl id="password">
        <FormLabel>Password</FormLabel>
        <Input
          name="password"
          placeholder="Password"
          type="password"
          ref={register({ required: 'Password is requried' })}
        />
        <FormHelperText>{errors.password?.message}</FormHelperText>
      </FormControl>
      <FormControl id="repeatPassword">
        <FormLabel>Repeat password</FormLabel>
        <Input
          name="repeatPassword"
          placeholder="Repeat password"
          type="password"
          ref={register({
            validate: (value) =>
              value === password.current || 'The passwords do not match',
          })}
        />
        <FormHelperText>{errors.repeatPassword?.message}</FormHelperText>
      </FormControl>
      {data?.resetPassword?.message}
      <Button type="submit" disabled={loading} colorScheme="teal">
        Reset Password
      </Button>
      <Link href={'/forgotPassword'}>Try another email address</Link>
      <Link href={'/login'}>Login</Link>
      <Link href={'/register'}>Not a user? Create account</Link>
    </AuthContainer>
  );
};
