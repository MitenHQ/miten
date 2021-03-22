import React, { FC } from 'react';
import Head from 'next/head';
import { ResetPassword } from '../components/Auth/ResetPassword';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next';
import { defaultLocale } from '../components/utils/constants';

const ResetPasswordPage: FC = () => {
  return (
    <>
      <Head>
        <title>Miten - Reset Password</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ResetPassword />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale, query, res }) => {
  if (!query.token) {
    res.writeHead(302, { Location: `/` });
    res.end();
    return { props: {} };
  }

  return {
    props: {
      ...(await serverSideTranslations(locale || defaultLocale, ['common', 'login'])),
    },
  };
};

export default ResetPasswordPage;
