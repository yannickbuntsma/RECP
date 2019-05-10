import { Unit } from '../types'

type ConversionTable = { [U in Unit]?: { [S in Unit]?: number } }

const conversionTable: ConversionTable = {
  tsp: {
    tbsp: 1 / 3,
    ml: 5,
    l: 1 / 200,
  },
  tbsp: {
    tsp: 3,
    ml: 15,
    l: 1 / 67,
  },
  ml: {
    tsp: 1 / 5,
    tbsp: 1 / 15,
    l: 1 / 1000,
  },
  l: {
    tsp: 0,
    tbsp: 0,
    ml: 1000,
  },
  g: {
    kg: 1 / 1000,
  },
  kg: {
    g: 1000,
  },
}

export const convertUnit = (amount: number, fromUnit: Unit, toUnit: Unit) => {
  if (fromUnit === 'pinch' || toUnit === 'pinch') {
    return { amount, unit: 'pinch' }
  }

  // conversion rate does not exist
  if (!conversionTable[fromUnit][toUnit]) {
    console.error(`Could not convert from '${fromUnit}' to '${toUnit}'`)
    return { amount, unit: fromUnit }
  }

  return { amount: amount * conversionTable[fromUnit][toUnit], unit: toUnit }
}
