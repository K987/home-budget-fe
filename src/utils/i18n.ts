import { i18n } from '@lingui/core';

import en from '@/assets/en.png';
import hu from '@/assets/hu.png';

export const locales = {
  en: {
    name: 'English',
    icon: en,
  },
  hu: {
    name: 'Magyar',
    icon: hu,
  },
};
export const defaultLocale = 'en';

/**
 * We do a dynamic import of just the catalog that we need
 * @param locale any locale string
 */
export async function dynamicActivate(locale: string) {
  const { messages } = await import(
    /* @vite-ignore */
    `../locales/${locale}/messages`
  );
  i18n.load(locale, messages);
  i18n.activate(locale);
}
