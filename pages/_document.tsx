import * as React from 'react'
import Document, { Main, NextScript } from 'next/document'
import { Global } from '@emotion/core'

class AppDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Global
          styles={`
          html {
            box-sizing: border-box;
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
