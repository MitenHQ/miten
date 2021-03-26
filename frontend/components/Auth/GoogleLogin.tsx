import React, { FC } from 'react';
import ReactGoogleLogin, {
  GoogleLoginProps,
  GoogleLoginResponse,
} from 'react-google-login';
import { useValidateSocialLoginMutation, AuthServices } from '../../lib/graphql/hooks';
import { setToken } from '../../lib/utils/token';
import { useRouter } from 'next/router';
import { Spinner } from '@chakra-ui/react';
import styled from 'styled-components';

const Root = styled.div`
  margin-bottom: 16px;
  width: 100%;
`;

const GoogleLoginButton = styled(ReactGoogleLogin)`
  width: 100%;
`;

export const GoogleLogin: FC = () => {
  const { push } = useRouter(); // used to redirect after login
  const [validateMutation, { loading, data }] = useValidateSocialLoginMutation({
    errorPolicy: 'all',
  });

  const handleSuccess = async (values: GoogleLoginResponse): Promise<void> => {
    if (values.tokenId) {
      // sending received JWT token from google to our backend to verify it with the secret
      // then we will receive a new (our own signed) JWT token
      const credentials = { token: values.tokenId, service: AuthServices.Google };
      const { data } = await validateMutation({ variables: { credentials } });

      // if it was successful
      if (data?.validateSocialLogin?.success && data?.validateSocialLogin?.token) {
        setToken(data.validateSocialLogin.token);
        push('/app');
      }
    }
  };

  if (!process.env.googleClientID) return null;
  if (loading) return <Spinner colorScheme="teal" />;
  return (
    <Root>
      <GoogleLoginButton
        clientId={process.env.googleClientID}
        onSuccess={handleSuccess as GoogleLoginProps['onSuccess']}
        // onFailure={() => setMessage('Error signing in with google')}
        cookiePolicy={'single_host_origin'}
      />
      <div>{data?.validateSocialLogin?.message}</div>
    </Root>
  );
};
