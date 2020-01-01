import * as React from 'react'
import styled from '@emotion/styled'
import { IoMdClose } from 'react-icons/io'

import Checkbox from './Checkbox'

// TODO: What's this?
type TValue = any

export interface Props {
  isSelected: boolean
  value: TValue
  onChange: (value: TValue) => void
  className?: string
}

const SelectableListItem: React.FC<Props> = ({
  isSelected,
  value,
  children,
  onChange,
  className,
}) => (
  <LI key={value} className={className}>
    <Label>
      <Checkbox
        size="L"
        checked={isSelected}
        onChange={() => onChange(value)}
      />
      <Content>{children}</Content>
    </Label>
  </LI>
)

const LI = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  & + & {
    border-top: 1px solid #eeeeee;
  }
`

const Label = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 100%;
`

const Content = styled.div`
  width: 100%;
`

export default SelectableListItem
//button {
//  cursor: pointer;
//}
//
//.icon {
//  width: 32px;
//  height: 32px;
//}
