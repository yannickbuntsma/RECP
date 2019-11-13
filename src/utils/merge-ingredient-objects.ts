import { IngredientObject } from '../state/types'
import { Ingredient } from '../types'
import { convertUnit } from './convert-unit'

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

    // If ingredient is only in one list, take that one
    if (!existing || !addition) {
      const item = existing || addition
      return {
        ...acc,
        [name]: item,
      }
    }

    // The ingredient is in both the shopping list and the list to add
    if (existing.unit === addition.unit) {
      return {
        ...acc,
        [name]: {
          ...existingObj[name],
          amount: Number(existing.amount) + Number(addition.amount),
        },
      }
    } else {
      // addition ingredient needs to be converted
      const { amount: convertedAdditionAmount, unit } = convertUnit(
        addition.amount,
        addition.unit,
        existing.unit
      )
      const newAmount = existing.amount + convertedAdditionAmount

      return {
        ...acc,
        [name]: {
          ...existingObj[name],
          amount: newAmount,
          unit,
        },
      }
    }
  }, {})
