// ============================================================================
// src/lib/types.ts
// Single source of truth for every data shape in this portfolio.
// Every component and page should import its prop types from here instead
// of declaring local/duplicate interfaces or using `any`.
// ============================================================================

// ---------------------------------------------------------------------------
// Home Page — Hero
// ---------------------------------------------------------------------------
export interface HeroData {
  greeting: string;
  name: string;
  role: string;
  description: string;
  yearsExperience: number;
}

// ---------------------------------------------------------------------------
// Home Page — Skills
// ---------------------------------------------------------------------------
export interface Skill {
  id: number;
  title: string;
  desc: string;
  icon: string;
}

// ---------------------------------------------------------------------------
// Shared — Experience (used on Home + About)
// ---------------------------------------------------------------------------
export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

// ---------------------------------------------------------------------------
// About Page
// ---------------------------------------------------------------------------
export interface AboutHeroData {
  title: string;
  description: string;
  image: string;
}

export interface Stat {
  number: string;
  label: string;
}

export interface TechStackItem {
  name: string;
  icon: string;
}

export interface ValueItem {
  iconName: string;
  title: string;
  desc: string;
}

export interface AboutData {
  hero: AboutHeroData;
  stats: Stat[];
  techStack: TechStackItem[];
  values: ValueItem[];
}

// ---------------------------------------------------------------------------
// Contact Page
// ---------------------------------------------------------------------------
export interface ContactPageHero {
  title: string;
  highlight: string;
  description: string;
}

export interface ContactInfo {
  email: string;
  location: string;
  status: string;
  responseTime: string;
}

export interface ContactPageData {
  hero: ContactPageHero;
  info: ContactInfo;
  marqueeText: string;
}

// ---------------------------------------------------------------------------
// Projects Page (listing)
// ---------------------------------------------------------------------------
export interface ProjectsPageHero {
  title: string;
  highlight: string;
  description: string;
}

export interface ProjectsPageCTA {
  title: string;
  highlight: string;
  features: string[];
}

export interface ProjectsPageData {
  hero: ProjectsPageHero;
  cta: ProjectsPageCTA;
  categories: string[];
}

// ---------------------------------------------------------------------------
// Blog Listing Page — page-level config (kept separate from BlogPageData,
// which holds the actual post content)
// ---------------------------------------------------------------------------
export interface BlogListPageData {
  categories: string[];
}

// ---------------------------------------------------------------------------
// Projects — shared sub-shapes (used only on project detail pages)
// ---------------------------------------------------------------------------
export interface ProjectVideo {
  id: string;
  url: string;
  thumbnail: string;
  title: string;
}

export interface ProjectChallenge {
  text: string;
  points: string[];
  image: string;
}

export interface ApproachStep {
  step: string;
  title: string;
  desc: string;
}

export interface ProjectFeature {
  icon: string;
  title: string;
  desc: string;
}

export interface ProjectResult {
  value: string;
  label: string;
}

export interface UpcomingUpdate {
  title: string;
  description: string;
}

export interface ArchitectureDiagram {
  title: string;
  description: string;
  image: string;
  points: string[];
}

/**
 * Canonical Project shape.
 *
 * Core fields are required — every project in data.ts has them and they're
 * used by the listing/card views (ProjectCard, ProjectsDisplay, ProjectsSection).
 *
 * Detail fields are optional — only "fully written up" projects (e.g.
 * "nexus-analytics") populate them; simpler list-only projects
 * (proj-2 .. proj-6) intentionally omit them. The project detail page
 * conditionally renders each section based on presence, exactly as the
 * original code does.
 */
export interface Project {
  // Core (required — present on every project)
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  category: string;
  liveUrl: string;
  githubUrl: string;

  // Detail page (optional — only on fully fleshed-out projects)
  overview?: string;
  role?: string;
  duration?: string;
  status?: string;
  videos?: ProjectVideo[];
  challenge?: ProjectChallenge;
  approach?: ApproachStep[];
  features?: ProjectFeature[];
  results?: ProjectResult[];
  resultsDesc?: string;
  nextProjectId?: string;
  upcomingUpdate?: UpcomingUpdate;
  architecture?: ArchitectureDiagram[];
}

// ---------------------------------------------------------------------------
// Blog — listing page
// ---------------------------------------------------------------------------
export interface FeaturedBlogPost {
  id: string;
  title: string;
  desc: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  authorImage: string;
}

export interface BlogPost {
  id: string;
  title: string;
  desc: string;
  category: string;
  author: string;
  date: string;
  /** Most posts provide a gallery via `images`. */
  images?: string[];
  /** A small number of posts in data.ts provide a single `image` instead — BlogCard falls back to this. */
  image?: string;
}

export interface BlogPageData {
  featuredPost: FeaturedBlogPost;
  posts: BlogPost[];
}

// ---------------------------------------------------------------------------
// Blog Detail — content blocks (discriminated union, replaces `block: any`)
// ---------------------------------------------------------------------------
export interface ParagraphBlock {
  type: "paragraph";
  text: string;
  dropCap?: boolean;
}

export interface Heading2Block {
  type: "heading2";
  text: string;
}

export interface Heading3Block {
  type: "heading3";
  text: string;
}

export interface CalloutBlock {
  type: "callout";
  title: string;
  text: string;
}

export interface CodeBlock {
  type: "code";
  filename: string;
  codeHTML: string;
}

export interface ComparisonColumn {
  title: string;
  items: string[];
}

export interface ComparisonBlock {
  type: "comparison";
  left: ComparisonColumn;
  right: ComparisonColumn;
}

export type ContentBlock =
  | ParagraphBlock
  | Heading2Block
  | Heading3Block
  | CalloutBlock
  | CodeBlock
  | ComparisonBlock;

export interface TocItem {
  id: string;
  text: string;
}

export interface RelatedPost {
  title: string;
  readTime: string;
  href: string;
}

export interface AdjacentPost {
  title: string;
  href: string;
}

export interface BlogDetailData {
  id: string;
  title: string;
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  image: string;
  images: string[];
  authorImage: string;
  contentBlocks: ContentBlock[];
  toc: TocItem[];
  relatedPosts: RelatedPost[];
  prevPost: AdjacentPost;
  nextPost: AdjacentPost;
}

// ---------------------------------------------------------------------------
// Root shape
// ---------------------------------------------------------------------------
export interface PortfolioData {
  hero: HeroData;
  skills: Skill[];
  experience: Experience[];
  about: AboutData;
  contactPage: ContactPageData;
  projectsPage: ProjectsPageData;
  blogPage: BlogListPageData;
  projects: Project[];
  blog: BlogPageData;
  blogDetail: BlogDetailData;
}
