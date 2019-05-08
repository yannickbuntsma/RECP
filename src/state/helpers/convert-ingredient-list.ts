import { Ingredient } from '../../types'
import { IngredientObject } from '../types'

export const arrayToObject = (array: Ingredient[]): IngredientObject =>
  array.reduce((acc, ingredient) => {
    const { name, ...rest } = ingredient

    return {
      ...acc,
      [ingredient.name]: { ...rest },
    }
  }, {})

export const objectToArray = (object: IngredientObject): Ingredient[] =>
  Object.entries(object).map(([name, { ...rest }]) => ({
    ...rest,
    name,
  }))
