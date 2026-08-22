export const institutionalRoutes = {
  bibliotheca: '/#bibliotheca',
  foundation: '/library/foundation/',
  works: '/works/',
  archiveRoom: '/archive/',
  governance: '/governance/',

  projectAurea: '/library/project-aurea/',
  liberConstitutionis: '/library/liber-constitutionis/',
  liberLapidum: '/library/liber-lapidum/',
  liberConventus: '/library/liber-conventus/',
  codexI: '/library/codex/codex-i-de-aeternitate/',
  editorialStandards: '/standards/',

  observations: '/observations/',
  observationArchive: '/observations/archive/',
  topics: '/topics/',
  specialEditions: '/special-editions/',
  research: '/research/',
  search: '/search/',
} as const;

export type InstitutionalRouteKey = keyof typeof institutionalRoutes;
