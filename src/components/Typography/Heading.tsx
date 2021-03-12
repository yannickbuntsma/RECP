import * as React from 'react'

import { Theme } from '../../theme/theme'

export interface Props {
  theme: Theme
}

// const baseStyles = css`
//   line-height: 1.2;
// `

// const H1: React.FC<Props> = styled.h1`
//   ${baseStyles};
//   color: ${({ theme }) => theme.colors.primary};
//   font-size: 2rem;
// `

// const H2: React.FC<Props> = styled.h2`
//   ${baseStyles};
//   color: ${({ theme }) => theme.colors.primary};
//   font-size: 1.5rem;
// `

// const H3: React.FC<Props> = styled.h3`
//   ${baseStyles};
//   color: ${({ theme }) => theme.colors.primary};
//   font-size: 1.35rem;
// `

// const H4: React.FC<Props> = styled.h4`
//   ${baseStyles};
//   color: ${({ theme }) => theme.colors.primary};
//   font-size: 1.15rem;
// `

// const H5: React.FC<Props> = styled.h4`
//   ${baseStyles};
//   color: ${({ theme }) => theme.colors.primary};
//   font-size: 1rem;
// `

// const H6: React.FC<Props> = styled.h4`
//   ${baseStyles};
//   color: ${({ theme }) => theme.colors.primary};
//   font-size: 0.875rem;
// `
const H1: React.FC = ({children}) => <h1>{children}</h1>
const H2: React.FC = ({children}) => <h2>{children}</h2>
const H3: React.FC = ({children}) => <h3>{children}</h3>
const H4: React.FC = ({children}) => <h4>{children}</h4>
const H5: React.FC = ({children}) => <h5>{children}</h5>
const H6: React.FC = ({children}) => <h6>{children}</h6>

const Heading = {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
}

export default Heading
