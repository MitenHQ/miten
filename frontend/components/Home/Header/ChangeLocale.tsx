import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { Menu, MenuButton, MenuItem, MenuList, Button } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { BiChevronDown } from 'react-icons/bi';
import { FcGlobe } from 'react-icons/fc';
import { getLocaleTitle } from './getLocaleTitle';
import { getLocaleDirection } from '../../../lib/getLocaleDirection';

export const ChangeLocale: FC = () => {
  const { t } = useTranslation('common');
  const { locale: currentLocale, locales, asPath, push, reload } = useRouter();

  return (
    <Menu>
      <MenuButton
        marginRight="1rem"
        as={Button}
        leftIcon={<FcGlobe />}
        rightIcon={<BiChevronDown />}
      >
        {t('Language')}
      </MenuButton>
      <MenuList>
        {locales?.map((locale) => {
          const isActive = locale === currentLocale;

          const handleClick = async (): Promise<void> => {
            await push(asPath, asPath, { locale });
            if (getLocaleDirection(locale) !== getLocaleDirection(currentLocale)) {
              reload();
            }
          };

          return (
            <MenuItem key={locale} isDisabled={isActive} onClick={handleClick}>
              {getLocaleTitle(locale)}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};
