import { Outlet } from 'react-router';

import { RouteScrollManager } from '@/components/routing/route-scroll-manager';

export function AppLayout() {
  return (
    <div className="min-h-dvh bg-surface text-foreground">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <RouteScrollManager />
      <Outlet />
    </div>
  );
}
