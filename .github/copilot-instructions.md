# Repository instructions

## Project context and learning goals

- This is both a household-budgeting application and a learning project for
  React and its surrounding ecosystem.
- Use
  [Bulletproof React](https://github.com/alan2207/bulletproof-react/) as a
  syllabus for tooling, libraries, best practices, and architectural patterns,
  not as a template that must be copied.
- Optimize assistance for learning: explain relevant React and ecosystem
  concepts, the reasoning behind debugging conclusions, and the tradeoffs of
  suggested approaches. Do not make non-trivial changes without explaining
  what they teach and why they fit this codebase.
- Clearly distinguish improvements that are useful as learning exercises from
  changes the application currently needs. Prefer incremental complexity that
  matches the application's current stage over prematurely introducing the
  full Bulletproof React architecture.
- When several valid approaches exist, describe the meaningful tradeoffs and
  recommend one. Preserve opportunities for the developer to implement or
  reason through a solution when that better serves the learning goal.

## Tooling and commands

- Use Node `24.21.0` (see `.node-version`) and npm (`package-lock.json` is
  committed). Install dependencies with `npm ci`.
- Start the Vite development server with `npm run dev`; build the production
  bundle with `npm run build`.
- Run ESLint with `npm run lint`. There is no separate format script; the
  repository's Prettier settings use single quotes, trailing commas, 2-space
  indentation, and an 80-column print width.
- Tests are Vitest browser tests executed in headless Chromium through
  Playwright. Use `npm test` for watch mode, `npm test -- --run` for one full
  run, and `npm run coverage` for coverage. Run one file with
  `npm test -- --run src/components/layouts/shell-header.test.tsx`, or one test
  by adding `--testNamePattern "renders logo"`. If Chromium is unavailable in a
  fresh environment, install it with `npx playwright install chromium`.
- Run Storybook with `npm run storybook` and build it with
  `npm run build-storybook`.
- After changing translatable messages, run `npm run extract`, update the
  `src/locales/{en,hu}/messages.po` translations, then run `npm run compile`.
  Commit both the PO catalogs and generated TypeScript catalogs.

## Architecture

- `src/main.tsx` mounts `App`; `src/app.tsx` detects and validates the locale,
  then composes `AppProvider` around the router. `AppProvider` is the shared
  integration point for Lingui catalog activation and the Mantine theme. The
  Storybook decorator also uses this provider and supplies toolbar-selected
  locale and color scheme values.
- `src/router.tsx` owns the React Router route tree. The root route renders
  `AppRoot`, which wraps child routes in `ShellLayout`; the shell provides the
  shared header, navigation, and `<Outlet>` content area.
- `src/config/paths.ts` is the source of navigation metadata: relative URL
  segments, Lingui message descriptors, and icons. `ShellLayout` generates its
  navbar from this object, but routes are registered separately in
  `src/router.tsx`. Adding or changing a screen therefore usually requires
  keeping the route component, `paths.app`, and the router's child routes in
  sync.
- `src/theme.ts` defines the shared Mantine theme, including custom container
  sizes and component defaults. Application rendering, tests, and Storybook
  all consume this theme rather than creating local providers.
- Localization is dynamically loaded by `src/utils/i18n.ts`. Supported locale
  metadata lives in `locales`, while Lingui's catalog configuration lives in
  `lingui.config.ts`. Keep these locale lists aligned.

## Repository conventions

- Use the `@/` alias for `src` imports and `@test-utils/` for shared test
  helpers. TypeScript is strict and uses bundler module resolution; preserve
  type-only imports where applicable.
- TypeScript/TSX filenames and folders under `src` must be kebab-case. ESLint
  also enforces ordered import groups, alphabetization within groups, and no
  import cycles.
- Mark user-visible text for Lingui extraction. Route labels use `msg` message
  descriptors because they are declared outside React; components translate
  descriptors with `useLingui()._` and use the Lingui React macros for inline
  text.
- Component tests are colocated as `*.test.tsx` and run in an actual browser,
  not jsdom. Import `render`, Vitest/browser APIs, and shared mock spies from
  `@test-utils/setup.ts`; its export order intentionally loads the Lingui and
  Mantine mocks before the render helper. The custom render helper supplies
  the shared Mantine theme and `env="test"`.
- Router-dependent component tests use React Router's `createRoutesStub`.
  Prefer browser locators and async assertions such as
  `await expect.element(locator)`; interactions use the exported `userEvent`.
- Storybook stories are discovered beside source files as `*.stories.*` or
  MDX. Global locale/theme behavior belongs in `.storybook/preview.tsx`, where
  the same `AppProvider` is already installed.
