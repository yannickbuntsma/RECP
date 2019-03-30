import styled from '@emotion/styled'

export interface Props {
  onClick: () => void
  background: string
}

const Button = styled.button<Props>`
  padding: 1rem 2rem;
  background: ${({ background }) => background};
`

export default Button
