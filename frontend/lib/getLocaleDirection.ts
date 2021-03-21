export const getLocaleDirection = (locale?: string): 'rtl' | 'ltr' =>
  locale == 'fa-IR' ? 'rtl' : 'ltr';
