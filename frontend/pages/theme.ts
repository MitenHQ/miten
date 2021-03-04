import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: () => ({
      'html, body': {
        margin: 0,
        padding: 0,
        height: '100%',
      },
      '#__next': {
        height: '100%',
      },
    }),
  },
});
