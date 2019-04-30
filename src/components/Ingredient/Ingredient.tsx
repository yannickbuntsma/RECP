import * as React from 'react'
import styled from '@emotion/styled'

import { Ingredient as IngredientType } from '../../types'

export interface Props {
  amount: IngredientType['amount']
  unit: IngredientType['unit']
  name: IngredientType['name']
}

const Ingredient: React.FC<Props> = ({ amount, unit, name }) => (
  <div>
    {amount} {unit} {name}
  </div>
)

export default styled(Ingredient)``
