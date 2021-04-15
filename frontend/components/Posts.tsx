import React, { FC } from 'react';
import styled from 'styled-components';
import { BlogPost, Maybe } from '../lib/graphql/hooks';
import { PostItem } from './PostItem';

const Root = styled.div`
  margin: 24px;
  display: flex;
  flex-wrap: wrap;
`;

type Props = {
  items: Maybe<BlogPost>[];
};

export const Posts: FC<Props> = (props) => (
  <Root>
    {[...props.items, ...props.items].map((post, i) =>
      post ? <PostItem key={post?.slug || i} {...post} /> : null,
    )}
  </Root>
);
