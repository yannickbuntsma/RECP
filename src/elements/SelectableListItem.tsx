import * as React from 'react'


import Checkbox from './Checkbox'

// TODO: What's this?
type TValue = any

export type Props = {
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
      <div>{children}</div>
    </label>
  </li>
)

// const LI = styled.li`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 1rem;

//   & + & {
//     border-top: 1px solid #eeeeee;
//   }
// `

// const Label = styled.label`
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   width: 100%;
// `

// const Content = styled.div`
//   width: 100%;
// `

export default SelectableListItem
