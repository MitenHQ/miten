import React, { FC } from 'react';
import styled from 'styled-components';
import { getEmojiFromRating } from './getEmojiFromRating';
import { theme } from '@chakra-ui/react';
import { LimitWidth } from './LimitWidth';
import { FeedbackResponse } from '../../lib/graphql/hooks';

const Root = styled.div`
  background-color: ${(theme as any).colors.pink[50]};
  padding: 30px 30px;
`;

const Title = styled.h3`
  color: ${(theme as any).colors.pink[800]};
  font-size: 20px;
  margin-bottom: 10px;
`;

const Container = styled.div`
  max-width: 700px;
`;

const Emoji = styled.span`
  cursor: default;
  opacity: 0.5;
  transition: 200ms opacity;
`;

const Comment = styled.div`
  padding: 4px;
  :hover ${Emoji} {
    opacity: 1;
  }
`;

const Text = styled.span`
  padding: 0 10px;
`;

type Props = {
  data: Pick<FeedbackResponse, 'comment' | 'rating'>[];
};

export const Comments: FC<Props> = (props) => {
  const data = props.data.filter(({ comment }) => !!comment);
  if (data.length === 0)
    return (
      <Root>
        <LimitWidth>
          <Title>No furthur comments</Title>
        </LimitWidth>
      </Root>
    );
  return (
    <Root>
      <LimitWidth>
        <Title>Written comments</Title>
        <Container>
          {data.map(({ rating, comment }, i: number) => (
            <Comment key={i}>
              <Emoji>{getEmojiFromRating(rating)}</Emoji>
              <Text>{comment}</Text>
            </Comment>
          ))}
        </Container>
      </LimitWidth>
    </Root>
  );
};
