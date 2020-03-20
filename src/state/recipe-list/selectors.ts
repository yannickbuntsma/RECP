import { AppState } from '../reducer'
import { RecipeListState } from './reducer'

export const getRecipeList = (state: AppState): RecipeListState => state.recipes
export type GetRecipeList = ReturnType<typeof getRecipeList>
