import * as React from 'react'
import styled from '@emotion/styled'
import { Button as ElementButton } from '../../elements'
import { DefaultPropTypes } from '../../default-prop-types'
import { BORDER_RADIUS } from '../../styling/constants'

export type Props = {
  onClick: (args?: any) => void
} & DefaultPropTypes

export const Button: React.FC<Props> = ({ children, ...rest }) => (
  <StyledButton {...rest}>{children}</StyledButton>
)

export default Button

const StyledButton = styled(ElementButton)`
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: ${BORDER_RADIUS};
`
