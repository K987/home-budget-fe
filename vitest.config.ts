import { playwright } from '@vitest/browser-playwright';
import { defineConfig, mergeConfig } from 'vitest/config';

import viteConfig from './vite.config';

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      projects: [
        {
          extends: true,
          test: {
            setupFiles: ['./test-utils/setup.ts'],
            browser: {
              enabled: true,
              provider: playwright(),
              viewport: {
                width: 1280,
                height: 720,
              },
              // https://vitest.dev/guide/browser/playwright
              instances: [
                {
                  browser: 'chromium',
                },
              ],
            },
          },
        },
      ],
    },
  }),
);
