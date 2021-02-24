import { usePrevious } from '@chakra-ui/react';
import { useSpring } from 'react-spring';
import { Reactions } from '../constants';

const useReactionAnimation = (
  reaction: Reactions,
  currentReaction: Reactions | null,
  prevReaction: Reactions | null,
  offsetMoveX: number,
) => {
  const hideAnimation = useSpring(
    currentReaction
      ? {
          opacity: 1,
          transform: 'scale(1)',
          from: { opacity: 1, transform: 'scale(1)' },
          to: { opacity: 0, transform: 'scale(0.8)' },
        }
      : {
          opacity: 0,
          transform: 'scale(0.8)',
          from: { opacity: 0, transform: 'scale(0.8)' },
          to: { opacity: 1, transform: 'scale(1)' },
        },
  );

  const moveAnimation = useSpring(
    currentReaction
      ? {
          from: { transform: 'translateX(0)' },
          to: { transform: `translateX(${offsetMoveX}px)` },
        }
      : {
          from: { transform: `translateX(${offsetMoveX}px)` },
          to: { transform: 'translateX(0)' },
        },
  );

  if (currentReaction === reaction || prevReaction === reaction) return moveAnimation;

  return hideAnimation;
};

export const useReactionAnimations = (reaction: Reactions | null) => {
  const prevReaction = usePrevious(reaction);
  const horrible = useReactionAnimation(Reactions.HORRIBLE, reaction, prevReaction, 150);

  const bad = useReactionAnimation(Reactions.BAD, reaction, prevReaction, 75);

  const meh = useReactionAnimation(Reactions.MEH, reaction, prevReaction, 0);

  const good = useReactionAnimation(Reactions.GOOD, reaction, prevReaction, -75);

  const awesome = useReactionAnimation(Reactions.AWESOME, reaction, prevReaction, -150);

  return [horrible, bad, meh, good, awesome];
};
