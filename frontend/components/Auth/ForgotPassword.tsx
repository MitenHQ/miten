import React, { FC, useRef } from 'react';
import { Button, FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { EmailInput, useForgotPasswordMutation } from '../../lib/graphql/hooks';
import { AuthContainer } from './AuthContainer';
import { Link } from './Link';
import { useRedirectToEmailSentPage } from './useEmailSentRouter';
import { emailRegex } from '../utils/constants';

export const ForgotPassword: FC = () => {
  const redirectToResEmailSent = useRedirectToEmailSentPage(); // used to redirect to EmailSent component after submit and sending email as a location state
  const { handleSubmit, register, errors, watch } = useForm<EmailInput>(); // handles form values
  const email = useRef<string | null | undefined>(''); // to use form watch and get email field value to send it for EmailSent component on the success redirect
  email.current = watch('email', '');
  const [forgotPasswordMutation, { loading, data }] = useForgotPasswordMutation({
    errorPolicy: 'all',
  }); // request handler

  const handle = async (values: EmailInput): Promise<void> => {
    const { data } = await forgotPasswordMutation({ variables: { credentials: values } });
    // if it was successful
    if (email.current && data?.forgotPassword?.success) {
      redirectToResEmailSent(email.current);
    }
  };

  return (
    <AuthContainer title="Reset your password" onSubmit={handleSubmit(handle)}>
      <FormControl id="email">
        <FormLabel>Email address</FormLabel>
        <Input
          name="email"
          placeholder="Email"
          type="email"
          ref={register({
            required: 'Email is required to recover password',
            pattern: {
              message: 'Email is not entered correctly',
              value: emailRegex,
            },
          })}
        />
        <FormHelperText>{errors.email?.message}</FormHelperText>
      </FormControl>
      {data?.forgotPassword?.message}
      <Button type="submit" disabled={loading} colorScheme="teal">
        Recover account
      </Button>
      <Link href={'/login'}>Login</Link>
      <Link href={'/register'}>Create an account</Link>
    </AuthContainer>
  );
};
