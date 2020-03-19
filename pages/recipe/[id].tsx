import * as React from 'react'

import { Recipe } from '../../src/types'
import getRecipe from '../../src/cms/get-recipe'

import RecipeDetail from '../../src/components/Recipe/RecipeDetail'
import Layout from '../_layout'

export type Props = {
  recipe: Recipe
}

export default class RecipePage extends React.Component<Props> {
  static async getInitialProps({ query: { id: queryId } }: any) {
    let recipe

    if (typeof queryId === 'string') {
      recipe = await getRecipe(queryId)
        .then((res) => {
          const { sys, fields } = res
          const { id } = sys
          return {
            ...fields,
            id,
          }
        })
        .catch((err) => console.error(err))
    }

    return { recipe }
  }

  render() {
    const { recipe } = this.props

    if (!recipe) {
      return null
    }

    return (
      <Layout>
        <RecipeDetail recipe={recipe} />
      </Layout>
    )
  }
}
