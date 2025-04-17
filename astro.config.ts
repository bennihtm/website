import { defineConfig } from 'astro/config';

import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import spectre from './package/src';
import cloudflare from '@astrojs/cloudflare';
import { spectreDark } from './src/ec-theme';

// https://astro.build/config
export default defineConfig({
  site: 'https://bendaha.eu.org',
  output: 'static',
  integrations: [
    expressiveCode({
      themes: [spectreDark],
    }),
    mdx(),
    sitemap(),
    spectre({
      name: "Benjamin Hartmann",
      openGraph: {
        home: {
          title: "Benjamin Hartmann",
          description: 'Christian. Tech guy. Open Source enthusiast.',
        },
        blog: {
          title: 'Blog',
          description: 'Thoughts and ramblings by me.'
        },
        projects: {
          title: 'Projects'
        }
      },
      giscus: {
        repository: 'bennihtm/website',
        repositoryId: 'R_kgDOObDtBA',
        category: 'General',
        categoryId: 'DIC_kwDOObDtBM4CpMDw',
        mapping: 'pathname',
        strict: true,
        reactionsEnabled: true,
        emitMetadata: false,
        lang: 'en',
      }
    })
  ],
  adapter: cloudflare()
});