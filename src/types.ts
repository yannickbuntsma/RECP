// const genMap = (start: number, increment: number, end: number) => {
//   const iterations = (end - start) / increment + 1
//
//   return Array(iterations).fill(start).map((item, index) => item + (increment * index))
// }

type Unit = 'liter' | 'milliliter' | 'piece' | 'kilograms' | 'grams'

type Difficulty = 'easy' | 'medium' | 'hard'

type Tag = 'vegan' | 'vegetarian' | 'dinner' | 'italian'

export interface Ingredient {
  name: string
  amount: number
  unit: Unit
}

export type IngredientString = string // TODO: Temp until Contentul setup fixed

export interface Recipe {
  title: string
  instructions: string
  image: any
  ingredients: IngredientString[]
  // difficulty: string
  preparationTime: 5 | 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50 | 55 | 60
  cookingTime: 5 | 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50 | 55 | 60
  tags: Tag[]
}
