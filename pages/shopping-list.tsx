import * as React from 'react'
import { ShoppingList } from '../src/components/ShoppingList'
import Layout from './_layout'
import Protected from '../src/components/Protected/Protected'

export type Props = {}

const Shopping: React.FC<Props> = () => {
  return (
    <Protected>
      {() => (
        <Layout>
          <ShoppingList />
        </Layout>
      )}
    </Protected>
  )
}

export default Shopping
