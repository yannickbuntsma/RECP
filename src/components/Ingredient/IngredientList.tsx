import React from 'react'
import styled from '@emotion/styled'
import { Ingredient as IngredientType } from '../../types'

import List from '../../elements/List'
import Ingredient from './Ingredient'
import Checkbox from '../../elements/Checkbox'
import { useTheme } from '../../theme/theme'
import Spacer from '../Spacing/Spacer'

export type Props = {
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
  const theme = useTheme()

  const isSelected = (id: Id): boolean =>
    selectedIngredients.some((ingredientId) => ingredientId === id)

  const handleChange = (id: Id): Props['selectedIngredients'] => {
    const selected: Id[] = isSelected(id)
      ? selectedIngredients.filter((ingredientId) => ingredientId !== id)
      : [...selectedIngredients, id]

    const newIngredients = ingredients.filter((item) =>
      selected.includes(item.id),
    )

    if (onChange) {
      onChange(newIngredients)
    }

    return newIngredients.map((item) => item.id)
  }

  return (
    <List>
      {ingredients.map((ingredient: IngredientType, index) => (
        <>
          {index !== 0 && <Spacer size="half" />}
          <Item key={ingredient.id} style={{ color: theme.colors.text }}>
            <LABEL>
              <Checkbox
                size="L"
                checked={isSelected(ingredient.id)}
                onChange={() => handleChange(ingredient.id)}
              />
              <Ingredient ingredient={ingredient} />
            </LABEL>
          </Item>
        </>
      ))}
    </List>
  )
}

export default IngredientList

const LABEL = styled.label`
  display: flex;
  align-items: center;
`

const Item = styled.li`
  list-style: none;
`
