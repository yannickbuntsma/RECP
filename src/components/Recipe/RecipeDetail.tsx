import * as React from 'react'
import ReactMarkdown from 'react-markdown'

import { Recipe } from '../../types'

import Hero from '../Elements/Hero'
import Heading from '../Typography/Heading'
import { IngredientList } from '../Ingredient/IngredientList'

export interface Props {
  recipe: Recipe
}

const RecipeDetail: React.FC<Props> = ({
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
  return (
    <div>
      <Hero src={image.fields.file.url} alt={title} height={300} />
      <Heading.H1>{title}</Heading.H1>
      <IngredientList ingredients={ingredientList} />
      <ReactMarkdown source={instructions} />
      <p>{instructions}</p>
    </div>
  )
}

export default RecipeDetail
