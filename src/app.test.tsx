import { Button } from '@mantine/core';
import { test, expect } from 'vitest';

import { render } from '../test-utils/setup.ts';

test('render test with Mantine', async () => {
  const { getByText } = await render(<Button>Test Button</Button>);
  await expect.element(getByText('Test Button')).toBeInTheDocument();
});
