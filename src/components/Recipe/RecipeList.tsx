import * as React from 'react'
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
        <StyledRecipeListCard key={recipe.title}>
          <RecipeCard recipe={recipe} />
        </StyledRecipeListCard>
      ))}
    </StyledRecipeList>
  </List>
)

const StyledRecipeList = styled.div`
  display: flex;
`

const StyledRecipeListCard = styled.div`
  flex: 0 0 30%;
  margin: 1rem;
`

export default RecipeList
