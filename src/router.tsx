import { useMemo } from 'react';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';

import routes from '@/app/routes/app/routes.tsx';

const Router = () => {
  const router = useMemo(() => createBrowserRouter(routes), []);

  return <RouterProvider router={router} />;
};

export default Router;
