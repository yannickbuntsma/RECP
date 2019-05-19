import { AppState } from '../reducer'
import { ShoppingListState } from './reducer'

export const getShoppingList = (state: AppState): ShoppingListState =>
  state.shoppingList
export type GetShoppingList = ReturnType<typeof getShoppingList>
