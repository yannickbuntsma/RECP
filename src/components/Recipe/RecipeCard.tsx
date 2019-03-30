import React from 'react'
import { Card } from '../Elements'
import styled from '@emotion/styled'
import { Recipe } from '../../types'
import Tag from '../Elements/Tag'

export interface Props {
  recipe: Recipe
}

const RecipeCard: React.FC<Props> = ({
  recipe: {
    title,
    instructions,
    image,
    ingredients,
    preparationTime,
    cookingTime,
    tags,
  },
}) => (
  <Card>
    <StyledRecipe>
      <h1>{title}</h1>
      <img src={image} alt={title} />
      <ul>
        {Array.isArray(ingredients) &&
          ingredients.map((item: string) => <li>{item}</li>)}
      </ul>
      <p>{instructions}</p>
      <p>{preparationTime}</p>
      <p>{cookingTime}</p>
      {tags && (
        <div>
          {tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      )}
    </StyledRecipe>
  </Card>
)

const StyledRecipe = styled.div`
  padding: 2rem;
`

export default RecipeCard
