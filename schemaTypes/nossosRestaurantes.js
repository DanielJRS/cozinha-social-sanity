import {defineField, defineType} from 'sanity'

export const nossosRestaurantesType = defineType({
  name: 'nossosrestaurantes',
  title: 'Nossos Restaurantes',
  type: 'document',
  fields: [
    defineField({
      name: 'bairro',
      type: 'string',
    }),
    defineField({
        name: 'endereco',
        type: 'string',
      }),
    defineField({
    name: 'Imagem',
    type: 'image',
    }),
  ],
})