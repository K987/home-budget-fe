import type { MessageDescriptor } from '@lingui/core';
import { vi } from 'vitest';

export const mockI18nLoad = vi.fn();
export const mockI18nActivate = vi.fn();

vi.mock('@lingui/core', () => ({
  i18n: {
    _: vi.fn((str) => str),
    load: mockI18nLoad,
    activate: mockI18nActivate,
  },
}));

function isMessageDescriptor(obj: unknown): obj is MessageDescriptor {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    typeof (obj as MessageDescriptor).id === 'string' &&
    typeof (obj as MessageDescriptor).message === 'string'
  );
}

vi.mock('@lingui/react', () => ({
  useLingui: () => ({
    _: (msg: unknown) =>
      `i18n: ${isMessageDescriptor(msg) ? msg.message : String(msg)}`,
    i18n: {
      date: (d: string) => `i18n: ${d}`,
      number: (n: number, format: Intl.NumberFormatOptions) => {
        if (format.style === 'currency' && format.currency) {
          return `i18n: ${n.toString()} ${format.currency}`;
        } else {
          return `i18n: ${n.toString()}`;
        }
      },
      locale: 'en',
    },
  }),
  Trans: (props: { message: string }) => props.message,
}));
