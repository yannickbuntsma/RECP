import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RecipeList } from '../src/components/Recipe'
import Layout from './_layout'
import { fetchRecipes } from '../src/state/recipe-list/actions'
import {
  GetRecipeList,
  getRecipeList,
} from '../src/state/recipe-list/selectors'

export type Props = {}

const Home: React.FC<Props> = () => {
  const dispatch = useDispatch()
  const recipes: GetRecipeList = useSelector(getRecipeList)
  console.log(`recipes`, recipes)

  useEffect(() => {
    if (!recipes) {
      dispatch(fetchRecipes())
    }
  }, [recipes, dispatch])

  // @ts-ignore
  return <Layout>{recipes && <RecipeList recipes={recipes.result} />}</Layout>
}

export default Home
