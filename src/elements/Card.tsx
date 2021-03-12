import * as React from 'react'

import { DefaultPropTypes } from '../default-prop-types'
import { BORDER_RADIUS } from '../styling/constants'

export type Props = {} & DefaultPropTypes

const Card: React.FC = ({ children, ...rest }) => (
  <div {...rest}>{children}</div>
)

export default Card
// `
//   border-radius: ${BORDER_RADIUS};
//   box-shadow: 0 4px 30px -4px rgba(0, 0, 0, 0.1);
//   will-change: transform;
//   transition-property: transform, box-shadow;
//   transition-duration: 300ms;
//   transition-timing-function: ease-in-out;
//   cursor: pointer;
//   &:hover {
//     box-shadow: 0 4px 50px -4px rgba(0, 0, 0, 0.08);
//   }
// `
