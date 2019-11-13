import { Ingredient } from '../../types'

export const ADD_TO_SHOPPING_LIST = 'shopping-list/add'
export const REMOVE_FROM_SHOPPING_LIST = 'shopping-list/remove'
export const SET_SHOPPING_LIST = 'shopping-list/set'

export interface AddToShoppingList {
  type: typeof ADD_TO_SHOPPING_LIST
  payload: {
    ingredients: Ingredient[]
  }
}

export interface RemoveFromShoppingList {
  type: typeof REMOVE_FROM_SHOPPING_LIST
  payload: {
    ingredient: Ingredient
  }
}

export interface SetShoppingList {
  type: typeof SET_SHOPPING_LIST
  payload: {
    ingredients: Ingredient[]
  }
}

export const addToShoppingList = (
  payload: AddToShoppingList['payload']
): AddToShoppingList => ({
  type: ADD_TO_SHOPPING_LIST,
  payload,
})

export const removeFromShoppingList = (
  payload: RemoveFromShoppingList['payload']
): RemoveFromShoppingList => ({
  type: REMOVE_FROM_SHOPPING_LIST,
  payload,
})

export const setShoppingList = (
  payload: SetShoppingList['payload']
): SetShoppingList => ({
  type: SET_SHOPPING_LIST,
  payload,
})

export type Action =
  | AddToShoppingList
  | RemoveFromShoppingList
  | SetShoppingList
