import * as React from 'react'
import styled from '@emotion/styled'

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
    <Menu>
      {items.map((item) => (
        <MenuItem key={item.label}>
          <MenuItemContent href={item.href}>
            <Icon>{item.icon}</Icon>
            <Text>{item.label}</Text>
          </MenuItemContent>
        </MenuItem>
      ))}
    </Menu>
  )
}

export default Floatingmenu

const Menu = styled.ul`
  list-style: none;
  background-color: white;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  bottom: 0;
  display: flex;
  padding: 0 1rem;
  z-index: ${zIndexLevel(1)};
`

const MenuItem = styled.li`
  width: 100%;
`

const MenuItemContent = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${MENU_HEIGHT}px;
  text-decoration: none;
  font-size: 0.875rem;
  color: darkgrey;
`

const Icon = styled.span``

const Text = styled.span`
  display: block;
  margin-left: 0.5rem;
`
