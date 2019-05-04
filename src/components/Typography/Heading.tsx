import * as React from '@types/react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { ThemeProviderProps, withTheme } from 'emotion-theming'
import { Theme } from '../../theme/theme'

export interface Props extends ThemeProviderProps<Theme> {
  theme: Theme
}

const baseStyles = css`
  line-height: 1.2;
`

const H1: React.FC<Props> = styled.h1`
  ${baseStyles};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
`

const H2: React.FC<Props> = styled.h2`
  ${baseStyles};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
`

const H3: React.FC<Props> = styled.h3`
  ${baseStyles};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.35rem;
`

const H4: React.FC<Props> = styled.h4`
  ${baseStyles};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.15rem;
`

const H5: React.FC<Props> = styled.h4`
  ${baseStyles};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1rem;
`

const H6: React.FC<Props> = styled.h4`
  ${baseStyles};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.875rem;
`

const Heading = {
  H1: withTheme(H1),
  H2: withTheme(H2),
  H3: withTheme(H3),
  H4: withTheme(H4),
  H5: withTheme(H5),
  H6: withTheme(H6),
}

export default Heading
