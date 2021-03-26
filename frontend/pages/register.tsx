import React, { FC } from 'react';
import Head from 'next/head';
import { Register } from '../components/Auth/Register';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { defaultLocale } from '../components/utils/constants';

const RegisterPage: FC = () => {
  return (
    <>
      <Head>
        <title>Miten - Signup</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Register />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || defaultLocale, ['common', 'login'])),
  },
});

export default RegisterPage;
