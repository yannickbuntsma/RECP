import { Ingredient } from '../../types'

export const ADD_TO_SHOPPING_LIST = 'shopping-list/add'

export interface AddToShoppingList {
  type: typeof ADD_TO_SHOPPING_LIST
  payload: {
    ingredients: Ingredient[]
  }
}

export const addToShoppingList = (
  payload: AddToShoppingList['payload']
): AddToShoppingList => {
  console.log('action called! payload:', payload)
  return {
    type: ADD_TO_SHOPPING_LIST,
    payload,
  }
}

export type Action = AddToShoppingList
