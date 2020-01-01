import { ContentfulClientApi, createClient } from 'contentful'

console.log(`process.env`, process.env)

const client: ContentfulClientApi = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
})

export default client
