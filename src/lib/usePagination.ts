"use client";

import { useState, useMemo } from "react";

interface UsePaginationOptions<T> {
  items: T[];
  itemsPerPage: number;
  /** When this value changes (e.g. active category), page resets to 1. */
  resetKey?: unknown;
  /**
   * The original BlogPage "Next" button used `Math.max(prev + 1, totalPages)`
   * instead of `Math.min`, which jumps straight to the last page rather than
   * advancing by one. This is preserved verbatim (not "fixed") to honor the
   * zero-behavior-change requirement — set to true only for that call site.
   */
  preserveLegacyNextPageBehavior?: boolean;
}

interface UsePaginationResult<T> {
  currentPage: number;
  totalPages: number;
  currentItems: T[];
  setCurrentPage: (page: number) => void;
  goToPrevPage: () => void;
  goToNextPage: () => void;
}

/**
 * Centralizes the page-state + slice logic that was previously duplicated
 * between BlogPage and ProjectsDisplay (each had its own near-identical
 * useState/useEffect/slice block).
 */
export function usePagination<T>({
  items,
  itemsPerPage,
  resetKey,
  preserveLegacyNextPageBehavior = false,
}: UsePaginationOptions<T>): UsePaginationResult<T> {
  const [currentPage, setCurrentPage] = useState(1);

  // Reset to page 1 whenever the reset key (e.g. active filter) changes.
  // Adjusted during render (React's documented "adjusting state when a prop
  // changes" pattern, using state rather than a ref since reading/writing
  // state during render is explicitly supported) rather than in a
  // useEffect, avoiding the extra render pass a post-commit effect causes.
  const [prevResetKey, setPrevResetKey] = useState(resetKey);
  if (prevResetKey !== resetKey) {
    setPrevResetKey(resetKey);
    if (currentPage !== 1) {
      setCurrentPage(1);
    }
  }

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return items.slice(startIndex, startIndex + itemsPerPage);
  }, [items, currentPage, itemsPerPage]);

  const goToPrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const goToNextPage = () =>
    setCurrentPage((prev) =>
      preserveLegacyNextPageBehavior ? Math.max(prev + 1, totalPages) : Math.min(prev + 1, totalPages)
    );

  return { currentPage, totalPages, currentItems, setCurrentPage, goToPrevPage, goToNextPage };
}
