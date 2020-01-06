import * as React from 'react'
import { AppContext } from 'next/app'

import { Recipe } from '../../src/types'
import getRecipe from '../../src/cms/get-recipe'

import RecipeDetail from '../../src/components/Recipe/RecipeDetail'
import Layout from '../_layout'

export interface Props {
  recipe: Recipe
}

export default class extends React.Component<Props> {
  static async getInitialProps({ query: { id } }: any) {
    let recipe

    if (typeof id === 'string') {
      recipe = await getRecipe(id)
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
