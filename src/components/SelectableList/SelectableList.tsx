import * as React from 'react'
// import {
//   SelectableListItemType,
//   useSelectableList,
// } from '../../hooks/useSelectableList'
// import SelectableListItem from '../../elements/SelectableListItem'
// import { IoMdClose } from 'react-icons/io'
//
// export interface Item extends SelectableListItemType {
//   [key: string]: any
// }
//
// export type Props = {
//   items: Item[]
//   initialSelected?: Item[]
//   onChange?: (stateItems: Item[]) => void
// }
//
// // @ts-ignore
const SelectableList: React.FC = () => (<p>SelectableList</p>)
// const SelectableList: React.FC<Props> = ({ items, initialSelected = [], onChange }) => {
//   const [stateItems, setStateItems] = React.useState(items)
//   // const [
//   //   selected,
//   //   setSelected,
//   //   toggleItem,
//   //   isSelected,
//   //   addItem,
//   //   removeItem,
//   // ] = useSelectableList(stateItems, initialSelected)
//
//   const handleDelete = (item: Item) => {
//     const filteredItems = stateItems.filter((i) => i.value !== item.value)
//     setStateItems(filteredItems)
//     onChange && onChange(filteredItems)
//   }
//
//   return stateItems.map((item) => (
//     <SelectableListItem
//       key={item.value}
//       value={item.value}
//       isSelected={isSelected(item)}
//       onChange={() => toggleItem(item)}
//     >
//       {item.label}
//       <button onClick={() => handleDelete(item)}>
//         <IoMdClose className="icon" />
//       </button>
//     </SelectableListItem>
//   ))
// }
//
export default SelectableList
