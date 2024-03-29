import * as React from 'react'

import styled from '@emotion/styled'
import Link from 'next/link'
import { withTheme } from '@emotion/react'

import { objectToArray } from '../../utils'
import { ThemeProps } from '../../theme/theme'
import { useShoppingList } from '../../hooks/use-shopping-list'

const Basket = require('../../icons/shopping-basket_outline.svg')

export interface Props extends ThemeProps {
  className?: string
  items: Array<{
    label: string
    href: string
  }>
}

export const Header: React.FC<Props> = ({ className, items }) => {
  const { shoppingList } = useShoppingList()

  return (
    <header className={className}>
      <ul>
        {items.map((item) => (
          <li key={item.label}>
            <Link href={item.href}>
              <a href={item.href}>{item.label}</a>
            </Link>
          </li>
        ))}
        <li className="shopping-list-icon">
          <span className="shopping-list-icon__notification">
            {objectToArray(shoppingList).length}
          </span>
          <Basket.default className="icon" />
        </li>
        <div className="bottom-bar" />
      </ul>
    </header>
  )
}

export default withTheme(styled(Header)`
  width: 100%;
  display: flex;
  align-items: center;

  ul {
    list-style: none;
    width: 100%;
    display: flex;
    padding: 0 1rem;
  }

  .bottom-bar {
    height: 4px;
    width: 100%;
  }

  .shopping-list-icon {
    cursor: pointer;
    padding: 0 1rem;
    margin-left: auto;
    display: flex;
    align-items: center;
    position: relative;
    &__notification {
      display: block;
      line-height: 1.5;
      width: 1.5rem;
      text-align: center;
      vertical-align: middle;
      background-color: red;
      color: white;
      border-radius: 50px;
      position: absolute;
      top: 12px;
      right: 6px;
    }

    .icon {
      height: 2rem;
      width: 2rem;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`)
