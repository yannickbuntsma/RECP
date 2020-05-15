import { arrayToObject, objectToArray } from './convert-ingredient-list'
import { Ingredient, ShoppingListIngredient } from '../types'

const testNumberAmounts: Ingredient[] = [
  { id: 'some-id', name: 'paprika', amount: 3, unit: 'pieces' },
  { id: 'some-id', name: 'milk', amount: 250, unit: 'ml' },
  { id: 'some-id', name: 'water', amount: 1, unit: 'l' },
]

const testObjectNumberAmounts: ShoppingListIngredient = {
  paprika: {
    id: 'some-id',
    amount: 3,
    unit: 'pieces',
  },
  milk: {
    id: 'some-id',
    amount: 250,
    unit: 'ml',
  },
  water: {
    id: 'some-id',
    amount: 1,
    unit: 'l',
  },
}

describe('convertIngredientList', () => {
  describe('arrayToObject', () => {
    it('should convert array to name indexed object', () => {
      const result = arrayToObject(testNumberAmounts)
      expect(result).toEqual(testObjectNumberAmounts)
    })
  })

  describe('objectToArray', () => {
    it('should convert name indexed object to array', () => {
      const result = objectToArray(testObjectNumberAmounts)
      expect(result).toEqual(testNumberAmounts)
    })
  })

  describe('convertAmountToNumber', () => {
    it.todo('should convert amounts in array from string to number')
  })
})
