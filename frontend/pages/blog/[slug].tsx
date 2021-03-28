import React, { FC } from 'react';
import ErrorPage from 'next/error';
import { createContentfulGrapqlQLClient } from '../../lib/contentfulClient';
import { Layout } from '../../components/Layout';
import { GetServerSideProps } from 'next';
import { gql } from '@apollo/client';
import { Heading } from '@chakra-ui/layout';
import ReactMarkdown from 'react-markdown';
import { BlogPost } from '../../lib/graphql/hooks';

type Props = {
  post: BlogPost;
};

const PostPage: FC<Props> = ({ post }) => {
  if (!post) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout title={post.title}>
      <Heading as="h3" size="l">
        {post.title}
      </Heading>
      <ReactMarkdown>{post.body || ''}</ReactMarkdown>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const client = createContentfulGrapqlQLClient();

  // TODO use graphql typegen
  const { data } = await client.query({
    variables: { slug: params?.slug },
    query: gql`
      query blogPostBySlug($slug: String) {
        blogPostCollection(where: { slug: $slug }) {
          items {
            title
            body
            description
            # heroImage {
            #   url
            # }
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
      post: data?.blogPostCollection?.items[0],
    },
  };
};

export default PostPage;
