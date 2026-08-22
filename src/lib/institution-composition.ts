export const INSTITUTION_MOBILE_MAX_WIDTH_REM = 52;

export type CompositionStatus =
  | 'desktop-locked'
  | 'pending-art-direction'
  | 'mobile-prototype'
  | 'mobile-locked';

export interface HotspotRegion {
  left: string;
  top: string;
  width: string;
  height: string;
  rotate?: string;
  radius?: string;
}

export interface CompositionHotspot {
  id: string;
  label: string;
  href?: string;
  action?: string;
  region: HotspotRegion;
}

export interface ArchitecturalComposition {
  id: string;
  title: string;
  route: string;
  desktopAspectRatio?: string;
  mobileAspectRatio?: string;
  desktopAsset?: string;
  mobileAsset?: string;
  status: CompositionStatus;
  mobileHotspots?: CompositionHotspot[];
}

/**
 * Desktop and mobile hotspot geometry are separate coordinate systems.
 * Never reuse desktop percentages for a dedicated portrait plate.
 */
export function defineComposition<T extends ArchitecturalComposition>(composition: T): T {
  return composition;
}
