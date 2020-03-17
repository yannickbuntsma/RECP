import * as React from 'react'
import { FloatingMenu } from '../src/components'
import { MdHome, MdPersonPin, MdShoppingCart } from 'react-icons/md'
import styled from '@emotion/styled'

export type Props = {}

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
  {
    label: 'Profile',
    href: '/profile',
    icon: <MdPersonPin {...iconProps} />,
  },
]

const Layout: React.FC<Props> = ({ children }) => (
  <Main>
    <Section>{children}</Section>
    <FloatingMenu items={menuItems} />
  </Main>
)

export default Layout

const Main = styled.main`
  min-height: 100vh;
  max-width: 100vw;
`

const Section = styled.section`
  margin-bottom: 64px; // TODO: Fix magic number
`
