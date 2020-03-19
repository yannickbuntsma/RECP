import { on, reducer } from 'ts-action'
import {
  addToShoppingList,
  removeFromShoppingList,
  setShoppingList,
  toggleShoppingListItem,
} from './actions'
import {
  arrayToObject,
  mergeIngredientObjects,
  objectToArray,
} from '../../utils'
import { ShoppingListIngredient } from '../types'

export type ShoppingListState = {
  items: {
    [key: string]: ShoppingListIngredient[0]
  }
}

const initialState: ShoppingListState = {
  items: {},
}

export const shoppingListReducer = reducer(
  initialState,

  on(addToShoppingList, (state, { payload }) => ({
    ...state,
    items: mergeIngredientObjects(
      state.items,
      arrayToObject(payload.ingredients),
    ),
  })),

  on(removeFromShoppingList, (state, { payload }) => {
    const { name } = payload

    const filteredList = objectToArray(state.items).filter(
      (ingredient) => ingredient.name !== name,
    )

    return {
      ...state,
      items: arrayToObject(filteredList),
    }
  }),

  on(toggleShoppingListItem, (state, { payload }) => {
    const { name } = payload
    const item = state.items[name]

    return {
      ...state,
      items: {
        ...state.items,
        [name]: {
          ...item,
          isSelected: !item.isSelected,
        },
      },
    }
  }),

  on(setShoppingList, (state, { payload }) => ({
    ...state,
    items: arrayToObject(payload.ingredients),
  })),
)
