import React, { FC } from 'react';
import Home from '../components/Home';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { defaultLocale } from '../components/utils/constants';
import { Layout } from '../components/Layout';

const HomePage: FC = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || defaultLocale, ['common', 'home'])),
  },
});

export default HomePage;
