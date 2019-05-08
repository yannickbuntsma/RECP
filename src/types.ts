// const genMap = (start: number, increment: number, end: number) => {
//   const iterations = (end - start) / increment + 1
//
//   return Array(iterations).fill(start).map((item, index) => item + (increment * index))
// }

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

type Unit = 'tsp' | 'tbsp' | 'ml' | 'l' | 'g' | 'kg' | 'pieces' | 'pinch'

type Tag = string

export interface Ingredient {
  id: string
  name: string
  amount: number
  unit: Unit
}

export interface Recipe {
  id: string
  title: string
  instructions: string
  image: any
  ingredientList: Ingredient[]
  preparationTime: 5 | 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50 | 55 | 60
  cookingTime: 5 | 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50 | 55 | 60
  tags: Tag[]
}
