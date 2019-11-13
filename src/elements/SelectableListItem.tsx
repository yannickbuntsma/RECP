import * as React from 'react'
import styled from '@emotion/styled'
import { IoMdClose } from 'react-icons/io'

import Checkbox from './Checkbox'

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
  <li key={value} className={className}>
    <label>
      <Checkbox
        size="L"
        checked={isSelected}
        onChange={() => onChange(value)}
      />
      <span>{children}</span>
    </label>
  </li>
)

export default styled(SelectableListItem)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  & + & {
    border-top: 1px solid #EEEEEE;
  }

  label {
    cursor: pointer;
    display: flex;
    align-items: center;
    width: 100%;
  }

  button {
    cursor: pointer;
  }

  .icon {
    width: 32px;
    height: 32px;
  }
`
