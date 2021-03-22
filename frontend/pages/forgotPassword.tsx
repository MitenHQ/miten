import React, { FC } from 'react';
import Head from 'next/head';
import { ForgotPassword } from '../components/Auth/ForgotPassword';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { defaultLocale } from '../components/utils/constants';

const ForgotPasswordPage: FC = () => {
  return (
    <>
      <Head>
        <title>Miten - Forgot Password</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ForgotPassword />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || defaultLocale, ['common', 'login'])),
  },
});

export default ForgotPasswordPage;
