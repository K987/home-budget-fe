import { Outlet } from 'react-router';

import ShellLayout from '@/components/layouts/shell-layout.tsx';

const AppRoot = () => {
  return (
    <ShellLayout>
      <Outlet />
    </ShellLayout>
  );
};

export default AppRoot;
