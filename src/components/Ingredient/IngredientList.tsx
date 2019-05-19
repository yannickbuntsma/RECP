import React from 'react'
import styled from '@emotion/styled'
import { Ingredient as IngredientType } from '../../types'

import List from '../../elements/List'
import Ingredient from './Ingredient'
import Checkbox from '../../elements/Checkbox'

export interface Props {
  ingredients: IngredientType[]
  selectedIngredients: Array<IngredientType['id']>
  onChange?: (selected: IngredientType[]) => unknown
}

type Id = IngredientType['id']

export const IngredientList: React.FC<Props> = ({
  ingredients,
  selectedIngredients,
  onChange,
}) => {
  const isSelected = (id: Id): boolean =>
    selectedIngredients.some((ingredientId) => ingredientId === id)

  const handleChange = (id: Id): Props['selectedIngredients'] => {
    const selected: Id[] = isSelected(id)
      ? selectedIngredients.filter((ingredientId) => ingredientId !== id)
      : [...selectedIngredients, id]

    const newIngredients = ingredients.filter((item) =>
      selected.includes(item.id)
    )

    onChange && onChange(newIngredients)
    return newIngredients.map((item) => item.id)
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
  ${Checkbox} {
    margin-right: 1rem;
  };
`
