import * as React from 'react'
import { Header } from '../src/components'

export interface Props {}

const menuItems: any = [
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
