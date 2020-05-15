import React, { useState } from 'react'

import styled from '@emotion/styled'
import { Ingredient, Recipe } from '../../types'

import Hero from '../../elements/Hero'
import { IngredientList } from '../Ingredient/IngredientList'
import { Button } from '../Button/Button'
import { Heading } from '../Typography'
import Spacer from '../Spacing/Spacer'
import { addLineIngredientData } from '../../utils/add-inline-ingredient-data'
import Instructions from '../Instructions/Instructions'
import { useShoppingList } from '../../hooks/use-shopping-list'

const Basket = require('../../icons/shopping-basket_outline.svg')

export interface Props {
  recipe: Recipe
}

const RecipeDetail: React.FC<Props> = ({ recipe }) => {
  const { title, instructions, image, ingredientList = [] } = recipe
  const { addItems } = useShoppingList()
  const [selected, setSelected] = useState<Array<Ingredient['id']>>(
    ingredientList.map((item) => item.id),
  )
  const handleIngredientSelection = (ingredients: Ingredient[]) => {
    console.log(
      'handling',
      ingredients.map((item) => item.id),
    )
    setSelected(ingredients.map((item) => item.id))
  }

  const handleAdd = (
    ingredients: Ingredient[],
    selection: Array<Ingredient['id']>,
  ) => {
    const list = ingredients.filter((item) => selection.includes(item.id))
    addItems(list)
  }

  const enhancedInstructions = addLineIngredientData(
    instructions,
    ingredientList,
    ({ name, amount, unit }: Ingredient) =>
      `<ingr>${name} (${amount} ${unit})</ingr>`,
  )

  return (
    <>
      <Hero src={image.fields.file.url} alt={title} height={300} />
      <Spacer size="single" />
      <Wrapper>
        <Title>{title}</Title>
        <Spacer size="single" />
        <IngredientList
          ingredients={ingredientList}
          selectedIngredients={selected}
          onChange={handleIngredientSelection}
        />
        <Spacer size="double" />
        <AddToCartButton onClick={() => handleAdd(ingredientList, selected)}>
          <Text>Voeg selectie toe</Text>
          <Basket.default style={{ height: '2rem', width: '2rem' }} />
        </AddToCartButton>
        <Spacer size="double" />
        <Instructions>{enhancedInstructions}</Instructions>
      </Wrapper>
    </>
  )
}

const AddToCartButton = styled(Button)`
  display: flex;
  align-items: center;
  color: white;
  font-weight: bold;
`

const Title = styled(Heading.H1)`
  font-family: 'Oregano', cursive;
`

const Text = styled.span``

const Wrapper = styled.div`
  margin: 0 1rem;
  padding-bottom: 150px;
`

export default RecipeDetail
