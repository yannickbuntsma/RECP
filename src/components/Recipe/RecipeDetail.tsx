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
    <div>
      <Hero src={image.fields.file.url} alt={title} height={300} />
      <Heading.H1>{title}</Heading.H1>
      <IngredientList
        ingredients={ingredientList}
        selectedIngredients={selected}
        onChange={handleIngredientSelection}
      />
      <Button onClick={() => handleAdd(ingredientList, selected)}>
        <MdAddShoppingCart style={{ height: '2rem', width: '2rem' }} />
      </Button>
      <Paragraph>asdadlksda dadlajd klasjdlkajk</Paragraph>
      <ReactMarkdown source={instructions} />
      <Paragraph>{instructions}</Paragraph>
    </div>
  )
}

const mapDispatchToProps: DispatchProps = {
  addToShoppingList,
}

export default connect(null, mapDispatchToProps)(RecipeDetail)
