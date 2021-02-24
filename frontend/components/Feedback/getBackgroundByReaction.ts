import { Reactions } from './constants';

export const getBackgroundByReaction = (reaction: Reactions | null): string => {
  switch (reaction) {
    case Reactions.HORRIBLE:
      return '#f7797da6';

    case Reactions.BAD:
      return 'linear-gradient(to left, #fbd78669, #f7797da6)';

    case Reactions.MEH:
      return '#fbd78669';

    case Reactions.GOOD:
      return 'linear-gradient(to left, #c6ffdd99, #fbd78669)';

    case Reactions.AWESOME:
      return '#c6ffdd99';

    default:
      return '';
  }
};
