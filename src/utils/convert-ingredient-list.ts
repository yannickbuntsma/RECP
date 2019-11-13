import { Ingredient, Recipe, ServerRecipe } from '../types'
import { IngredientObject } from '../state/types'

export const convertAmountToNumber = (recipe: ServerRecipe): Recipe => ({
  ...recipe,
  ingredientList: recipe.ingredientList.map((i) => ({
    ...i,
    amount: parseFloat(i.amount),
  })),
})

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
