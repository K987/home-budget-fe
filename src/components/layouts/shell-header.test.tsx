import { vi } from 'vitest';

import ShellHeader from '@/components/layouts/shell-header.tsx';
import { locales, dynamicActivate } from '@/utils/i18n.ts';
import {
  render,
  userEvent,
  expect,
  test,
} from '@test-utils/setup.ts';

vi.mock('@/utils/i18n.ts', { spy: true });

test('renders logo', async () => {
  const { getByText } = await render(<ShellHeader />);
  await expect.element(getByText('Logo')).toBeInTheDocument();
});

test('renders language selector menu with all locales', async () => {
  const { getByLabelText } = await render(<ShellHeader />);

  const languageSelector = getByLabelText('select language');

  await expect.element(languageSelector).toBeInTheDocument();

  await userEvent.click(languageSelector);
  for (const lang of Object.values(locales).map((locale) => locale.name)) {
    await expect.element(getByLabelText(lang)).toBeInTheDocument();
  }
});

test('calls language changed when a language is selected', async () => {
  const { getByLabelText } = await render(<ShellHeader />);
  const languageSelector = getByLabelText('select language');
  await expect.element(languageSelector).toBeInTheDocument();

  await userEvent.click(languageSelector);
  const eng = getByLabelText('English');
  await expect.element(eng).toBeVisible();
  await userEvent.click(eng);

  await vi.waitFor(() => expect(dynamicActivate).toHaveBeenCalledWith('en'));
});
