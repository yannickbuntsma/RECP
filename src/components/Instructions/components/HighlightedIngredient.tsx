import React from 'react'
import styled from '@emotion/styled'
import { withTheme } from 'emotion-theming'

import { ThemeProps } from '../../../theme/theme'

export interface Props extends ThemeProps {
  className?: string
}

const HighlightedIngredient: React.FC<Props> = ({ children, className }) => {
  return <Wrapper className={className}>{children}</Wrapper>
}

const Wrapper = styled.span`
  padding: 0.15rem 0.5rem;
  margin: 0 -0.15rem;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 2rem;
  white-space: nowrap;
`

export default withTheme(HighlightedIngredient)
