import {
  Action as ShoppingListAction,
  ADD_TO_SHOPPING_LIST,
  addToShoppingList,
} from './actions'
import { Ingredient } from '../../types'
import { arrayToObject } from '../helpers/convert-ingredient-list'
import { mergeIngredientObjects } from '../helpers/merge-ingredient-objects'

export type ShoppingListState = {
  items:
    | {
        [key: string]: Ingredient
      }
    | {}
}

const initialState: ShoppingListState = {
  items: {},
}

export const shoppingListReducer = (
  state: ShoppingListState = initialState,
  action: ShoppingListAction
) => {
  switch (action.type) {
    case ADD_TO_SHOPPING_LIST:
      const { ingredients } = action.payload
      const newIngr = arrayToObject(ingredients)

      console.log(`newIngr`, newIngr)
      const items = mergeIngredientObjects(state.items, newIngr)

      console.log(`new items`, items)

      return {
        ...state,
        items,
      }

    default:
      return state
  }
}
