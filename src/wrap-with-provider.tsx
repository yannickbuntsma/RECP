import * as React from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { Auth0Provider } from 'use-auth0-hooks'
import { Provider } from 'react-redux'
import { createStore } from './state/create-store'

const store = createStore()

const auth0Settings = {
  domain: process.env.GATSBY_AUTH0_DOMAIN,
  clientId: process.env.GATSBY_AUTH0_CLIENT_ID,
  redirectUri: `${process.env.GATSBY_SELF_URL}/callback`,
}

const wrapWithProvider = ({ element }: { element: React.ReactElement }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={store.persistor}>
      <Auth0Provider {...auth0Settings}>{element}</Auth0Provider>
    </PersistGate>
  </Provider>
)

export default wrapWithProvider
