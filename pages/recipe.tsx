import * as React from 'react'
import { NextContext } from 'next'

import { Recipe } from '../src/types'
import getRecipe from '../src/cms/get-recipe'

import RecipeDetail from '../src/components/Recipe/RecipeDetail'

export interface Props {
  recipe: Recipe
}

export default class extends React.Component<Props> {
  static async getInitialProps({ query: { id } }: NextContext) {
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

    return <RecipeDetail recipe={recipe} />
  }
}
