import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { type MantineColorScheme, MantineProvider } from '@mantine/core';
import * as React from 'react';

import '@mantine/core/styles.css';
import { mantineTheme } from './theme.ts';

interface AppProviderProps {
  locale: string;
  forceScheme?: MantineColorScheme;
  children: React.ReactNode;
}

i18n.load({
  en: {},
  hu: {}, //TODO load messages
});

const AppProvider = ({ locale, forceScheme, children }: AppProviderProps) => {
  i18n.activate(locale || 'en');
  return (
    <I18nProvider i18n={i18n}>
      <MantineProvider
        theme={mantineTheme}
        forceColorScheme={
          forceScheme === null || forceScheme === 'auto' ? 'dark' : forceScheme
        }
      >
        {children}
      </MantineProvider>
    </I18nProvider>
  );
};

export default AppProvider;
