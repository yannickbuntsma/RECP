import * as React from 'react'
import App, { AppContext } from 'next/app'
import { ThemeProvider } from 'emotion-theming'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Auth0Provider } from 'use-auth0-hooks'

import { theme } from '../src/theme/theme'
import { createStore } from '../src/state/create-store'

const store = createStore()

const auth0Settings = {
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_CLIENT_ID,
  redirectUri: `${process.env.SELF_URL}/callback`,
}

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={store.persistor}>
            <Auth0Provider {...auth0Settings}>
              <Component {...pageProps} />
            </Auth0Provider>
          </PersistGate>
        </Provider>
      </ThemeProvider>
    )
  }
}
