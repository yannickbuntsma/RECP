import * as React from 'react'
import { connect } from 'react-redux'

import { List } from '../../elements'
import { objectToArray } from '../../utils'
import { AppState } from '../../state/reducer'
import {
  GetShoppingList,
  getShoppingList,
} from '../../state/shopping-list/selectors'

export interface StateProps {
  shoppingList: GetShoppingList
}

export interface Props extends StateProps {}

const ShoppingList: React.FC<Props> = ({ shoppingList }) => {
  return (
    <List>
      {objectToArray(shoppingList.items).map((item) => (
        <li key={item.name}>{`${item.amount} ${item.unit} ${item.name}`}</li>
      ))}
    </List>
  )
}

const mapStateToProps = (state: AppState) => ({
  shoppingList: getShoppingList(state),
})

export default connect(
  mapStateToProps,
  null
)(ShoppingList)
