import React, { FC } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next';
import { defaultLocale } from '../components/utils/constants';
import { useTranslation } from 'next-i18next';
import { Layout } from '../components/Layout';
import { gql } from '@apollo/client';
import { createContentfulGrapqlQLClient } from '../lib/contentfulClient';
import { Markdown } from '../components/Markdown';

type Props = {
  content: string;
};

const HomePage: FC<Props> = (props) => {
  const { t } = useTranslation('privacy');

  return (
    <Layout title={t('Miten - Privacy Policy')}>
      <Markdown {...props} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const client = createContentfulGrapqlQLClient();

  // TODO use graphql typegen
  const { data } = await client.query({
    query: gql`
      query privacyPage {
        pageCollection(where: { uid: "privacy" }) {
          items {
            content
          }
        }
      }
    `,
  });

  return {
    props: {
      content: data?.pageCollection?.items[0]?.content,
      ...(await serverSideTranslations(locale || defaultLocale, ['common', 'privacy'])),
    },
  };
};

export default HomePage;
