import React from 'react'

import { ThemeProps } from '../../../theme/theme'

export interface Props  {
  className?: string
}

const HighlightedIngredient: React.FC<Props> = ({ children, className }) => {
  return <span className={className}>{children}</span>
}

// const Wrapper = styled.span`
//   padding: 0.15rem 0.5rem;
//   margin: 0 -0.15rem;
//   background: ${({ theme }) => theme.colors.primary};
//   border-radius: 2rem;
// `

export default HighlightedIngredient
