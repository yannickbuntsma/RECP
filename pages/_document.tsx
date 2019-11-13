import * as React from 'react'
import Document, { Main, NextScript } from 'next/document'
import { Global } from '@emotion/core'
import { theme } from '../src/theme/theme'

class AppDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700|Oregano&display=swap"
          rel="stylesheet"
        />
        <Global
          styles={`
          html {
            box-sizing: border-box;
            background: ${theme.colors.background}
          }

           *,
           *::before,
           *::after {
             box-sizing: inherit;
             margin: 0;
             padding: 0;
             font-family: sans-serif;
          }`}
        />
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default AppDocument
