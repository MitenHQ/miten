import React, { FC } from 'react';
import styled from 'styled-components';
import { getEmojiFromRating } from './getEmojiFromRating';
import { theme } from '@chakra-ui/react';
import { LimitWidth } from './LimitWidth';

const Root = styled.div`
  background-color: ${theme.colors.pink[50]};
  padding: 30px 30px;
`;

const Title = styled.h3`
  color: ${theme.colors.pink[800]};
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
  data: any;
};

export const Comments: FC<Props> = (props) => {
  const data = props.data.filter((item) => !!item.comment);
  if (data.length === 0) return <div>No furthur comments</div>;
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
