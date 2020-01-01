import * as React from 'react'
import { useTheme } from '../../theme/theme'
import styled from '@emotion/styled'

type MenuItem = {
  label: string
  href: string
  icon?: any
}

export interface Props {
  items: MenuItem[]
}

const Floatingmenu: React.FC<Props> = ({ items }) => {
  const theme = useTheme()
  return (
    <Menu>
      {items.map((item) => (
        <MenuItem key={item.label} title={item.label}>
          <a href={item.href}>{item.icon}</a>
        </MenuItem>
      ))}
    </Menu>
  )
}

export default Floatingmenu

const Menu = styled.ul`
  list-style: none;
  background-color: mistyrose;
  position: fixed;
  bottom: 50px;
  display: flex;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 500px;
  padding: 0 1rem;
`

const MenuItem = styled.li`
  padding: 1rem;
`
