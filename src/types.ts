// const genMap = (start: number, increment: number, end: number) => {
//   const iterations = (end - start) / increment + 1
//
//   return Array(iterations).fill(start).map((item, index) => item + (increment * index))
// }

export type Unit =
  | 'tsp'
  | 'tbsp'
  | 'ml'
  | 'l'
  | 'g'
  | 'kg'
  | 'pieces'
  | 'pinches'
  | 'hands'
  | 'cloves'
  | 'bag'
  | 'cm'
  | 'to taste'

type Tag = string

export interface SelectableItem {
  isSelected?: boolean
}

export interface Ingredient<TAmount = number> {
  id: string
  name: string
  amount: TAmount
  unit: Unit
}

export interface SelectableIngredient<TAmount = number>
  extends Ingredient,
    SelectableItem {}

export interface Recipe<TIngredientAmount = number> {
  id: string
  title: string
  instructions: string
  image: any
  ingredientList?: Ingredient<TIngredientAmount>[]
  preparationTime: 5 | 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50 | 55 | 60
  cookingTime: 5 | 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50 | 55 | 60
  tags: Tag[]
}

export interface ServerRecipe extends Recipe<string> {}

export interface ShoppingListIngredient {
  [key: string]: {
    id: Ingredient['id']
    amount: Ingredient['amount']
    unit: Ingredient['unit']
    isSelected?: boolean
  }
}

export type ShoppingList = {
  [key: string]: ShoppingListIngredient[0]
}
