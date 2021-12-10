import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

import { getCssText } from '../styles/stitches.config'

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
