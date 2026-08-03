import { Outlet } from 'react-router';

export function AppLayout() {
  return (
    <div className="min-h-dvh bg-surface text-foreground">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Outlet />
    </div>
  );
}
