import { useLayoutEffect } from 'react';
import { NavigationType, useLocation, useNavigationType } from 'react-router';

const homepageRouteHashes = new Set([
  'best',
  'categories',
  'comparisons',
  'methodology',
  'reviews',
]);

function getHashTarget(hash: string) {
  try {
    return document.getElementById(decodeURIComponent(hash.slice(1)));
  } catch {
    return null;
  }
}

function scrollToTop() {
  const scrollingElement = document.scrollingElement;
  if (!scrollingElement) {
    window.scrollTo(0, 0);
    return;
  }

  scrollingElement.scrollLeft = 0;
  scrollingElement.scrollTop = 0;
}

export function RouteScrollManager() {
  const { hash, pathname } = useLocation();
  const navigationType = useNavigationType();

  useLayoutEffect(() => {
    const hashName = hash.slice(1).toLowerCase();
    const isHomepageRouteHash =
      pathname === '/' && homepageRouteHashes.has(hashName);

    if (isHomepageRouteHash) return;

    if (!hash) {
      if (navigationType !== NavigationType.Pop) scrollToTop();
      return;
    }

    const scrollToHashTarget = () => {
      const target = getHashTarget(hash);
      if (!target) return false;

      target.scrollIntoView({ block: 'start' });
      return true;
    };

    if (scrollToHashTarget()) return;

    const observer = new MutationObserver(() => {
      if (scrollToHashTarget()) observer.disconnect();
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [hash, navigationType, pathname]);

  return null;
}
