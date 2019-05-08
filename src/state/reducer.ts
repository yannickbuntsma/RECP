import { combineReducers } from 'redux'
import { shoppingListReducer, ShoppingListState } from './shopping-list/reducer'

export interface AppState extends ShoppingListState {}

export const rootReducer = combineReducers({
  shoppingList: shoppingListReducer,
})
