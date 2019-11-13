import * as React from 'react'

export type SelectableListItemType = {
  value: string | number
  label: string | number
}

export const useSelectableList = <T extends SelectableListItemType>(
  items: T[] = [],
  initialState: T[] = []
): [
  T[],
  React.Dispatch<React.SetStateAction<T[]>>,
  (item: T) => void,
  (item: T) => boolean,
  (item: T) => T[],
  (item: T) => T[],
  React.Dispatch<React.SetStateAction<T[]>>
] => {
  const [selected, setSelected] = React.useState(initialState)

  const isSelected = (item: T): boolean =>
    !!selected.find((i) => i.value === item.value)
  const addItem = (item: T): T[] => [...selected, item]
  const removeItem = (item: T): any => {
    const filtered = selected.filter((i) => i.value !== item.value)
    console.log(`selected`, selected)
    console.log(`filtered`, filtered)
  }

  const toggleItem = (item: T): void => {
    const newItems = isSelected(item) ? removeItem(item) : addItem(item)
    setSelected(newItems)
  }

  const clearItems = () => setSelected([])

  return [
    selected,
    setSelected,
    toggleItem,
    isSelected,
    addItem,
    removeItem,
    clearItems,
  ]
}
