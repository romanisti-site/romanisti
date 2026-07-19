const configuredUrl = import.meta.env.SITE_URL ?? 'https://romanisti.org';

export const site = {
  name: import.meta.env.PUBLIC_SITE_NAME ?? 'Romanisti',
  edition: 'Edition One',
  repositoryVersion: '1.0.5',
  url: new URL(configuredUrl),
  title: 'Romanisti — Edition One',
  description:
    'An independent publication devoted to the enduring relationship between Rome and AS Roma.',
  locale: 'en_US',
  language: 'en',
} as const;
