import * as React from 'react'
import Router from 'next/router'
import { withAuth } from 'use-auth0-hooks'

import LoadingScreen from '../src/components/LoadingScreen/LoadingScreen'

export interface Props {}

const Callback: React.FC<Props> = () => {
  React.useEffect(() => {
    Router.push('/profile')
  }, [])
  return <LoadingScreen />
}

// @ts-ignore
export default withAuth(Callback)
