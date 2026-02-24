import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { type MantineColorScheme, MantineProvider } from '@mantine/core';
import React from 'react';

import { messages as messagesEn } from '@/locales/en/messages.ts';
import { messages as messagesHu } from '@/locales/hu/messages.ts';
import { mantineTheme } from '@/theme.ts';

import '@mantine/core/styles.css';

interface AppProviderProps {
  locale: string;
  forceScheme?: MantineColorScheme;
  children: React.ReactNode;
}

i18n.load({
  en: messagesEn,
  hu: messagesHu,
});

const AppProvider = ({ locale, forceScheme, children }: AppProviderProps) => {
  i18n.activate(locale || 'en');
  return (
    <I18nProvider i18n={i18n}>
      <MantineProvider
        theme={mantineTheme}
        forceColorScheme={
          !forceScheme || forceScheme === 'auto' ? 'dark' : forceScheme
        }
      >
        {children}
      </MantineProvider>
    </I18nProvider>
  );
};

export default AppProvider;
