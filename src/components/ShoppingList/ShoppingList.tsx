import * as React from 'react'
import { connect } from 'react-redux'

import { objectToArray } from '../../utils'
import { AppState } from '../../state/reducer'
import {
  GetShoppingList,
  getShoppingList,
} from '../../state/shopping-list/selectors'
import SelectableList from '../SelectableList/SelectableList'
import { setShoppingList } from '../../state/shopping-list/actions'

export interface StateProps {
  shoppingList: GetShoppingList
}

export interface DispatchProps {
  setShoppingList: typeof setShoppingList
}

export interface Props extends StateProps, DispatchProps {}

const ShoppingList: React.FC<Props> = ({ shoppingList, setShoppingList }) => {
  const items = objectToArray(shoppingList.items).map((item) => ({
    ...item,
    value: item.name,
    label: `${item.amount} ${item.unit} ${item.name}`,
  }))

  if (items.length < 1) {
    return (
      <h3>You currently have no items in your shopping list</h3>
    )
  }

  return (
    <SelectableList
      items={items}
      onChange={(items) => setShoppingList({ ingredients: items as any })}
      // TODO: Fix this 'any' cast
    />
  )
}

const mapStateToProps = (state: AppState) => ({
  shoppingList: getShoppingList(state),
})

const mapDispatchToProps: DispatchProps = {
  setShoppingList,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingList)
