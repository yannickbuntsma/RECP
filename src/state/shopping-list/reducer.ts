import {
  Action as ShoppingListAction,
  ADD_TO_SHOPPING_LIST,
  REMOVE_FROM_SHOPPING_LIST,
  SET_SHOPPING_LIST,
} from './actions'
import { Ingredient } from '../../types'
import { arrayToObject, objectToArray } from '../../utils'
import { mergeIngredientObjects } from '../../utils'

export type ShoppingListState = {
  items: {
    [key: string]: Ingredient
  }
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

      return {
        ...state,
        items: mergeIngredientObjects(state.items, arrayToObject(ingredients)),
      }

    case REMOVE_FROM_SHOPPING_LIST:
      const { ingredient } = action.payload

      const filteredList = objectToArray(state.items).filter(
        ({ name }) => name !== ingredient.name
      )
      return {
        ...state,
        items: filteredList,
      }

    case SET_SHOPPING_LIST:
      console.log(action.payload)
      return {
        ...state,
        items: arrayToObject(action.payload.ingredients),
      }

    default:
      return state
  }
}
