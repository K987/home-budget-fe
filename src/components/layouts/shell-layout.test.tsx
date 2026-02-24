import { createRoutesStub } from 'react-router';
import { vi } from 'vitest';

import ShellLayout from '@/components/layouts/shell-layout.tsx';
import { paths } from '@/config/paths.ts';
import { render, expect, test } from '@test-utils/setup.ts';


vi.mock('@/components/layouts/shell-header.tsx', () => ({
  default: () => <div>Shell Header</div>,
}));

test('renders all menu items in Navbar', async () => {
  const Stub = createRoutesStub([
    {
      path: '/',
      Component: () => (
        <ShellLayout>
          <div>Test Child</div>
        </ShellLayout>
      ),
    },
  ]);
  const { getByLabelText, getByText } = await render(
    <Stub initialEntries={['/']} />,
  );

  await expect.element(getByText('Shell Header')).toBeInTheDocument();
  await expect.element(getByText('Test Child')).toBeInTheDocument();

  for (const value of Object.values(paths.app)) {
    await expect
      .element(getByLabelText(value.name.message as string))
      .toBeInTheDocument();
  }
});
