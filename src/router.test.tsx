import { createMemoryRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';

import routes from "@/app/routes/app/routes.tsx";
import { paths } from "@/config/paths.ts";
import { render, expect, test, userEvent } from '@test-utils/setup.ts';

const renderAt = async (url: string) => {
  const router = createMemoryRouter(routes, { initialEntries: [url] });
  const result = await render(<RouterProvider router={router} />);
  return { router, ...result };
};

test.each(Object.values(paths.app))('renders $name.message at $path with active link', async (entry) => {
  const { getByTitle, getByRole } = await renderAt('/' + entry.path);

  await expect.element(getByTitle(entry.name.message as string), { exact: true }).toBeInTheDocument();

  const link = getByRole('link', { name: entry.name.message as string });
  await expect.element(link).toHaveAttribute('aria-current', 'page');

  Object.values(paths.app).filter((e) => e.path !== entry.path).forEach((e) => {
    const otherLink = getByRole('link', { name: e.name.message as string });
    expect(otherLink).not.toHaveAttribute('aria-current');
  });
});

test('renders error when route not exists', async () => {
  const { getByText } = await renderAt('/foo');
  await expect.element(getByText('Ooops... something really bad happened'), { exact: true }).toBeInTheDocument();
});

test.each(Object.values(paths.app))('link navigates to $path', async (entry) => {
  const { router, getByTitle, getByRole } = await renderAt('/');
  const link = getByRole('link', { name: entry.name.message as string });

  await userEvent.click(link)

  await expect.element(getByTitle(entry.name.message as string), { exact: true }).toBeInTheDocument();
  expect(router.state.location.pathname).toBe(entry.path.startsWith('/') ? entry.path : '/' + entry.path);
});