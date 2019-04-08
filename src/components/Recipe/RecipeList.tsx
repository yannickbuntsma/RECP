import React from 'react'
import styled from '@emotion/styled'
import { Recipe } from '../../types'
import RecipeCard from './RecipeCard'
import List from '../Elements/List'

export interface Props {
  recipes: Recipe[]
}

const RecipeList: React.FC<Props> = ({ recipes }) => (
  <List>
    <StyledRecipeList>
      {recipes.map((recipe) => (
        <RecipeCard recipe={recipe} />
      ))}
    </StyledRecipeList>
  </List>
)

const StyledRecipeList = styled.div``

export default RecipeList
