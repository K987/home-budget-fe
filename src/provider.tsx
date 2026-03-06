import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { type MantineColorScheme, MantineProvider } from '@mantine/core';
import React, { useEffect } from 'react';

import { mantineTheme } from '@/theme.ts';
import '@mantine/core/styles.css';
import { defaultLocale, dynamicActivate } from '@/utils/i18n.ts';

interface AppProviderProps {
  locale: string;
  forceScheme?: MantineColorScheme;
  children: React.ReactNode;
}

const AppProvider = ({ locale, forceScheme, children }: AppProviderProps) => {
  useEffect(() => {
    // With this method we dynamically load the catalogs
    dynamicActivate(locale || defaultLocale);
  }, [locale]);
  return (
    <I18nProvider i18n={i18n}>
      <MantineProvider
        theme={mantineTheme}
        defaultColorScheme={forceScheme || 'light'}
      >
        {children}
      </MantineProvider>
    </I18nProvider>
  );
};

export default AppProvider;
