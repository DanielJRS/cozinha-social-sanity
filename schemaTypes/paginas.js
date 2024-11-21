import {defineField, defineType} from 'sanity'

export const paginasType = defineType({
  name: 'paginas',
  title: 'Páginas',
  type: 'document',
  fields: [

    defineField({
    name: 'titulo',
    type: 'string',
    }),

    defineField({
    name: 'id',
    type: 'slug',
    options: {
      source: 'titulo',
      maxLength: 10,
    },
    validation: (Rule) => Rule.required()
    }),

    defineField({
    name: 'subtitulo',
    type: 'string',
    }),

    defineField({
    name: 'imagem',
    type: 'image',
    }),

    defineField({
    name: 'tituloInterno',
    type: 'string',
    }),

    defineField({
    name: 'conteudoInterno',
    type: 'string',
    }),

    defineField({
    name: 'imagemInterna',
    type: 'image',
    }),
  ],
})