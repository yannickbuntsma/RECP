import * as React from 'react'

import RecipeDetail from '../components/Recipe/RecipeDetail'
import { Recipe } from '../types'
import Layout from './_layout'

export type Props = {
  pageContext: {

    recipe: Recipe
  }
}

const RecipePage: React.FC<Props> = ({pageContext:{ recipe }}) => {
  if (!recipe) {
    return null
  }

  return (
    <Layout>
      <RecipeDetail recipe={recipe} />
    </Layout>
  )
}

export default RecipePage
