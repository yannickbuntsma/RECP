import React from 'react'
import styled from '@emotion/styled'

const Card: React.FC = ({ children }) => <StyledCard>{children}</StyledCard>

const StyledCard = styled.div`
  border-radius: 12px;
  box-shadow: 0 4px 30px -4px rgba(0, 0, 0, 0.1);
  will-change: transform;
  transition-property: transform, box-shadow;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  cursor: pointer;
  &:hover {
    box-shadow: 0 4px 50px -4px rgba(0, 0, 0, 0.08);
  }
`

export default Card
