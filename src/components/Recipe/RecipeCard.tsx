import * as React from 'react'
import styled from '@emotion/styled'
import { withTheme } from 'emotion-theming'
import { Recipe } from '../../types'

import { Card } from '../Elements'
import Image from '../Elements/Image'
import { ThemeProps } from '../../theme/theme'

export interface Props extends ThemeProps {
  recipe: Recipe
}

const RecipeCard: React.FC<Props> = ({
  recipe: { title, image, preparationTime, cookingTime, tags },
  theme,
}) => (
  <Card>
    {console.log(image)}
    <StyledRecipeCard>
      <h1>{title}</h1>
      {image && <Image src={image.fields.file.url} alt={title} />}
      <p>{preparationTime}</p>
      <p>{cookingTime}</p>
      {tags && (
        <div>
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      )}
    </StyledRecipeCard>
  </Card>
)

const StyledRecipeCard = styled.div`
  position: relative;
  padding: 2rem;
  min-height: 300px;
  overflow: hidden;
  h1 {
    color: ${({ theme }) => theme.colors.primary};
  }
  .image {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.25) 0%,
        rgba(0, 0, 0, 0) 50%
      );
    }
  }
`

export default withTheme(RecipeCard)
