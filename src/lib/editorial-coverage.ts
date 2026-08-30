import {
  activeAlternativesPaths,
  activeComparisonPaths,
  activePricingGuidePaths,
  activeProducts,
} from './active-software-inventory';

export const editorialCoverageCounts = {
  reviews: activeProducts.length,
  comparisons: activeComparisonPaths.length,
  pricingGuides: activePricingGuidePaths.length,
  alternativesGuides: activeAlternativesPaths.length,
  categories: 3,
} as const;
