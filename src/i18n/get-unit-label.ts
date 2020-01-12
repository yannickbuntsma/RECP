import { dutch } from './dutch'
import { Unit } from '../types'

export const getUnitLabel = (key: Unit, amount: number) => {
  const subkey = amount === 1 ? 'singular' : 'plural'
  const label = dutch[key]

  if (typeof label === 'string') {
    return label
  }

  if (typeof label === 'undefined') {
    return key
  }

  return label[subkey] || key
}
