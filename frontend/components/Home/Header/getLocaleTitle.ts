export const localeTitles: { [locale: string]: string } = {
  'fi-FI': 'Finnish',
  'en-US': 'English',
};

export const getLocaleTitle = (title: string): string => localeTitles[title];
