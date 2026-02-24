import { msg } from '@lingui/core/macro';
import {
  ImDownload,
  ImUpload,
  ImEqualizer,
  ImMap,
  ImStatsDots,
} from 'react-icons/im';
import { MdSavings } from 'react-icons/md';

export const paths = {
  home: {
    path: '/',
  },
  app: {
    stats: {
      name: msg`Stats`,
      icon: ImStatsDots,
      path: '/',
    },
    incomes: {
      name: msg`Incomes`,
      icon: ImDownload,
      path: 'income',
    },
    expenses: {
      name: msg`Expenses`,
      icon: ImUpload,
      path: 'expense',
    },
    pockets: {
      name: msg`Pockets`,
      icon: MdSavings,
      path: 'pocket',
    },
    plans: {
      name: msg`Plans`,
      icon: ImMap,
      path: 'plan',
    },
    config: {
      name: msg`Config`,
      icon: ImEqualizer,
      path: 'config',
    },
  },
} as const;
