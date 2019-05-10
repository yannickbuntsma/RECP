import { IngredientObject } from '../state/types'
import { arrayToObject, objectToArray } from './convert-ingredient-list'
import { Ingredient } from '../types'

const testArray: Ingredient[] = [
  { id: 'some-id', name: 'paprika', amount: 3, unit: 'pieces' },
  { id: 'some-id', name: 'milk', amount: 250, unit: 'ml' },
  { id: 'some-id', name: 'water', amount: 1, unit: 'l' },
]

const testObject: IngredientObject = {
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
      const result = arrayToObject(testArray)
      expect(result).toEqual(testObject)
    })
  })
  describe('objectToArray', () => {
    it('should convert name indexed object to array', () => {
      const result = objectToArray(testObject)
      expect(result).toEqual(testArray)
    })
  })
})
