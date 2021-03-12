import * as React from 'react'


import { zIndexLevel } from '../../styling/utils/z-index-level'
import { MENU_HEIGHT } from '../../styling/constants'

type MenuItem = {
  label: string
  href: string
  icon?: any
}

export type Props = {
  items: MenuItem[]
}

const Floatingmenu: React.FC<Props> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.label}>
          <a href={item.href}>
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Floatingmenu

// const Menu = styled.ul`
//   list-style: none;
//   background-color: white;
//   box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
//   position: fixed;
//   width: 100%;
//   bottom: 0;
//   display: flex;
//   padding: 0 1rem;
//   z-index: ${zIndexLevel(1)};
// `

// const MenuItem = styled.li`
//   width: 100%;
// `

// const MenuItemContent = styled.a`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: ${MENU_HEIGHT}px;
//   text-decoration: none;
//   font-size: 0.875rem;
//   color: darkgrey;
// `

// const Icon = styled.span``

// const Text = styled.span`
//   display: block;
//   margin-left: 0.5rem;
// `
