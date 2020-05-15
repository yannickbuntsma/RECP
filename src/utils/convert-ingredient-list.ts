import { Ingredient, Recipe, ServerRecipe, ShoppingListIngredient } from '../types'

export const convertAmountToNumber = (recipe: ServerRecipe): Recipe => ({
  ...recipe,
  ingredientList: recipe.ingredientList.map((i) => ({
    ...i,
    amount: parseFloat(i.amount),
  })),
})

export const arrayToObject = (array: Ingredient[]): ShoppingListIngredient =>
  array.reduce((acc, ingredient) => {
    const { name, ...rest } = ingredient

    return {
      ...acc,
      [ingredient.name]: { ...rest },
    }
  }, {})

export const objectToArray = (
  object: ShoppingListIngredient,
): Array<Ingredient & { isSelected?: boolean }> =>
  Object.entries(object).map(([name, { isSelected, ...rest }]) => ({
    ...rest,
    isSelected,
    name,
  }))
