import React, { FC } from 'react';
import ErrorPage from 'next/error';
import { createContentfulGrapqlQLClient } from '../../lib/contentfulClient';
import { Layout } from '../../components/Layout';
import { GetServerSideProps } from 'next';
import { gql } from '@apollo/client';
import { Heading } from '@chakra-ui/layout';
import { BlogPost } from '../../lib/graphql/hooks';
import { Markdown } from '../../components/Markdown';
import Image from 'next/image';
import styled from 'styled-components';

type Props = {
  post: BlogPost;
};

const ImageContainer = styled.div`
  margin: 54px;
`;

const PostPage: FC<Props> = ({ post }) => {
  if (!post) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout title={post.title}>
      <Heading as="h2" size="xl">
        {post.title}
      </Heading>
      <ImageContainer>
        <Image
          width={post.heroImage?.width || '800'}
          height={post.heroImage?.height || '600'}
          layout="responsive"
          src={post.heroImage?.url ?? ''}
          alt={post.heroImage?.title ?? ''}
        />
        <div>{post.heroImage?.description}</div>
      </ImageContainer>
      <Markdown content={post.body} />
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
      post: data?.blogPostCollection?.items[0],
    },
  };
};

export default PostPage;
