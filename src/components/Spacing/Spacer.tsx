import * as React from 'react'
import styled from '@emotion/styled'

export type Props = {
  size: 'quarter' | 'half' | 'single' | 'double'
}

const unit = 16

const getSpacing = (size: Props['size']) => {
  switch (size) {
    case 'quarter':
      return unit * 0.25
    case 'half':
      return unit * 0.5
    case 'double':
      return unit * 2
    default:
      return unit
  }
}

const Spacer: React.FC<Props> = styled.div`
  margin-bottom: ${({ size }) => `${getSpacing(size)} px`};
`

export default Spacer
