import * as React from 'react'
import styled from '@emotion/styled'

export interface Props {
  onClick: (args?: any) => void
  background?: string
}

export const Button: React.FC<Props> = ({ children, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  )
}

export default styled(Button)`
  padding: 1rem 2rem;
  background: ${({ background }) => background};
`
