import * as React from 'react'
import { FloatingMenu } from '../src/components'
import { MdHome, MdShoppingCart } from 'react-icons/md'
import styled from '@emotion/styled'

export interface Props {}

const iconProps = {
  className: 'icon',
  size: 36,
}

const menuItems = [
  {
    label: 'Home',
    href: '/',
    icon: <MdHome {...iconProps} />,
  },
  {
    label: 'Shopping List',
    href: '/shopping-list',
    icon: <MdShoppingCart {...iconProps} />,
  },
]

const Layout: React.FC<Props> = ({ children }) => (
  <Main>
    <FloatingMenu items={menuItems} />
    {children}
  </Main>
)

export default Layout

const Main = styled.main`
  min-height: 100vh;
  max-width: 100vw;
`
