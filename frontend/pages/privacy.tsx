import React, { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next';
import { defaultLocale } from '../components/utils/constants';
import { useTranslation } from 'next-i18next';
import { Layout } from '../components/Layout';
import { gql } from '@apollo/client';
import { createContentfulGrapqlQLClient } from '../lib/contentfulClient';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: auto;
  margin-top: 16px;
  margin-bottom: 32px;

  h3 {
    font-size: 18px;
    font-weight: 500;
    margin-top: 16px;
    margin-bottom: 8px;
  }

  ul,
  ol {
    margin: 0 32px;
  }

  a {
    border-bottom: 1px solid #319795;
    color: #319795;
    cursor: pointer;
  }
`;

type Props = {
  content: string;
};

const HomePage: FC<Props> = (props) => {
  const { t } = useTranslation('privacy');

  return (
    <Layout title={t('Miten - Privacy Policy')}>
      <Wrapper>
        <ReactMarkdown>{props.content || ''}</ReactMarkdown>
      </Wrapper>
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
