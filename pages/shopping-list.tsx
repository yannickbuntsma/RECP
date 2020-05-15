import * as React from 'react'
import { ShoppingList } from '../src/components/ShoppingList'
import Layout from './_layout'

export type Props = {}

const Shopping: React.FC<Props> = () => {
  return (
    <Layout>
      <ShoppingList />
    </Layout>
  )
}

export default Shopping
