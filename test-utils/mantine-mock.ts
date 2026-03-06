import { vi } from 'vitest';

const currentScheme = 'light';
export const mockMantineComputedColorScheme = () => currentScheme;
export const mockMantineToggleColorScheme = vi.fn(() => {
  console.log('mockMantineSetColorScheme');
});
vi.mock('@mantine/core', async () => {
  const actual =
    await vi.importActual<typeof import('@mantine/core')>('@mantine/core');
  return {
    ...actual,
    useMantineColorScheme: () => ({
      toggleColorScheme: mockMantineToggleColorScheme,
    }),
    useComputedColorScheme: () => currentScheme,
  };
});
