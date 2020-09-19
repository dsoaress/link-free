import React, { useState, useEffect } from 'react'
import CMS from 'netlify-cms-app'
import Preview from './preview'
import { StyleSheetManager } from 'styled-components'

function StyleInjector({ children }) {
  const [iframeRef, setIframeRef] = useState(null)

  useEffect(() => {
    const iframe = document.getElementsByTagName('iframe')[0]
    const iframeHeadElem = iframe.contentDocument.head
    setIframeRef(iframeHeadElem)
  }, [])

  return (
    iframeRef && (
      <StyleSheetManager target={iframeRef}>{children}</StyleSheetManager>
    )
  )
}

export default function withStyledComponentsRendered(Comp) {
  return props => (
    <StyleInjector>
      <Comp {...props} />
    </StyleInjector>
  )
}

CMS.registerPreviewTemplate('content', withStyledComponentsRendered(Preview))
