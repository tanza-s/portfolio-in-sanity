import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { presentationTool } from 'sanity/presentation'

import { structure } from './sanity/structure'

export default defineConfig({
  name: 'default',
  title: 'Portfolio in Sanity',

  projectId: 'd33pqzuq',
  dataset: 'production',

  plugins: [
    structureTool({ structure }), 
    visionTool(),
    presentationTool({
      previewUrl: {
        origin: 'http://localhost:3000',
        draftMode: {
          enable: '/api/draft-mode/enable',
        },
      },
      resolve: {
        locations: (params) => {
          if (params.type === 'post' && params.id) {
            return {
              locations: [
                {
                  title: 'Post',
                  href: `/blog/${params.id}`,
                },
              ],
            }
          }
          if (params.type === 'project' && params.id) {
            return {
              locations: [
                {
                  title: 'Project',
                  href: `/projects/${params.id}`,
                },
              ],
            }
          }
          if (params.type === 'page' && params.id) {
            return {
              locations: [
                {
                  title: 'Page',
                  href: `/${params.id}`,
                },
              ],
            }
          }
          return null
        },
      },
    }),
  ],
  document: {
    newDocumentOptions: (prev) => prev.filter((item) => item.templateId !== "siteSettings"),
  },
  schema: {
    types: schemaTypes,
  },
})
