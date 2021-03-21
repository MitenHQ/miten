import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { CacheProvider } from '@emotion/react';
import createCache, { StylisPlugin } from '@emotion/cache';
import rtl from 'stylis-plugin-rtl';
import { getLocaleDirection } from './getLocaleDirection';

// NB: A unique `key` is important for it to work!
const options = {
  rtl: { key: 'css-rtl', stylisPlugins: [(rtl as unknown) as StylisPlugin] },
  ltr: { key: 'css-ltr' },
};

export const RtlProvider: FC = ({ children }) => {
  const { locale } = useRouter();
  const dir = getLocaleDirection(locale);
  const cache = createCache(options[dir]);
  return <CacheProvider value={cache}>{children}</CacheProvider>;
};
