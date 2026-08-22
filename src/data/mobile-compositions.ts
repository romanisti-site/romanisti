import {
  defineComposition,
  type ArchitecturalComposition,
} from '@/lib/institution-composition';

export const institutionMobileCompositions: ArchitecturalComposition[] = [
  defineComposition({
    id: 'threshold',
    title: 'Threshold',
    route: '/',
    desktopAsset: '/images/threshold/threshold-guardian-v1.png',
    status: 'pending-art-direction',
  }),

  defineComposition({
    id: 'reading-room',
    title: 'Reading Room',
    route: '/',
    desktopAspectRatio: 'architectural master',
    status: 'pending-art-direction',
  }),

  defineComposition({
    id: 'bibliotheca',
    title: 'Bibliotheca',
    route: '/#bibliotheca',
    desktopAspectRatio: '3 / 2',
    desktopAsset: '/images/bibliotheca/canonical/bibliotheca-cloister-architectural-plate-v1.webp',
    status: 'pending-art-direction',
  }),

  defineComposition({
    id: 'foundation',
    title: 'Foundation Room',
    route: '/library/foundation/',
    desktopAspectRatio: '3 / 2',
    desktopAsset: '/images/bibliotheca/canonical/foundation-room-architectural-plate-v1.webp',
    status: 'pending-art-direction',
  }),

  defineComposition({
    id: 'governance',
    title: 'Governance Room',
    route: '/governance/',
    desktopAspectRatio: '1672 / 941',
    status: 'pending-art-direction',
  }),

  defineComposition({
    id: 'works',
    title: 'Works Room',
    route: '/works/',
    desktopAspectRatio: '8 / 5',
    status: 'pending-art-direction',
  }),

  defineComposition({
    id: 'archive',
    title: 'Archive Room',
    route: '/archive/',
    desktopAspectRatio: '1640 / 959',
    status: 'pending-art-direction',
  }),
];

export const institutionMobileCompositionById = Object.fromEntries(
  institutionMobileCompositions.map((composition) => [composition.id, composition]),
);
