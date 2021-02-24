import { useSpring } from 'react-spring';
import { Reactions } from './constants';

export const useAppAnimations = (reaction: Reactions | null) => {
  const subtitleAnimation = useSpring(
    reaction
      ? {
          display: 'block',
          opacity: 1,
          from: { opacity: 1, display: 'block' },
          to: { opacity: 0, display: 'none' },
        }
      : {
          display: 'none',
          opacity: 0,
          from: { opacity: 0, display: 'none' },
          to: { opacity: 1, display: 'block' },
        },
  );

  const detailsFormAnimation = useSpring(
    reaction
      ? {
          display: 'none',
          opacity: 0,
          transform: 'translate(0,0)',
          from: { display: 'none', opacity: 0, transform: 'translate(0,0)' },
          to: { display: 'block', opacity: 1, transform: 'translate(0,0)' },
        }
      : {
          display: 'none',
          opacity: 0,
          transform: 'translate(0,0)',
          from: {
            display: 'block',
            opacity: 1,
            transform: 'translate(0,0)',
          },
          to: { display: 'none', opacity: 0, transform: 'translate(0,0)' },
        },
  );

  return [subtitleAnimation, detailsFormAnimation];
};
