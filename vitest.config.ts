import { defineConfig, mergeConfig } from 'vitest/config';
import { playwright } from '@vitest/browser-playwright';

import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      browser: {
        enabled: true,
        provider: playwright(),
        viewport: { width: 1280, height: 720 },
        // https://vitest.dev/guide/browser/playwright
        instances: [{ browser: 'chromium' }],
      },
    },
  }),
);
