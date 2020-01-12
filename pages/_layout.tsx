import * as React from 'react'
import { FloatingMenu } from '../src/components'
import { MdHome, MdShoppingCart } from 'react-icons/md'
import styled from '@emotion/styled'
import { MENU_HEIGHT } from '../src/styling/constants'

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
  margin-bottom: ${MENU_HEIGHT}px;
`
