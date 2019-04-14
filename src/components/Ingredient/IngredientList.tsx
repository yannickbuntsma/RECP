import * as React from 'react'
import { Ingredient as IngredientType } from '../../types'

import List from '../Elements/List'
import Ingredient from './Ingredient'

export interface Props {
  ingredients: IngredientType[]
}

const IngredientList: React.FC<Props> = ({ ingredients }) => (
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

export default IngredientList
