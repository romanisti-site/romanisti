/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SITE_URL?: string;
  readonly PUBLIC_SITE_NAME?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
