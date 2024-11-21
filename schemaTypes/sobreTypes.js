import {defineField, defineType} from 'sanity'

export const sobreType = defineType({
  name: 'sobre',
  title: 'Sobre',
  type: 'document',
  fields: [
    defineField({
      name: 'sobre',
      type: 'string',
    }),
  ],
})