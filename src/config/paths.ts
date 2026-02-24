import { msg } from '@lingui/core/macro';

export const paths = {
  home: {
    path: '/',
  },
  app: {
    stats: {
      name: msg`Stats`,
      path: '/',
    },
    incomes: {
      name: msg`Incomes`,
      path: 'income',
    },
    expenses: {
      name: msg`Expenses`,
      path: 'expense',
    },
    pockets: {
      name: msg`Pockets`,
      path: 'pocket',
    },
    plans: {
      name: msg`Plans`,
      path: 'plan',
    },
    config: {
      name: msg`Config`,
      path: 'config',
    },
  },
} as const;
