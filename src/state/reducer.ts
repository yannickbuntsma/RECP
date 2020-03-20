import { combineReducers } from 'redux'
import { shoppingListReducer, ShoppingListState } from './shopping-list/reducer'
import { RecipeListState, recipesReducer } from './recipe-list/reducer'

export interface AppState {
  recipes: RecipeListState
  shoppingList: ShoppingListState
}

export const rootReducer = combineReducers({
  recipes: recipesReducer,
  shoppingList: shoppingListReducer,
})
