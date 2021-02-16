import { usePrevious } from "@chakra-ui/react";
import { useSpring } from "react-spring";
import { Reactions } from "../constants";

const useReactionAnimation = (
  reaction: Reactions,
  currentReaction: Reactions | null,
  prevReaction: Reactions | null,
  offsetMoveX: number
) => {
  const hideAnimation = useSpring(
    currentReaction
      ? {
          opacity: 1,
          from: { opacity: 1 },
          to: { opacity: 0 }
        }
      : {
          opacity: 0,
          from: { opacity: 0 },
          to: { opacity: 1 }
        }
  );

  const moveAnimation = useSpring(
    currentReaction
      ? {
          from: { transform: "translate(0,0)" },
          to: { transform: `translate(${offsetMoveX}px,-120px)` }
        }
      : {
          from: { transform: `translate(${offsetMoveX}px,-120px)` },
          to: { transform: "translate(0,0)" }
        }
  );

  if (currentReaction === reaction || prevReaction === reaction)
    return moveAnimation;

  return hideAnimation;
};

export const useReactionAnimations = (reaction: Reactions | null) => {
  const prevReaction = usePrevious(reaction);
  const horrible = useReactionAnimation(
    Reactions.HORRIBLE,
    reaction,
    prevReaction,
    150
  );

  const bad = useReactionAnimation(Reactions.BAD, reaction, prevReaction, 75);

  const meh = useReactionAnimation(Reactions.MEH, reaction, prevReaction, 0);

  const good = useReactionAnimation(
    Reactions.GOOD,
    reaction,
    prevReaction,
    -75
  );

  const awesome = useReactionAnimation(
    Reactions.AWESOME,
    reaction,
    prevReaction,
    -150
  );

  return [horrible, bad, meh, good, awesome];
};
