import React, { useState } from 'react'
import { connect } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import { MdAddShoppingCart } from 'react-icons/md'

import { Ingredient, Recipe } from '../../types'

import Hero from '../../elements/Hero'
import { IngredientList } from '../Ingredient/IngredientList'
import { addToShoppingList } from '../../state/shopping-list/actions'
import { Button } from '../../elements'
import { Heading, Paragraph } from '../Typography'
import Spacer from '../Spacing/Spacer'
import styled from '@emotion/styled'

export interface DispatchProps {
  addToShoppingList: typeof addToShoppingList
}

export interface Props extends DispatchProps {
  recipe: Recipe
}

const RecipeDetail: React.FC<Props> = ({
  addToShoppingList,
  recipe: {
    id,
    title,
    instructions,
    image,
    ingredientList,
    preparationTime,
    cookingTime,
    tags,
  },
}) => {
  const [selected, setSelected] = useState<Array<Ingredient['id']>>(
    ingredientList.map((item) => item.id)
  )
  const handleIngredientSelection = (ingredients: Ingredient[]) => {
    console.log(
      'handling',
      ingredients.map((item) => item.id)
    )
    setSelected(ingredients.map((item) => item.id))
  }

  const handleAdd = (
    ingredients: Ingredient[],
    selection: Array<Ingredient['id']>
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
          <MdAddShoppingCart style={{ height: '2rem', width: '2rem' }} />
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
  addToShoppingList,
}

export default connect(null, mapDispatchToProps)(RecipeDetail)
