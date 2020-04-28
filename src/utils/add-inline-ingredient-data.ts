import { findAll } from 'highlight-words-core'
import { Ingredient } from '../types'

export function addLineIngredientData(
  instructions: string,
  ingredients: Ingredient[],
  replacerFunction: (ingredient: Ingredient) => string,
) {
  const names: string[] = []

  const ingredientMap = ingredients.reduce<Record<string, Ingredient>>(
    (acc, ingredient) => {
      const { name, ...rest } = ingredient

      names.push(name)

      return {
        ...acc,
        [ingredient.name]: { ...rest, name },
      }
    },
    {},
  )

  const chunks = findAll({
    searchWords: names,
    textToHighlight: instructions,
  })

  return chunks
    .map((chunk) => {
      const { end, highlight, start } = chunk
      const string = instructions.substr(start, end - start)

      if (highlight) {
        const nextChar = instructions.substr(end, 1)
        const regex = new RegExp(/[A-z]/i)
        const isNextCharLetter = regex.test(nextChar)

        if (isNextCharLetter) {
          return string
        }

        const data = ingredientMap[string]
        return replacerFunction(data)
      }

      return string
    })
    .join('')
}
