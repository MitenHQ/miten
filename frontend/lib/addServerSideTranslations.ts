import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { defaultLocale } from '../components/utils/constants';

/*
 * This is a default getStaticProps to inject the translations, if the page needs more static props
 * consider copy-pasting contents of this file to your page and adding them there and not extending this.
 */
type AddServerSideTranslations = (page: string) => { getStaticProps: GetStaticProps };
export const addServerSideTranslations: AddServerSideTranslations = (page) => ({
  getStaticProps: async ({ locale }) => ({
    props: {
      ...(await serverSideTranslations(locale || defaultLocale, [page])),
    },
  }),
});
