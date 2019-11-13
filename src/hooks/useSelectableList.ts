import * as React from 'react'

export interface ListItem<T> {
  id: string
  label: string | number
  value: T
}

export interface SelectableListItem<T> extends ListItem<T> {
  isSelected?: boolean
}

export const useSelectableList = <T>(
  items: Array<ListItem<T>> = [],
  initialState: Array<SelectableListItem<T>> = []
): [
  Array<SelectableListItem<T>>,
  React.Dispatch<React.SetStateAction<Array<SelectableListItem<T>>>>,
  {
    toggleItem: (item: SelectableListItem<T>) => void
    isItemSelected: (item: SelectableListItem<T>) => boolean
    addItem: (item: SelectableListItem<T>) => Array<SelectableListItem<T>>
    removeItem: (item: SelectableListItem<T>) => Array<SelectableListItem<T>>
    clearItems: () => void
    getSelectedOriginalItems: T[]
  }
] => {
  const initial: Array<SelectableListItem<T>> = items.map(
    (i, index) =>
      initialState[index] || {
        ...i,
        isSelected: i.hasOwnProperty('isSelected') || false,
      }
  )

  const [list, setList] = React.useState(initial)

  const isItemSelected = (item: SelectableListItem<T>): boolean =>
    list.find((i) => i.value === item.value).isSelected

  const addItem = (item: SelectableListItem<T>): Array<SelectableListItem<T>> => [
    ...list,
    item,
  ]

  const removeItem = (item: SelectableListItem<T>): any =>
    list.filter((i) => i.value !== item.value)

  const toggleItem = (item: SelectableListItem<T>): void => {
    const newItems = list.reduce<Array<SelectableListItem<T>>>((acc, cur) => {
      const isSelected =
        item.value === cur.value ? !cur.isSelected : cur.isSelected

      return [...acc, { ...cur, isSelected }]
    }, [])

    setList(newItems)
  }

  const clearItems = () => setList([])

  const getSelectedOriginalItems = list
    .filter((i) => i.isSelected)
    .map((i) => i.value)

  return [
    list,
    setList,
    {
      toggleItem,
      isItemSelected,
      addItem,
      removeItem,
      clearItems,
      getSelectedOriginalItems,
    },
  ]
}
