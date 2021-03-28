import React, { FC } from 'react';
import { createContentfulGrapqlQLClient } from '../lib/contentfulClient';
import { Layout } from '../components/Layout';
import { GetServerSideProps } from 'next';
import { gql } from '@apollo/client';
import { BlogPostCollection } from '../lib/graphql/hooks';
import Link from 'next/link';

type Props = {
  blogPostCollection: BlogPostCollection;
};

const BlogPage: FC<Props> = ({ blogPostCollection }) => {
  return (
    <Layout title={'Miten Blog'}>
      {blogPostCollection.items.map((post, i) => (
        <div key={post?.slug || i}>
          <Link href={'/blog/' + post?.slug || './'}>{post?.title}</Link>
        </div>
      ))}
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
