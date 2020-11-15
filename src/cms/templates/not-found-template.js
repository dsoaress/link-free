import React from 'react'

import { NotFoundPageTemplate } from '../../templates/not-found-template'

const IndexPage = ({ entry }) => {
  return (
    <NotFoundPageTemplate
      title={entry.getIn(['data', 'title'])}
      message={entry.getIn(['data', 'message'])}
      buttonLabel={entry.getIn(['data', 'buttonLabel'])}
    />
  )
}

export default IndexPage
