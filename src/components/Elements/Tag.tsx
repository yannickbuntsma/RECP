import * as React from 'react'
import styled from '@emotion/styled'

export interface Props {
  label: string
  icon?: React.ReactElement
  onClick?: () => void
  onRemove?: () => void
}

const Tag: React.FC<Props> = ({ label, icon }) => (
  <StyledTag>
    {icon}
    <span>{label}</span>
  </StyledTag>
)

const StyledTag = styled.span`
  display: inline-block;
  position: relative;
  background-color: #cecece;
  padding: 0.5rem 1rem;
  margin-left: 24px;
  color: #eeeeee;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  &::before {
    content: '';
    display: block;
    position: absolute;
    left: -24px;
    top: 0;
    right: 0;
    bottom: 0;
    width: 24px;
    background-color: #cecece;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 4px;
    right: 0;
    bottom: 4px;
    width: 1px;
    background-color: #eeeeee;
  }
`

export default Tag
