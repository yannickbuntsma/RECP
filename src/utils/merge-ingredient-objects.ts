import { IngredientObject } from '../state/types'
import { Ingredient, Omit } from '../types'

export const mergeIngredientObjects = (
  existingObj: IngredientObject,
  additionObj: IngredientObject
): IngredientObject =>
  Object.keys({ ...existingObj, ...additionObj }).reduce((acc, name) => {
    const existing: Omit<Ingredient, 'name'> = existingObj[name]
    const addition: Omit<Ingredient, 'name'> = additionObj[name]

    // Something went wrong
    if (!existing && !addition) {
      console.log(`Both ingredients were undefined`)
      return acc
    }

    // The ingredient is in both the shopping list and the list to add
    if (existing && addition) {
      return {
        ...acc,
        [name]: {
          ...existingObj[name],
          amount: Number(existing.amount) + Number(addition.amount),
        },
      }
    }

    // If ingredient is only in one list, take that one
    if (!existing || !addition) {
      const item = existing || addition
      return {
        ...acc,
        [name]: item,
      }
    }

    // TODO: Cannot convert ingredients yet
    if (existing.unit !== addition.unit) {
      console.log(
        `Units are not the same. Existing: ${existing.unit}, Addition: ${
          addition.unit
        }`
      )

      return acc
    }
  }, {})
