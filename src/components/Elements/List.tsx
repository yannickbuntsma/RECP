import * as React from 'react'
import styled from '@emotion/styled'

const List: React.FC = ({ children }) => {
  return <UL>{children}</UL>
}

const UL = styled.ul`
  list-style: none;
`

export default List
