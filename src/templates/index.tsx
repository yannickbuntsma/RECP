import React, { useEffect, useState } from 'react'

import { Recipe } from '../types'
import { RecipeList } from '../components/Recipe'
import Layout from './_layout'

export type Props = {
  pageContext: {
    recipeList: Recipe[]
  }
}

const Home: React.FC<Props> = ({pageContext: {recipeList}}) => {
  console.log({recipeList})

  return <Layout>
    <h1>RECIPES</h1>
    {recipeList && <RecipeList recipes={recipeList} />}
    </Layout>
}

export default Home
