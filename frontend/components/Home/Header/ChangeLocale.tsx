import React, { FC } from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { Menu, MenuButton, MenuItem, MenuList, Button } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { BiChevronDown } from 'react-icons/bi';
import { FcGlobe } from 'react-icons/fc';
import { getLocaleTitle } from './getLocaleTitle';

export const ChangeLocale: FC = () => {
  const { t } = useTranslation('common');
  const { locale: currentLocale, locales, asPath } = useRouter();

  return (
    <Menu>
      <MenuButton as={Button} leftIcon={<FcGlobe />} rightIcon={<BiChevronDown />}>
        {t('Language')}
      </MenuButton>
      <MenuList>
        {locales?.map((locale) => {
          const isActive = locale === currentLocale;

          return (
            <NextLink key={locale} href={asPath} locale={locale} passHref>
              <a href={asPath}>
                <MenuItem isDisabled={isActive}>{getLocaleTitle(locale)}</MenuItem>
              </a>
            </NextLink>
          );
        })}
      </MenuList>
    </Menu>
  );
};
