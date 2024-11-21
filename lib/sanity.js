import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: '3m21d2d5',
  dataset: 'production',
  apiVersion: '2024-03-07', // use a data atual ou a versão que você precisa
  useCdn: true // `false` se quiser sempre dados frescos
})

// Configuração do builder de imagem
const builder = imageUrlBuilder(client)

// Função auxiliar para gerar URLs de imagem
export function urlFor(source) {
  return builder.image(source)
}