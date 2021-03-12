/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

require('dotenv').config({
  path: `.env`,
})

console.log({
  space: process.env.GATSBY_CONTENTFUL_SPACE_ID,
  accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
})

const contentful = require('contentful')
const Case = require('case')

const client = contentful.createClient({
  space: process.env.GATSBY_CONTENTFUL_SPACE_ID,
  accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
})


exports.createPages = async ({ actions: { createPage } }) => {
  const { items } = await client.getEntries()

  console.log({items})
  const recipeList = items.map(i => ({...i.fields, slug: Case.kebab(i.fields.title)}))

  // Create a page that lists all recipe.
  createPage({
    path: `/`,
    component: require.resolve('./src/templates/index.tsx'),
    context: { recipeList },
  })

  // Create a page for each recipe.
  recipeList.forEach((recipe) => {
    createPage({
      path: `/recipe/${recipe.slug}/`,
      component: require.resolve('./src/templates/recipe.tsx'),
      context: { recipe },
    })
  })
}
