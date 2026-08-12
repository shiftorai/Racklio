import { lazy, Suspense, useSyncExternalStore } from 'react';

import { Home } from '@/pages/home';

const ReviewsHub = lazy(() =>
  import('@/pages/content-hubs').then((module) => ({
    default: module.ReviewsHub,
  })),
);
const ComparisonsHub = lazy(() =>
  import('@/pages/content-hubs').then((module) => ({
    default: module.ComparisonsHub,
  })),
);
const BestSoftwareHub = lazy(() =>
  import('@/pages/content-hubs').then((module) => ({
    default: module.BestSoftwareHub,
  })),
);
const CategoriesHub = lazy(() =>
  import('@/pages/content-hubs').then((module) => ({
    default: module.CategoriesHub,
  })),
);
const MethodologyPage = lazy(() =>
  import('@/pages/site-information').then((module) => ({
    default: module.MethodologyPage,
  })),
);

function subscribe(callback: () => void) {
  window.addEventListener('hashchange', callback);
  return () => window.removeEventListener('hashchange', callback);
}

function getHash() {
  return window.location.hash.slice(1);
}

export function HashRoute() {
  const hash = useSyncExternalStore(subscribe, getHash, () => '');
  const page = {
    reviews: <ReviewsHub />,
    comparisons: <ComparisonsHub />,
    best: <BestSoftwareHub />,
    categories: <CategoriesHub />,
    methodology: <MethodologyPage />,
  }[hash];

  return <Suspense fallback={null}>{page ?? <Home />}</Suspense>;
}
