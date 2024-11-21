import {defineField, defineType} from 'sanity'

export const cardapioType = defineType({
  name: 'cardapio',
  title: 'Cardápio',
  type: 'document',
  fields: [
    defineField({
      name: 'diaDaSemana',
      type: 'string',
      description: 'Digite o dia da semana que irá conter esse cardápio',
    }),
    defineField({
      name: 'itemsPrincipal',
      title: 'Cardápio principal:',
      type: 'array',
      of: [
        defineType({
          type: 'object',
          fields: [
            defineField({
              name: 'nome',
              title: 'Nome',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
    defineField({
    name: 'itemsComplemento',
    title: 'Cardápio complementar (complemento):',
    type: 'array',
    of: [
        defineType({
        type: 'object',
        fields: [
            defineField({
            name: 'nome',
            title: 'Nome',
            type: 'string',
            }),
        ],
        }),
    ],
      }),
  ],
})
