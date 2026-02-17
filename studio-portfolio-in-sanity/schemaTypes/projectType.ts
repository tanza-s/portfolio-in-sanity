import { defineField, defineType } from 'sanity';

export const projectType = defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        defineField({
            title: 'Project Title',
            name: 'title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: { source: 'title' },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'publishedAt',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'image',
            type: 'image',
        }),
        defineField({
            title: 'Project Details',
            name: 'body',
            type: 'array',
            of: [
                { type: 'block' },
                { type: 'image',
                  options: { hotspot: true },
                },
            ],
        }),
    ],
})