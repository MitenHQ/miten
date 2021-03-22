import React, { FC } from 'react';
import Head from 'next/head';
import { Login } from '../components/Auth/Login';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { defaultLocale } from '../components/utils/constants';

const LoginPage: FC = () => {
  return (
    <>
      <Head>
        <title>Miten - Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || defaultLocale, ['common', 'login'])),
  },
});

export default LoginPage;
