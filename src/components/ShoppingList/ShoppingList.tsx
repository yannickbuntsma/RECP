import React from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'

import { objectToArray } from '../../utils'
import { AppState } from '../../state/reducer'
import {
  GetShoppingList,
  getShoppingList,
} from '../../state/shopping-list/selectors'
import { setShoppingList } from '../../state/shopping-list/actions'
import { ListItem, useSelectableList } from '../../hooks/useSelectableList'
import { Ingredient as IngredientType } from '../../types'
import { Ingredient } from '../Ingredient'
import { IoMdClose } from 'react-icons/io'
import SelectableListItem from '../../elements/SelectableListItem'

export interface StateProps {
  shoppingList: GetShoppingList
}

export interface DispatchProps {
  setShoppingList: typeof setShoppingList
}

export interface Props extends StateProps, DispatchProps {}

// @ts-ignore
const ShoppingList: React.FC<Props> = ({ shoppingList, setShoppingList }) => {
  const items = objectToArray(shoppingList.items).map((item) => ({
    ...item,
    value: item.name,
    label: `${item.amount} ${item.unit} ${item.name}`,
  }))

  if (items.length < 1) {
    return <h3>You currently have no items in your shopping list</h3>
  }

  // const converted: Array<ListItem<IngredientType>> = items.map((i) => ({
  //   id: i.id,
  //   value: i,
  //   label: i.name,
  // }))

  const [
    list,
    setList,
    { removeItem, toggleItem, isItemSelected },
  ] = useSelectableList(items)

  const clearList = () => setShoppingList({ ingredients: [] })

  const handleToggle = (ingredientName: string) =>
    console.log({ ingredientName })

  return list.map((item) => {
    return (
      <SelectableListItem
        key={item.label}
        value={item}
        isSelected={isItemSelected(item)}
        onChange={() => toggleItem(item)}
      >
        <Content>
          <Name>{item.label}</Name>
          <Button
            onClick={() => {
              console.log(`item`, item)
              removeItem(item)
            }}
          >
            <IoMdClose className="icon" size={24} />
          </Button>
        </Content>
      </SelectableListItem>
    )
  })
}

const mapStateToProps = (state: AppState) => ({
  shoppingList: getShoppingList(state),
})

const mapDispatchToProps: DispatchProps = {
  setShoppingList,
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList)

const Button = styled.button`
  margin-left: auto;
`

const Name = styled.p`
  margin: 0;
`

const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`
