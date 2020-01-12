import * as React from 'react'
import styled from '@emotion/styled'
import { withTheme } from 'emotion-theming'

import { Recipe } from '../../types'
import { ThemeProps } from '../../theme/theme'

import { Card, Image } from '../../elements'
import { Heading } from '../Typography'
import RecipeCardDetails from './RecipeCardDetails'
import { BORDER_RADIUS } from '../../styling/constants'

export interface Props extends ThemeProps {
  recipe: Recipe
}

const RecipeCard: React.FC<Props> = ({
  recipe: { title, image, preparationTime, cookingTime, tags },
}) => (
  <Card>
    <StyledRecipeCard>
      <Heading.H2>{title}</Heading.H2>
      {image && <Image src={image.fields.file.url} alt={title} />}
      <RecipeCardDetails>
        <InfoItem>Voorbereiding: {preparationTime} min</InfoItem>
        <InfoItem>Kooktijd: {cookingTime} min</InfoItem>
      </RecipeCardDetails>
    </StyledRecipeCard>
  </Card>
)

const InfoItem = styled.p`
  color: ${({ theme }) => theme.colors.inverseText};
`

const StyledRecipeCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  min-height: 300px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 10px 12px -8px rgba(0, 0, 0, 0.25);
  border-radius: ${BORDER_RADIUS};

  h2 {
    font-family: 'Oregano', cursive;
    color: ${({ theme }) => theme.colors.primary};
  }

  &:hover .image {
    transform: scale(1.02);
    &::after {
      opacity: 0.8;
    }
  }
  .image {
    transition: transform 250ms ease-in-out;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;

    &::after {
      transition: opacity 250ms ease-in-out;
      content: '';
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.25) 15%,
        rgba(0, 0, 0, 0) 100%
      );
    }
  }
`

export default withTheme(RecipeCard)
