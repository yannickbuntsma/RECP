import * as React from 'react'
import { FloatingMenu } from '../components'

// const Basket = require('../images/icons/shopping-basket_outline.svg')
// const Cutlery = require('../images/icons/utensils_outline.svg')
// const User = require('../images/icons/user-circle_outline.svg')

export type Props = {}

// const iconProps = {
//   className: 'icon',
//   size: 36,
// }

const menuItems = [
  {
    label: 'Recipes',
    href: '/',
    icon: <span>Icon</span>,
  },
  {
    label: 'Shopping List',
    href: '/shopping-list',
    icon: <span>Icon</span>,
  },
  {
    label: 'Profile',
    href: '/profile',
    icon: <span>Icon</span>,
  },
]

const Layout: React.FC<Props> = ({ children }) => (
  <main>
    <section>{children}</section>
    <FloatingMenu items={menuItems} />
  </main>
)

export default Layout

// const Main = `
//   min-height: 100vh;
//   max-width: 100vw;
// `

// const Section = `
//   margin-bottom: 64px; // TODO: Fix magic number
// `
