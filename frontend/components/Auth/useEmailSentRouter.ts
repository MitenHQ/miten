import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export const useEmailSentLocationState = (): string | null => {
  const { replace } = useRouter();
  const [email, setEmail] = useState<string | null>(null);
  useEffect(() => {
    const emailFromStorage = sessionStorage.getItem('forgotPasswordEmail');
    setEmail(emailFromStorage);
    if (!emailFromStorage) {
      // if user came from somewhere other than forgotPassword page, we can't reset their password
      replace('/forgotPassword');
    }
    return () => sessionStorage.removeItem('forgotPasswordEmail');
  }, [replace]);

  return email;
};

type RedirectToEmailSentPage = (email: string) => void;
export const useRedirectToEmailSentPage = (): RedirectToEmailSentPage => {
  const { push } = useRouter();

  return (email) => {
    sessionStorage.setItem('forgotPasswordEmail', email);
    push({ pathname: '/forgotPasswordEmailSent' });
  };
};
