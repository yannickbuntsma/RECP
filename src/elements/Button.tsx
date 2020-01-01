import * as React from 'react'
import styled from '@emotion/styled'

export interface Props {
  onClick: (args?: any) => void
  background?: string
}

export const Button: React.FC<Props> = ({ children, onClick }) => {
  return (
    <BTN className="button" onClick={onClick}>
      {children}
    </BTN>
  )
}

export default Button

const BTN = styled.button`
  border: 0;
  margin: 0;
  padding: 0;

  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.primary};
`
