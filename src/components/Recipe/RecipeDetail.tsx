import React, { useState } from 'react'
import { connect } from 'react-redux'
import ReactMarkdown from 'react-markdown'

import styled from '@emotion/styled'
import { Ingredient, Recipe } from '../../types'

import Hero from '../../elements/Hero'
import { IngredientList } from '../Ingredient/IngredientList'
import * as Actions from '../../state/shopping-list/actions'
import { Button } from '../Button/Button'
import { Heading, Paragraph } from '../Typography'
import Spacer from '../Spacing/Spacer'

const Basket = require('../../icons/shopping-basket_outline.svg')

export interface DispatchProps {
  addToShoppingList: typeof Actions.addToShoppingList
}

export interface Props extends DispatchProps {
  recipe: Recipe
}

const RecipeDetail: React.FC<Props> = ({
  addToShoppingList,
  recipe: { title, instructions, image, ingredientList },
}) => {
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
    addToShoppingList({ ingredients: list })
  }

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
        <Paragraph>
          <ReactMarkdown source={instructions} />
        </Paragraph>
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

const mapDispatchToProps: DispatchProps = {
  addToShoppingList: Actions.addToShoppingList,
}

export default connect(null, mapDispatchToProps)(RecipeDetail)
