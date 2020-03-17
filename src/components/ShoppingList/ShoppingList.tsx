import React from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'

const Basket = require('../../icons/shopping-basket_outline.svg')

import { objectToArray } from '../../utils'
import { AppState } from '../../state/reducer'
import {
  GetShoppingList,
  getShoppingList,
} from '../../state/shopping-list/selectors'
import {
  removeFromShoppingList,
  toggleShoppingListItem,
} from '../../state/shopping-list/actions'
import SelectableListItem from '../../elements/SelectableListItem'
import { getUnitLabel } from '../../i18n/get-unit-label'
import { Button } from '../../elements'

export interface StateProps {
  shoppingList: GetShoppingList
}

export interface DispatchProps {
  toggleShoppingListItem: typeof toggleShoppingListItem
  removeFromShoppingList: typeof removeFromShoppingList
}

export interface Props extends StateProps, DispatchProps {}

// @ts-ignore
const ShoppingList: React.FC<Props> = ({
  shoppingList,
  toggleShoppingListItem,
  removeFromShoppingList,
}) => {
  const items = objectToArray(shoppingList.items).map((item) => {
    const { amount, unit, name } = item
    const unitLabel = getUnitLabel(unit, amount)

    return {
      ...item,
      value: item.name,
      label: `${amount} ${unitLabel} ${name}`,
    }
  })

  if (items.length < 1) {
    return <h3>You currently have no items in your shopping list</h3>
  }

  return items.map((item) => {
    const { name } = item

    return (
      <SelectableListItem
        key={item.label}
        value={item}
        isSelected={item.isSelected}
        onChange={() => toggleShoppingListItem({ name })}
      >
        <Content>
          <Name>{item.label}</Name>
          <DeleteButton onClick={() => removeFromShoppingList({ name })}>
            <Basket.default className="icon" size={24} />
          </DeleteButton>
        </Content>
      </SelectableListItem>
    )
  })
}

const mapStateToProps = (state: AppState) => ({
  shoppingList: getShoppingList(state),
})

const mapDispatchToProps: DispatchProps = {
  toggleShoppingListItem,
  removeFromShoppingList,
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList)

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
