import * as React from 'react'
import styled from '@emotion/styled'

import { Ingredient as IngredientType } from '../../types'
import { Paragraph } from '../Typography'

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
  <Paragraph>
    {amount} {unit} {name}
  </Paragraph>
)

export default Ingredient
