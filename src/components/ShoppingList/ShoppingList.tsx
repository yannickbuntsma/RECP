import React from 'react'
import styled from '@emotion/styled'

import { objectToArray } from '../../utils'
import SelectableListItem from '../../elements/SelectableListItem'
import { getUnitLabel } from '../../i18n/get-unit-label'
import { Button } from '../../elements'
import { useShoppingList } from '../../hooks/use-shopping-list'

const Basket = require('../../icons/shopping-basket_outline.svg')

export interface Props {}

// @ts-ignore
const ShoppingList: React.FC<Props> = () => {
  const { shoppingList, toggleItem, removeItem } = useShoppingList()

  const items = objectToArray(shoppingList).map((item) => {
    const { amount, unit, name } = item
    const unitLabel = getUnitLabel(unit, amount)

    return {
      ...item,
      value: item.name,
      label: `${amount} ${unitLabel} ${name}`,
    }
  })

  if (items.length < 1) {
    return (
      <div style={{ padding: '2rem' }}>
        <h3>You currently have no items in your shopping list</h3>
      </div>
    )
  }

  return items.map((item) => {
    return (
      <SelectableListItem
        key={item.label}
        value={item}
        isSelected={item.isSelected}
        onChange={() => toggleItem(item)}
      >
        <Content>
          <Name>{item.label}</Name>
          <DeleteButton onClick={() => removeItem(item)}>
            <Basket.default className="icon" size={24} />
          </DeleteButton>
        </Content>
      </SelectableListItem>
    )
  })
}

export default ShoppingList

const DeleteButton = styled(Button)({
  'margin-left': 'auto',
})

const Name = styled.p`
  margin: 0;
`

const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`
