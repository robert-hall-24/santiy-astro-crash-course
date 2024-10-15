// @ts-check
import { defineConfig } from 'astro/config'

import sanity from '@sanity/astro'
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: 'ccs4xnb6',
      dataset: 'production',
      useCdn: false, // See note on using the CDN
      apiVersion: '2024-07-24', // insert the current date to access the latest version of the API
      studioBasePath: '/admin', // If you want to access the Studio on a route
    }),
    react(),
  ],
})
