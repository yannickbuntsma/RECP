import { IngredientObject } from '../state/types'
import { mergeIngredientObjects } from './merge-ingredient-objects'
import { logger } from './test-logger'

const simpleExisting: IngredientObject = {
  paprika: {
    id: 'some-id',
    amount: 2,
    unit: 'pieces',
  },
  water: {
    id: 'from-tap',
    amount: 750,
    unit: 'ml',
  },
}

const simpleAddition: IngredientObject = {
  paprika: {
    id: 'some-id',
    amount: 3,
    unit: 'pieces',
  },
  water: {
    id: 'from-tap',
    amount: 25,
    unit: 'ml',
  },
}

const complexExisting: IngredientObject = {
  paprika: {
    id: 'some-id',
    amount: 1,
    unit: 'pieces',
  },
  milk: {
    id: 'from-cow',
    amount: 750,
    unit: 'ml',
  },
}

const complexAddition: IngredientObject = {
  paprika: {
    id: 'some-id',
    amount: 1,
    unit: 'pieces',
  },
  milk: {
    id: 'from-cow',
    amount: 0.5,
    unit: 'l',
  },
}

describe(`mergeIngredientObjects`, () => {
  it(`should merge the amounts if names are the same`, () => {
    const result = mergeIngredientObjects(simpleExisting, simpleAddition)
    expect(result).toEqual({
      paprika: {
        id: 'some-id',
        amount: 5,
        unit: 'pieces',
      },
      water: {
        id: 'from-tap',
        amount: 775,
        unit: 'ml',
      },
    })
  })

  it(`should try to convert the addition unit to the existing unit`, () => {
    const result = mergeIngredientObjects(complexExisting, complexAddition)
    expect(result).toEqual({
      paprika: {
        id: 'some-id',
        amount: 2,
        unit: 'pieces',
      },
      milk: {
        id: 'from-cow',
        amount: 1250,
        unit: 'ml',
      },
    })
  })
})
