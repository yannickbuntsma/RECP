import { Ingredient } from '../types'

export interface IngredientObject {
  [key: string]: {
    id: Ingredient['id']
    amount: Ingredient['amount']
    unit: Ingredient['unit']
  }
}
