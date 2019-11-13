import * as React from 'react'
import styled from '@emotion/styled'

const Paragraph: React.FC = ({ children }) => <p>{children}</p>

export default styled(Paragraph)`
  background: ${({ theme }) => theme.colors.text}
  color: ${({ theme }) => theme.colors.text}
`
