import React, { FC, FormEvent } from 'react';
import { Button } from '@chakra-ui/react';
import { useForgotPasswordMutation } from '../../lib/graphql/hooks';
import { AuthContainer } from './AuthContainer';
import { Link } from './Link';
import { useEmailSentLocationState } from './useEmailSentRouter';

export const ForgotPasswordEmailSent: FC = () => {
  const email = useEmailSentLocationState(); // forgotPasword page will redirect users to here and sends the entered email in session storage
  const [forgotPasswordMutation, { loading, data }] = useForgotPasswordMutation({
    errorPolicy: 'all',
  }); // request handler

  const handle = (event: FormEvent): void => {
    event.preventDefault();
    if (!email) return;
    forgotPasswordMutation({
      variables: { credentials: { email } },
    });
  };

  return (
    <AuthContainer title="" onSubmit={handle}>
      <div>An email with a link to reset your password sent to {email}.</div>
      <div>You can continue from there.</div>
      <div>{data?.forgotPassword?.message}</div>
      <Button type="submit" disabled={loading} colorScheme="teal">
        Resend email
      </Button>
      <Link href={'/forgotPassword'}>Change email address</Link>
      <Link href={'/login'}>Login</Link>
      <Link href={'/register'}>Create account</Link>
    </AuthContainer>
  );
};
