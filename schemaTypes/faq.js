import {defineField, defineType} from 'sanity'

export const faqType = defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({
      name: 'pergunta',
      type: 'string',
    }),

    defineField({
        name: 'resposta',
        type: 'string',
      }),
  ],
})