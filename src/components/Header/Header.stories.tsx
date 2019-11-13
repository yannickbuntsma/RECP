import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Header, Props } from './Header'

const items: Props['items'] = [
  { label: 'Some item', href: '#' },
  { label: 'Some other item', href: '#' },
  { label: 'The lastitem', href: '#' },
]

const shoppingList = {
  items: {},
}

storiesOf('Header', module).add('default', () => (
  <Header items={items} shoppingList={shoppingList} />
))
