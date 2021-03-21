export const localeTitles: { [locale: string]: string } = {
  'fi-FI': 'Suomi',
  'en-US': 'English',
  'fa-IR': 'فارسی',
};

export const getLocaleTitle = (title: string): string => localeTitles[title];
