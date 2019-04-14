import * as React from 'react'
import App, { Container } from 'next/app'
import { ThemeProvider } from 'emotion-theming'
import { Provider } from 'react-redux'

import { theme } from '../src/theme/theme'
import createStore from '../src/state/create-store'

const store = createStore()

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
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
          <Container>
            <Component {...pageProps} />
          </Container>
        </Provider>
      </ThemeProvider>
    )
  }
}
