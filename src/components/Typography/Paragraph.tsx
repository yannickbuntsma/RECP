import * as React from 'react'
import styled from '@emotion/styled'
import { ThemeProviderProps, withTheme } from 'emotion-theming'
import { Theme } from '../../theme/theme'

export interface Props extends ThemeProviderProps<Theme> {
  theme: Theme
}

const Paragraph: React.FC<Props> = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text};
`

export default withTheme(Paragraph)
