"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";
import { portfolioData } from "@/lib/data";
import type {
  PortfolioData,
  Experience,
  Project,
  BlogPost,
  FeaturedBlogPost,
} from "@/lib/types";

// ============================================================================
// Context
// ============================================================================
// The entire portfolioData object is provided as-is. Since it's a static,
// build-time constant (no fetching/loading state needed), the context value
// is simply the data itself — typed against the single PortfolioData
// interface so every consumer gets full autocomplete + type safety.
const PortfolioContext = createContext<PortfolioData | null>(null);

export function PortfolioProvider({ children }: { children: ReactNode }) {
  // portfolioData is a module-level constant, so this never changes between
  // renders — no need for useState/useEffect here.
  return (
    <PortfolioContext.Provider value={portfolioData}>
      {children}
    </PortfolioContext.Provider>
  );
}

/**
 * Base hook — returns the full portfolio data object.
 * Throws if used outside of <PortfolioProvider>, so misuse fails loudly
 * during development instead of silently rendering undefined data.
 */
export function usePortfolio(): PortfolioData {
  const context = useContext(PortfolioContext);
  if (context === null) {
    throw new Error("usePortfolio must be used within a <PortfolioProvider>");
  }
  return context;
}

// ============================================================================
// Selector hooks
// ============================================================================
// These centralize the small lookups (.find(), property drilling) that were
// previously duplicated inline in page.tsx files. Adding a new project or
// blog post to data.ts requires no changes here — these hooks just read
// whatever is currently in context.

export function useHero() {
  return usePortfolio().hero;
}

export function useSkills(): import("@/lib/types").Skill[] {
  return usePortfolio().skills;
}

export function useExperience(): Experience[] {
  return usePortfolio().experience;
}

export function useAboutData() {
  return usePortfolio().about;
}

export function useContactPageData() {
  return usePortfolio().contactPage;
}

export function useProjectsPageData() {
  return usePortfolio().projectsPage;
}

export function useBlogListPageData() {
  return usePortfolio().blogPage;
}

export function useProjects(): Project[] {
  return usePortfolio().projects;
}

/**
 * Looks up a single project by id, and (if present) its configured
 * "next project" — mirroring the logic that used to live inline in
 * app/projects/[id]/page.tsx.
 */
export function useProjectById(id: string): {
  project: Project | undefined;
  nextProject: Project | undefined;
} {
  const projects = useProjects();

  return useMemo(() => {
    const project = projects.find((p) => p.id === id);
    const nextProject = project?.nextProjectId
      ? projects.find((p) => p.id === project.nextProjectId)
      : undefined;
    return { project, nextProject };
  }, [projects, id]);
}

export function useBlogData(): {
  featuredPost: FeaturedBlogPost;
  posts: BlogPost[];
} {
  return usePortfolio().blog;
}

export function useBlogDetail() {
  return usePortfolio().blogDetail;
}
