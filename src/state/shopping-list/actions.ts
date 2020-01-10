import { action, payload } from 'ts-action'

import { Ingredient } from '../../types'

type Name = Ingredient['name']

export const addToShoppingList = action(
  'shopping-list/add',
  payload<{
    ingredients: Ingredient[]
  }>()
)

export const removeFromShoppingList = action(
  'shopping-list/remove',
  payload<{
    name: Name
  }>()
)

export const toggleShoppingListItem = action(
  'shopping-list/toggle-item',
  payload<{
    name: Name
  }>()
)

export const setShoppingList = action(
  'shopping-list/set',
  payload<{
    ingredients: Ingredient[]
  }>()
)
