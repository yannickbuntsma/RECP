import { convertUnit } from './convert-unit'
import { Unit } from '../types'

type TestData = Array<{
  amount: number
  fromUnit: Unit
  toUnit: Unit
  expected: ReturnType<typeof convertUnit>
}>
const testData: TestData = [
  {
    amount: 250,
    fromUnit: 'ml',
    toUnit: 'l',
    expected: { amount: 0.25, unit: 'l' },
  },
  {
    amount: 1.75,
    fromUnit: 'l',
    toUnit: 'ml',
    expected: { amount: 1750, unit: 'ml' },
  },
  {
    amount: 35,
    fromUnit: 'tbsp',
    toUnit: 'ml',
    expected: { amount: 525, unit: 'ml' },
  },
  {
    amount: 35,
    fromUnit: 'tsp',
    toUnit: 'ml',
    expected: { amount: 175, unit: 'ml' },
  },
  {
    amount: 250,
    fromUnit: 'g',
    toUnit: 'kg',
    expected: { amount: 0.25, unit: 'kg' },
  },
  {
    amount: 1.75,
    fromUnit: 'kg',
    toUnit: 'g',
    expected: { amount: 1750, unit: 'g' },
  },
]

describe('convertUnit', () => {
  it(`should convert amount from unit to another unit`, () => {
    testData.forEach(({ amount, fromUnit, toUnit, expected }) => {
      expect(convertUnit(amount, fromUnit, toUnit)).toEqual(expected)
    })
  })

  it(`should NOT convert when conversion rate is not available`, () => {
    expect(convertUnit(250, 'g', 'ml')).toEqual({ amount: 250, unit: 'g' })
  })

  it(`should return the same if one of the arguments was 'pinch'`, () => {
    expect(convertUnit(3, 'pinch', 'ml')).toEqual({ amount: 3, unit: 'pinch' })
  })
})
