import { on, reducer } from 'ts-action'
import { Recipe } from '../../types'
import { fetchRecipesFailed, fetchRecipesSuccess } from './actions'

export type RecipeListState = {
  isLoading: boolean
  error?: Error
  result: Recipe[]
}[]

const initialState: RecipeListState = []

export const recipesReducer = reducer(
  initialState,
  on(fetchRecipesSuccess, (state, { payload }) => {
    console.log(payload)
    return {
      ...state,
      isLoading: false,
      result: payload.recipes,
    }
  }),
  on(fetchRecipesFailed, (state, { payload }) => ({
    ...state,
    isLoading: false,
    error: payload.error,
  })),
)
