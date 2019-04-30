import * as React from 'react'
import styled from '@emotion/styled'

export interface Props {
  onClick: () => void
  backgroundColor: string
}

export const Button: React.FC<Props> = ({ children }) => (
  <button className="button">{children}</button>
)

export default styled(Button)`
  padding: 1rem 2rem;
  // TODO: Check and fix background from theme
  background: ${({ backgroundColor }) => backgroundColor};
`
