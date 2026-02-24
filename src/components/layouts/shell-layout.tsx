import { useLingui } from '@lingui/react';
import { AppShell, NavLink as MantineNavLink } from '@mantine/core';
import { NavLink } from 'react-router';

import { paths } from '@/config/paths.ts';


const ShellLayout = ({ children }: { children: React.ReactNode }) => {
  const { _ } = useLingui();
  return (
    <AppShell
      padding="md"
      header={{ height: 60 }}
      navbar={{
        width: 200,
        breakpoint: 'sm',
      }}
    >
      <AppShell.Header>
        <div>Logo</div>
      </AppShell.Header>

      <AppShell.Navbar>
        {Object.entries(paths.app).map(([key, value]) => (
          <MantineNavLink
            key={key}
            label={_(value.name)}
            component={NavLink}
            to={value.path}
            aria-label={_(value.name)}
            variant="subtle"
          />
        ))}
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};

export default ShellLayout;
