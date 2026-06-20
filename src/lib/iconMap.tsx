import {
  Terminal,
  Database,
  Layers,
  Palette,
  Brain,
  Sparkles,
  Zap,
  type LucideIcon,
} from "lucide-react";

/**
 * Central registry of string-key -> Lucide icon, covering every icon name
 * currently used across data.ts (skills.icon, about.values.iconName).
 * Replaces the duplicated inline `getIcon` switch statements that used to
 * live separately in SkillsSection and ValuesSection.
 */
const ICON_MAP: Record<string, LucideIcon> = {
  // Skills section icons
  terminal: Palette, // NOTE: original SkillsSection mapped "terminal" -> Palette icon; preserved as-is.
  database: Database,
  deployed_code: Layers,

  // Values section icons
  brain: Brain,
  sparkles: Sparkles,
  zap: Zap,
};

const DEFAULT_ICON: LucideIcon = Terminal;

/**
 * Resolves an icon name string to its Lucide component, falling back to
 * the same default each call site previously used.
 */
export function getIconComponent(iconName: string): LucideIcon {
  return ICON_MAP[iconName] ?? DEFAULT_ICON;
}
