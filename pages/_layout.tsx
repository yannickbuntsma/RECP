/* eslint-disable react/jsx-pascal-case */
import * as React from 'react'
import styled from '@emotion/styled'
import { FloatingMenu } from '../src/components'

const Basket = require('../src/icons/shopping-basket_outline.svg')
const Cutlery = require('../src/icons/utensils_outline.svg')
const User = require('../src/icons/user-circle_outline.svg')

export type Props = {}

const iconProps = {
  className: 'icon',
  size: 36,
}

const menuItems = [
  {
    label: 'Recipes',
    href: '/',
    icon: <Cutlery.default {...iconProps} />,
  },
  {
    label: 'Shopping List',
    href: '/shopping-list',
    icon: <Basket.default {...iconProps} />,
  },
  {
    label: 'Profile',
    href: '/profile',
    icon: <User.default {...iconProps} />,
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
