import * as React from 'react'
import App, { AppContext } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from '@emotion/react'
import { Auth0Provider } from 'use-auth0-hooks'

import { theme } from '../src/theme/theme'

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
      <>
        <Head>
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
          />
          <title>RECP</title>
        </Head>
        <ThemeProvider theme={theme}>
          <Auth0Provider {...auth0Settings}>
            <Component {...pageProps} />
          </Auth0Provider>
        </ThemeProvider>
      </>
    )
  }
}
