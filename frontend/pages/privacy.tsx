import React, { FC } from 'react';
import Head from 'next/head';
import { PrivacyPolicy } from '../components/PrivacyPolicy';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { defaultLocale } from '../components/utils/constants';
import { useTranslation } from 'next-i18next';

const HomePage: FC = () => {
  const { t } = useTranslation('privacy');
  return (
    <>
      <Head>
        <title>{t('Miten - Privacy Policy')}</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          defer
          data-domain="miten.io"
          src="https://plausible.io/js/plausible.js"
        ></script>
        <meta name="theme-color" content="#2C7A7B" />
        <meta
          name="description"
          content="Miten - Improve your meetings by getting feedback."
        />
        <meta
          name="keywords"
          content="Miten - Improve your meetings by getting feedback."
        />
        <meta property="og:title" content="Miten - Privacy Policy" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://miten.io/" />
        <meta
          property="og:description"
          content="Miten - Improve your meetings by getting feedback."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:locale" content="en_EN" />
        <meta property="og:site_name" content="Miten" />
        <meta property="og:url" content="https://miten.io/" />
        <meta property="twitter:title" content="Miten - Privacy Policy" />
        <meta
          property="twitter:description"
          content="Miten - Improve your meetings by getting feedback."
        />
        <meta property="twitter:site" content="https://miten.io/" />
      </Head>
      <PrivacyPolicy />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || defaultLocale, ['privacy'])),
  },
});

export default HomePage;
