import * as React from 'react'
import styled from '@emotion/styled'

export const List: React.FC = ({ children }) => {
  return <ul>{children}</ul>
}

export default styled(List)`
  list-style: none;
`
