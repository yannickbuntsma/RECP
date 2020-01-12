import * as React from 'react'
import styled from '@emotion/styled'
import { DefaultPropTypes } from '../default-prop-types'

export const List: React.FC<DefaultPropTypes> = ({ children, ...rest }) => {
  return <ul {...rest}>{children}</ul>
}

export default styled(List)`
  list-style: none;

  > * {
    list-style: none;
  }
`
