import { combineReducers } from 'redux'
import { shoppingListReducer, ShoppingListState } from './shopping-list/reducer'

export interface AppState {
  shoppingList: ShoppingListState
}

export const rootReducer = combineReducers({
  shoppingList: shoppingListReducer,
})
