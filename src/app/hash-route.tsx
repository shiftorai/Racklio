import { lazy, Suspense, useEffect, useState } from 'react';
import { useLocation } from 'react-router';

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

function getHash() {
  return window.location.hash.slice(1).toLowerCase();
}

export function HashRoute() {
  const location = useLocation();
  const [hash, setHash] = useState(getHash);
  const locationHash = location.hash.slice(1).toLowerCase();

  if (hash !== locationHash) {
    setHash(locationHash);
  }

  useEffect(() => {
    const handleHashChange = () => setHash(getHash());

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const page = {
    reviews: <ReviewsHub />,
    comparisons: <ComparisonsHub />,
    best: <BestSoftwareHub />,
    categories: <CategoriesHub />,
    methodology: <MethodologyPage />,
  }[hash];

  return <Suspense fallback={null}>{page ?? <Home />}</Suspense>;
}
