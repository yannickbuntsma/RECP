import * as React from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'
import Link from 'next/link'
import { withTheme } from 'emotion-theming'
import { MdShoppingCart } from 'react-icons/md'

import { lightenDarkenColor, objectToArray } from '../../utils'
import { AppState } from '../../state/reducer'
import {
  GetShoppingList,
  getShoppingList,
} from '../../state/shopping-list/selectors'

export interface StateProps {
  shoppingList: GetShoppingList
}

export interface Props extends StateProps {
  className?: string
  items: Array<{
    label: string
    href: string
  }>
}

const Header: React.FC<Props> = ({ className, items, shoppingList }) => (
  <header className={className}>
    <ul>
      {items.map((item) => (
        <li key={item.label}>
          <Link href={item.href}>
            <a>{item.label}</a>
          </Link>
        </li>
      ))}
      <li className="shopping-list-icon">
        <span className="shopping-list-icon__notification">
          {objectToArray(shoppingList.items).length}
        </span>
        <MdShoppingCart className="icon" />
      </li>
    </ul>
  </header>
)

const mapStateToProps = (state: AppState) => ({
  shoppingList: getShoppingList(state),
})

export default connect(
  mapStateToProps,
  null
)(
  withTheme(styled(Header)`
    width: 100%;
    background: ${({ theme }) => theme.colors.background};
    display: flex;
    align-items: center;

    ul {
      list-style: none;
      width: 100%;
      display: flex;
      padding: 0 1rem;
    }

    a {
      display: block;
      padding: 2rem 1rem;
      text-decoration: none;
      font-weight: 700;
      font-size: 1.15rem;
      color: ${({ theme }) => theme.colors.primary};

      &:after {
        content: '';
        display: block;
        height: 3px;
        width: 0;
        margin: 0 auto;
        position: relative;
        top: 6px;
        transition: width 150ms ease-in-out;
        background-color: ${({ theme }) => theme.colors.primary};
      }

      &:hover {
        color: ${({ theme }) => lightenDarkenColor(theme.colors.primary, -50)};

        &:after {
          background-color: ${({ theme }) =>
            lightenDarkenColor(theme.colors.primary, -50)};
          width: 100%;
        }
      }
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
)
