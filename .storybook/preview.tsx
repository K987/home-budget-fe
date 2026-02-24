import { Preview } from 'storybook/preview-api';
import { spyOn } from 'storybook/test';

import AppProvider from '@/provider.tsx';

export const beforeEach = () => {
  spyOn(console, 'log').mockName('console.log');
  spyOn(console, 'warn').mockName('console.warn');
};

export const parameters = {
  layout: 'fullscreen',
  options: {
    showPanel: false,
    // @ts-expect-error – storybook throws build error for (a: any, b: any)
    storySort: (a, b) =>
      a.title.localeCompare(b.title, undefined, { numeric: true }),
  },
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
};

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', title: 'English' },
        { value: 'hu', title: 'Hungarian' },
      ],
      showName: true,
    },
  },
};

export const decorators = [
  (
    renderStory: () => React.ReactNode,
    context: { globals: { theme?: string; locale?: string } },
  ) => {
    const locale = context.globals.locale ?? 'en';
    return <AppProvider locale={locale}>{renderStory()}</AppProvider>;
  },
];
