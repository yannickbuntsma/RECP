import * as React from 'react'

import { DefaultPropTypes } from '../default-prop-types'

export const List: React.FC<DefaultPropTypes> = ({ children, ...rest }) => {
  return <ul {...rest}>{children}</ul>
}

export default List
// `
//   list-style: none;

//   > * {
//     list-style: none;
//   }
// `
