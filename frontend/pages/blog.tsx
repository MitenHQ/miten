import React, { FC } from 'react';
import { createContentfulGrapqlQLClient } from '../lib/contentfulClient';
import { Layout } from '../components/Layout';
import { GetServerSideProps } from 'next';
import { gql } from '@apollo/client';
import { BlogPostCollection } from '../lib/graphql/hooks';
import { Posts } from '../components/Posts';

type Props = {
  blogPostCollection: BlogPostCollection;
};

const BlogPage: FC<Props> = ({ blogPostCollection }) => {
  return (
    <Layout title={'Miten Blog'}>
      <Posts items={blogPostCollection.items} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const client = createContentfulGrapqlQLClient();

  // TODO use graphql typegen
  const { data } = await client.query({
    variables: { slug: params?.slug },
    query: gql`
      query blogPostBySlug {
        blogPostCollection {
          items {
            slug
            title
            description
            heroImage {
              url
              height
              width
              description
            }
            # author {
            #   ... on Person {
            #     name
            #   }
            # }
            publishDate
            tags
          }
        }
      }
    `,
  });

  return {
    props: {
      blogPostCollection: data?.blogPostCollection,
    },
  };
};

export default BlogPage;
