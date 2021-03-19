import React, { FC } from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { getLocaleTitle } from './getLocaleTitle';

export const ChangeLocale: FC = () => {
  const { locale: currentLocale, locales, asPath } = useRouter();

  return (
    <div>
      {locales?.map((locale) => {
        const isActive = locale === currentLocale;
        return (
          <NextLink key={locale} href={asPath} locale={locale} passHref>
            <a href={asPath}>{getLocaleTitle(locale)}</a>
          </NextLink>
        );
      })}
    </div>
  );
};
