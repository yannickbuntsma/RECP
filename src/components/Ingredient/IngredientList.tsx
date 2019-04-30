import * as React from 'react'
import styled from '@emotion/styled'
import { Ingredient as IngredientType } from '../../types'

import List from '../Elements/List'
import Ingredient from './Ingredient'

export interface Props {
  ingredients: IngredientType[]
}

export const IngredientList: React.FC<Props> = ({ ingredients }) => (
  <List>
    {ingredients.map((ingredient: IngredientType) => (
      <li key={ingredient.id}>
        <Ingredient
          name={ingredient.name}
          unit={ingredient.unit}
          amount={ingredient.amount}
        />
      </li>
    ))}
  </List>
)

export default styled(IngredientList)``
