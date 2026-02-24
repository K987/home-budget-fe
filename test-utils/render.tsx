import { MantineProvider } from '@mantine/core';
import { render as vitestBrowserRender } from 'vitest-browser-react';

import { mantineTheme } from '@/theme';

export function render(ui: React.ReactNode) {
  return vitestBrowserRender(<>{ui}</>, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <MantineProvider theme={mantineTheme} env="test">
        {children}
      </MantineProvider>
    ),
  });
}
