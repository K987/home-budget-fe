import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import * as React from 'react';

import './App.css';

interface AppProviderProps {
  locale: string;
  children: React.ReactNode;
}

i18n.load({
  en: {},
  hu: {}, //TODO load messages
});

const AppProvider = ({ locale, children }: AppProviderProps) => {
  i18n.activate(locale || 'en');
  return <I18nProvider i18n={i18n}>{children}</I18nProvider>;
};

export default AppProvider;
