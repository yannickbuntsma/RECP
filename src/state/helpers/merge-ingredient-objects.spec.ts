import { IngredientObject } from '../types'
import { mergeIngredientObjects } from './merge-ingredient-objects'

const base: IngredientObject = {
  paprika: {
    id: 'some-id',
    amount: 2,
    unit: 'pieces',
  },
}

const addition: IngredientObject = {
  paprika: {
    id: 'some-id',
    amount: 3,
    unit: 'pieces',
  },
}

describe(`mergeIngredientObjects`, () => {
  it(`should merge the amounts if names are the same`, () => {
    const result = mergeIngredientObjects(base, addition)
    expect(result).toEqual({
      paprika: {
        id: 'some-id',
        amount: 5,
        unit: 'pieces',
      },
    })
  })
})
