import React, { FC } from 'react';
import Head from 'next/head';
import { ForgotPasswordEmailSent } from '../components/Auth/ForgotPasswordEmailSent';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { defaultLocale } from '../components/utils/constants';

const ForgotPasswordEmailSentPage: FC = () => {
  return (
    <>
      <Head>
        <title>Miten - Forgot Password</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ForgotPasswordEmailSent />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || defaultLocale, ['common', 'login'])),
  },
});

export default ForgotPasswordEmailSentPage;
