import * as React from 'react'
import { arrayToObject, mergeIngredientObjects, objectToArray } from '../utils'
import { Ingredient, ShoppingList } from '../types'

function useLocalStorage<TValue>(
  key: string,
  initialValue: TValue,
): { value: TValue | undefined; setValue: (value: TValue) => void } {
  const [storedValue, setStoredValue] = React.useState<TValue>(() => {
    if (typeof window === 'undefined') {
      return { initialValue }
    }

    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      throw new Error(`Failed to set shopping list value. Error: ${error}`)
    }
  })

  const setValue = (value: TValue) => {
    try {
      setStoredValue(value)
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      throw new Error(`Failed to set shopping list value. Error: ${error}`)
    }
  }

  return { value: storedValue, setValue }
}

export function useShoppingList() {
  const { value, setValue: setShoppingList } = useLocalStorage<ShoppingList>(
    'shopping_list',
    {},
  )

  const shoppingList = value || {}

  const addItems = (ingredients: Ingredient[]) => {
    const newList = mergeIngredientObjects(
      shoppingList,
      arrayToObject(ingredients),
    )

    setShoppingList(newList)
  }

  const removeItem = (ingredient: Ingredient) => {
    const { name } = ingredient

    const filteredList = objectToArray(shoppingList).filter(
      (ing) => ing.name !== name,
    )

    return setShoppingList(arrayToObject(filteredList))
  }

  const toggleItem = (ingredient: Ingredient) => {
    const newList: ShoppingList = {
      ...shoppingList,
      [ingredient.name]: {
        ...ingredient,
        isSelected: !shoppingList[ingredient.name].isSelected,
      },
    }

    setShoppingList(newList)
  }

  const setNewShoppingList = (ingredients: Ingredient[]) => {
    const newList: ShoppingList = arrayToObject(ingredients)
    setShoppingList(newList)
  }

  return {
    shoppingList,
    addItems,
    removeItem,
    toggleItem,
    setNewShoppingList,
  }
}
