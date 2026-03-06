export * from 'vitest';
export * from 'vitest/browser';

export { mockI18nActivate, mockI18nLoad } from './i18n-mock.ts';

// render must be exported at the end make mocks work correctly
export { render } from './render';
