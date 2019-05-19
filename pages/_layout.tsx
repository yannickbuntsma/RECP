import * as React from 'react'
import { Header, HeaderProps } from '../src/components'

export interface Props {}

const menuItems: HeaderProps['items'] = [
  { label: 'Home', href: '/' },
  { label: 'Shopping List', href: '/shopping-list' },
]

const Layout: React.FC<Props> = ({ children }) => (
  <>
    <Header items={menuItems} />
    <main>{children}</main>
  </>
)

export default Layout
