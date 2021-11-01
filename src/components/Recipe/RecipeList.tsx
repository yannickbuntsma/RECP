import * as React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import slugify from 'slugify'

import { Recipe } from '../../types'
import { DefaultPropTypes } from '../../default-prop-types'

import RecipeCard from './RecipeCard'
import List from '../../elements/List'

export type Props = {
  recipes: Recipe[]
} & DefaultPropTypes

// <Link key={recipe.id} href="/recipe/[id]" as={`recipe/${recipe.id}`}>

const RecipeList: React.FC<Props> = ({ recipes }) => (
  <StyledRecipeList>
    {recipes.map((recipe) => {
      const slug = slugify(recipe.title, { strict: true }).toLowerCase()
      return (
        <Link key={recipe.id} href={`recipe/${slug}`}>
          <StyledRecipeListCard key={recipe.title}>
            <RecipeCard recipe={recipe} />
          </StyledRecipeListCard>
        </Link>
      )
    })}
  </StyledRecipeList>
)

const StyledRecipeListCard = styled.li`
  list-style: none;
  margin: 1rem;
  width: 100%;
`

const StyledRecipeList = styled(List)`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`

export default RecipeList
