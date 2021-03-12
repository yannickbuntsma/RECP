import * as React from 'react'

import { DefaultPropTypes } from '../default-prop-types'

export type Props = {
  onClick: (args?: any) => void
} & DefaultPropTypes

export const Button: React.FC<Props> = ({ children, onClick, ...rest }) => (
  <button onClick={onClick} {...rest}>
    {children}
  </button>
)

export default Button

// const StyledButton = styled.button`
//   margin: 0;
//   background: none;
//   border: 0;
//   color: inherit;
//   font: inherit;
//   line-height: normal;
//   overflow: visible;
//   padding: 0;
//   cursor: pointer;
// `
