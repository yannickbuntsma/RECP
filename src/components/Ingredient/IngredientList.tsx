import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Ingredient as IngredientType } from '../../types'

import List from '../Elements/List'
import Ingredient from './Ingredient'
import Checkbox from '../Elements/Checkbox'

export interface Props {
  ingredients: IngredientType[]
}

export const IngredientList: React.FC<Props> = ({ ingredients }) => {
  const [selected, setSelected] = useState<string[]>(
    ingredients.map<string>((item) => item.id)
  )

  const isSelected = (id: IngredientType['id']): boolean =>
    selected.some((ingredientId) => ingredientId === id)

  const handleChange = (id: IngredientType['id']): void => {
    const newState = isSelected(id)
      ? selected.filter((ingredientId) => ingredientId !== id)
      : [...selected, id]

    setSelected(newState)
  }

  return (
    <List>
      {ingredients.map((ingredient: IngredientType) => (
        <li key={ingredient.id}>
          <label>
            <Checkbox
              size="L"
              checked={isSelected(ingredient.id)}
              onChange={() => handleChange(ingredient.id)}
            />
            <Ingredient ingredient={ingredient} />
          </label>
        </li>
      ))}
    </List>
  )
}

export default styled(IngredientList)`
  // @ts-ignore // TODO: Fix tslint error
  ${Checkbox}: {
    margin-right: 1rem;
  };
`
