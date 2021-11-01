import * as React from 'react'
import slugify from 'slugify'
import fs from 'fs'

import { Recipe } from '../../src/types'
import getRecipe from '../../src/cms/get-recipe'

import RecipeDetail from '../../src/components/Recipe/RecipeDetail'
import Layout from '../_layout'
import client from '../../src/cms/contentful-client'

export type Props = {
  recipe: Recipe
}

const RecipePage = ({ recipe }: Props): JSX.Element => {
  if (!recipe) {
    return null
  }

  return (
    <Layout>
      <RecipeDetail recipe={recipe} />
    </Layout>
  )
}

const PATH = './.page-mapping.json'
function getMapping() {
  if (!fs.existsSync(PATH)) {
    throw new Error(`Could not find mapping file.`)
  }
  try {
    const fileContent = fs.readFileSync(PATH, { encoding: 'utf8', flag: 'r' })
    return JSON.parse(fileContent)
  } catch (err) {
    throw new Error(`Error trying to write to mapping: ${err}`)
  }
}

function updateMapping(slug: string, id: string) {
  if (!fs.existsSync(PATH)) {
    try {
      fs.writeFileSync(PATH, JSON.stringify({ [slug]: id }))
    } catch (err) {
      throw new Error(`Error trying to write to mapping: ${err}`)
    }
    return
  }

  const fileContent = fs.readFileSync(PATH, { encoding: 'utf8', flag: 'r' })
  const mapping = JSON.parse(fileContent)

  try {
    fs.writeFileSync(PATH, JSON.stringify({ ...mapping, [slug]: id }), {
      encoding: 'utf8',
    })
  } catch (err) {
    throw new Error(`Error trying to write to mapping: ${err}`)
  }
}

// This function gets called at build time
export async function getStaticPaths() {
  const recipes: Recipe[] = await client.getEntries().then((entries: any) => {
    // eslint-disable-next-line array-callback-return,consistent-return
    return entries.items.map((entry: any) => {
      if (entry.fields) {
        return {
          ...entry.fields,
          id: entry.sys.id,
        }
      }
    })
  })

  // Get the paths we want to pre-render based on posts
  const paths = recipes.map((recipe) => {
    const slug = slugify(recipe.title, { strict: true }).toLowerCase()
    const { id } = recipe

    updateMapping(slug, id)

    return {
      params: {
        id,
        slug,
      },
    }
  })

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }: { params: any }) {
  const mapping = getMapping()

  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const recipe = await getRecipe(mapping[params.slug])
    .then((res) => {
      const { sys, fields } = res
      const { id } = sys
      return {
        ...fields,
        id,
      }
    })
    // eslint-disable-next-line no-console
    .catch((err) => console.error(err))

  // Pass post data to the page via props
  return { props: { recipe } }
}

export default RecipePage
