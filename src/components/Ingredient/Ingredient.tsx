import * as React from 'react'
import styled from '@emotion/styled'

import { Ingredient as IngredientType } from '../../types'
import { Paragraph } from '../Typography'
import { getUnitLabel } from '../../i18n/get-unit-label'

export type Props = {
  ingredient: {
    amount: IngredientType['amount']
    unit: IngredientType['unit']
    name: IngredientType['name']
  }
}

const Ingredient: React.FC<Props> = ({
  ingredient: { amount, unit, name },
}) => {
  const unitLabel = getUnitLabel(unit, amount)

  return (
    <Paragraph>
      {amount} {unitLabel} {name}
    </Paragraph>
  )
}

export default Ingredient
