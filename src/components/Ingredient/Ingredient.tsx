import * as React from 'react'
import styled from '@emotion/styled'

import { Ingredient as IngredientType } from '../../types'

export interface Props {
  ingredient: {
    amount: IngredientType['amount']
    unit: IngredientType['unit']
    name: IngredientType['name']
  }
}

const Ingredient: React.FC<Props> = ({
  ingredient: { amount, unit, name },
}) => (
  <span>
    {amount} {unit} {name}
  </span>
)

export default styled(Ingredient)``
