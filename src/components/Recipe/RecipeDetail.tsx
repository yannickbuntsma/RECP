import React, { useState } from 'react'
import { connect } from 'react-redux'
import ReactMarkdown from 'react-markdown'

import { Ingredient, Recipe } from '../../types'
import { AppState } from '../../state/reducer'

import Hero from '../Elements/Hero'
import Heading from '../Typography/Heading'
import { IngredientList } from '../Ingredient/IngredientList'
import {
  AddToShoppingList,
  addToShoppingList,
} from '../../state/shopping-list/actions'
import { Button } from '../Elements'

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
    console.log('handling', ingredients.map((item) => item.id))
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
        Add to list
      </Button>
      <ReactMarkdown source={instructions} />
      <p>{instructions}</p>
    </div>
  )
}

const mapDispatchToProps: DispatchProps = {
  addToShoppingList,
}

export default connect(
  null,
  mapDispatchToProps
)(RecipeDetail)
