import * as React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'

import { Recipe } from '../../types'
import RecipeCard from './RecipeCard'
import List from '../../elements/List'

export interface Props {
  recipes: Recipe[]
}

// <Link key={recipe.id} href="/recipe/[id]" as={`recipe/${recipe.id}`}>

const RecipeList: React.FC<Props> = ({ recipes }) => (
  <StyledRecipeList>
    {recipes.map((recipe) => (
      <Link key={recipe.id} href={`recipe/${recipe.id}`}>
        <StyledRecipeListCard key={recipe.title}>
          <RecipeCard recipe={recipe} />
        </StyledRecipeListCard>
      </Link>
    ))}
  </StyledRecipeList>
)

const StyledRecipeListCard = styled.li`
  list-style: none;
  margin: 1rem;

  //@media (min-width: 768px) {
  //  flex: 0 0 30%;
  //}
`

const StyledRecipeList = styled(List)`
  display: flex;
  flex-wrap: wrap;
`

export default RecipeList
