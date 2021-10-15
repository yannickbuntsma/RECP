import * as React from 'react'
import styled from '@emotion/styled'
import { withTheme } from '@emotion/react'

const Paragraph: React.FC = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text};
`

export default withTheme(Paragraph)
