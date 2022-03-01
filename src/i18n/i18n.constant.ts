import * as en from './locales/en.json';
import * as storybook from './locales/storybook.json';

export const AVAILABLE_LOCALES = {
  en: (en as any).default || en,
};

export const STORYBOOK_LOCALES = (storybook as any).default || storybook;
