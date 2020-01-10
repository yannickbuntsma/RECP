import { Ingredient } from '../types'

export interface ShoppingListIngredient {
  [key: string]: {
    id: Ingredient['id']
    amount: Ingredient['amount']
    unit: Ingredient['unit']
    isSelected?: boolean
  }
}
