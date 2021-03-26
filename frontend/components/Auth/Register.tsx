import React, { FC, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  useDisclosure,
} from '@chakra-ui/react';
import { useRegisterMutation, UserInput } from '../../lib/graphql/hooks';
import { useRememberMe } from '../../lib/utils/rememberMe';
import { setToken } from '../../lib/utils/token';
import { AuthContainer } from './AuthContainer';
import { Link } from './Link';
import { useRouter } from 'next/router';
import { emailRegex } from '../utils/constants';
import { backendMessages } from '../../lib/graphql/backendMessages';
import { EmailAlreadyExistsModal } from './EmailAlreadyExistsModal';

type RegisterFormType = UserInput & { repeatPassword: string };

export const Register: FC = () => {
  const { push } = useRouter(); // used to redirect after signup
  const { handleSubmit, register, errors, watch, reset } = useForm<RegisterFormType>(); // handles form values
  const password = useRef<string | null | undefined>(''); // to use form watch and get password field value to compare it with repeatPassword
  password.current = watch('password', '');
  const email = useRef<string | null | undefined>(''); // to use form watch and get email field value to send it for EmailSent component on the success redirect
  email.current = watch('email', '');
  const [remember, setRemember] = useRememberMe(false); // preserves rememberMe state in the localStorage

  const [message, setMessage] = useState<string | null | undefined>(null);
  const [registerUserMutation, { loading, data }] = useRegisterMutation({
    errorPolicy: 'all',
  }); // request handler

  const { isOpen, onOpen, onClose } = useDisclosure(); // to handle showing reset password modal

  const handle = async (values: RegisterFormType): Promise<void> => {
    // remove repeatPassword from values that we sent in the request
    const { repeatPassword, ...user } = values;
    const { data } = await registerUserMutation({ variables: { user } });
    // if it was successful
    if (data?.register?.success && data?.register?.token) {
      setToken(data.register.token);
      push('/');
    }
  };

  const handleRememberMe = (): void => setRemember(!remember);

  useEffect(() => {
    if (data?.register?.message === backendMessages.EMAIL_EXISTS) {
      setMessage(null);
      onOpen();
    } else {
      setMessage(data?.register?.message);
    }
  }, [data?.register?.message, onOpen]);

  return (
    <AuthContainer title="Sign up" onSubmit={handleSubmit(handle)}>
      <FormControl id="name">
        <FormLabel>Name</FormLabel>
        <Input
          name="name"
          placeholder="Name"
          type="name"
          ref={register({
            required: 'name is required',
          })}
        />
        <FormHelperText>{errors.email?.message}</FormHelperText>
      </FormControl>
      <FormControl id="email">
        <FormLabel>Email address</FormLabel>
        <Input
          name="email"
          placeholder="Email"
          type="email"
          ref={register({
            required: 'Email is required to signup',
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
      <Checkbox
        colorScheme="teal"
        marginY="16px"
        onChange={handleRememberMe}
        checked={remember}
      >
        Remember me
      </Checkbox>
      {message}
      <Button type="submit" disabled={loading} colorScheme="teal">
        Create account
      </Button>
      <Link href={'/login'}>Login</Link>
      <EmailAlreadyExistsModal
        isOpen={isOpen}
        onClose={() => {
          reset();
          onClose();
          setMessage(null);
        }}
        email={email.current}
      />
    </AuthContainer>
  );
};
