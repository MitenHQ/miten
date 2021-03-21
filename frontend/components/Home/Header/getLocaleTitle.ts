export const localeTitles: { [locale: string]: string } = {
  'fi-FI': 'Suomi',
  'en-US': 'English',
};

export const getLocaleTitle = (title: string): string => localeTitles[title];
