import { type RouteObject } from 'react-router';

import ConfigRoute from '@/app/routes/app/config.tsx';
import ExpensesRoute from '@/app/routes/app/expenses.tsx';
import IncomesRoute from '@/app/routes/app/incomes.tsx';
import PlansRoute from '@/app/routes/app/plans.tsx';
import PocketsRoute from '@/app/routes/app/pockets.tsx';
import AppRoot from '@/app/routes/app/root.tsx';
import StatsRoute from '@/app/routes/app/stats.tsx';
import { paths } from '@/config/paths.ts';

export const routes: RouteObject[] = [
  {
    path: paths.home.path,
    Component: AppRoot,
    ErrorBoundary: () => <div>Ooops... something really bad happened</div>,
    children: [
      {
        index: true,
        Component: StatsRoute,
      },
      {
        path: paths.app.incomes.path,
        Component: IncomesRoute,
      },
      {
        path: paths.app.expenses.path,
        Component: ExpensesRoute,
      },
      {
        path: paths.app.pockets.path,
        Component: PocketsRoute,
      },
      {
        path: paths.app.plans.path,
        Component: PlansRoute,
      },
      {
        path: paths.app.config.path,
        Component: ConfigRoute,
      },
    ],
  },
];

export default routes;
