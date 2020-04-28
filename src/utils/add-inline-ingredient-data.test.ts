import { Ingredient } from '../types'
import { addLineIngredientData } from './add-inline-ingredient-data'

const mockIngredients: Ingredient[] = [
  { id: 'some-id-1', name: 'paprika', amount: 3, unit: 'pieces' },
  { id: 'some-id-2', name: 'kikkererwten', amount: 250, unit: 'g' },
  { id: 'some-id-3', name: 'bloemkool', amount: 1, unit: 'kg' },
]

const mockReplacerFunction = jest.fn(
  (ingredient: Ingredient) =>
    `${ingredient.name} (${ingredient.amount} ${ingredient.unit})`,
)

beforeEach(() => jest.clearAllMocks())

describe('replaceInlineIngredientText', () => {
  it('should replace all ingredient names with component', () => {
    const input =
      '1. Verwarm de oven voor op 200 °C. Halveer de grote bloemkoolroosjes. Halveer de paprika, verwijder de zaadlijsten en snijd het vruchtvlees in stukken van 2 cm breed. Doe de kikkererwten in een vergiet, spoel af onder koud stromend water. Halveer eventueel de falafelballetjes. \n2. Meng de bloemkool, paprika, kikkererwten en falafel met de ras el hanout en olie. Bestrooi met peper en eventueel zout. Verdeel over een met bakpapier beklede bakplaat. Rooster ca. 15 min. in het midden van de oven gaar. Schep halverwege om.\nVerdeel de ovenschotel over de borden en serveer met de hummus.'

    const expectation =
      '1. Verwarm de oven voor op 200 °C. Halveer de grote bloemkoolroosjes. Halveer de paprika (3 pieces), verwijder de zaadlijsten en snijd het vruchtvlees in stukken van 2 cm breed. Doe de kikkererwten (250 g) in een vergiet, spoel af onder koud stromend water. Halveer eventueel de falafelballetjes. \n2. Meng de bloemkool (1 kg), paprika (3 pieces), kikkererwten (250 g) en falafel met de ras el hanout en olie. Bestrooi met peper en eventueel zout. Verdeel over een met bakpapier beklede bakplaat. Rooster ca. 15 min. in het midden van de oven gaar. Schep halverwege om.\nVerdeel de ovenschotel over de borden en serveer met de hummus.'

    const output = addLineIngredientData(
      input,
      mockIngredients,
      mockReplacerFunction,
    )
    const expectedCallOrder = ['paprika', 'kikkererwten', 'bloemkool']

    expectedCallOrder.forEach((item, index) => {
      const ingredient = mockIngredients.find((i) => i.name === item)
      expect(mockReplacerFunction).toHaveBeenNthCalledWith(
        index + 1,
        ingredient,
      )
    })

    expect(output).toEqual(expectation)
  })
})
