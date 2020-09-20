import React, { useState, useEffect } from 'react'
import CMS from 'netlify-cms-app'
import { StyleSheetManager } from 'styled-components'

import { Control as ColorControl } from './colorpicker'
import IndexPageTemplate from './templates/IndexPageTemplate'
import NotFoundPageTemplate from './templates/NotFoundPageTemplate'

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

CMS.registerWidget('color', ColorControl)
CMS.registerPreviewTemplate(
  'index',
  withStyledComponentsRendered(IndexPageTemplate)
)
CMS.registerPreviewTemplate(
  'notFound',
  withStyledComponentsRendered(NotFoundPageTemplate)
)
