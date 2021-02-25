import React, { FC } from 'react';
import styled from 'styled-components';
import { Reactions } from './constants';
import { useReactionAnimations } from './ReactionsForm/useReactionAnimations';
import { AnimatedEmojiButton } from './ReactionsForm/AnimatedEmojiButton';

const Root = styled.div`
  display: inline-grid;
  grid-template-columns: 70px 70px 70px 70px 70px;
  grid-gap: 3px;
  justify-items: center;
  align-items: center;
  margin: 20px 0;
`;

type Props = {
  reaction: Reactions | null;
  selectReaction: (reaction: Reactions) => () => void;
};

export const ReactionsForm: FC<Props> = ({ reaction, selectReaction }) => {
  const [
    horribleAnimation,
    badAnimation,
    mehAnimation,
    goodAnimation,
    awesomeAnimation,
  ] = useReactionAnimations(reaction);

  return (
    <Root>
      <AnimatedEmojiButton
        onClick={selectReaction(Reactions.HORRIBLE)}
        emoji="😠"
        label="Horrible"
        animation={horribleAnimation}
        tabIndex={
          // To disable focus when it's not showing
          reaction === null || reaction === Reactions.HORRIBLE ? (null as any) : -1
        }
      ></AnimatedEmojiButton>
      <AnimatedEmojiButton
        onClick={selectReaction(Reactions.BAD)}
        emoji="😕"
        label="Bad"
        animation={badAnimation}
        tabIndex={reaction === null || reaction === Reactions.BAD ? (null as any) : -1}
      ></AnimatedEmojiButton>
      <AnimatedEmojiButton
        onClick={selectReaction(Reactions.MEH)}
        emoji="😐"
        label="Meh"
        animation={mehAnimation}
        tabIndex={reaction === null || reaction === Reactions.MEH ? (null as any) : -1}
      ></AnimatedEmojiButton>
      <AnimatedEmojiButton
        onClick={selectReaction(Reactions.GOOD)}
        emoji="😊"
        label="Good"
        animation={goodAnimation}
        tabIndex={reaction === null || reaction === Reactions.GOOD ? (null as any) : -1}
      ></AnimatedEmojiButton>
      <AnimatedEmojiButton
        onClick={selectReaction(Reactions.AWESOME)}
        emoji="😍"
        label="Awesome"
        animation={awesomeAnimation}
        tabIndex={
          reaction === null || reaction === Reactions.AWESOME ? (null as any) : -1
        }
      ></AnimatedEmojiButton>
    </Root>
  );
};
