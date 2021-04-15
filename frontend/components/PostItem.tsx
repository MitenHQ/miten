import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@chakra-ui/react';
import styled from 'styled-components';
import { BlogPost } from '../lib/graphql/hooks';

const Post = styled.div`
  margin: 12px;
  height: 410px;
  width: 320px;
  position: relative;
  border: 1px solid lightgray;
  padding: 10px;
  border-radius: 3px;
  will-change: box-shadow;
  transition: 150ms box-shadow;

  :hover {
    box-shadow: 0px 0px 3px 0px gray;
  }
`;

const ImageContainer = styled.div`
  height: 200px;
  width: 300px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  padding: 16px 0;
`;

export const PostItem: FC<BlogPost> = (props) => (
  <Link href={'/blog/' + props.slug || './'} passHref>
    <a href={'/blog/' + props.slug || './'} aria-label={props.title || ''}>
      <Post>
        <ImageContainer>
          <Image
            height="200"
            width="300"
            layout="responsive"
            src={props.heroImage?.url ?? ''}
            alt={props.heroImage?.title ?? ''}
          />
        </ImageContainer>
        <Title>{props.title}</Title>
        <div>{props.description}</div>
        <Button marginTop="16px" variant="link">
          Read more...
        </Button>
      </Post>
    </a>
  </Link>
);
