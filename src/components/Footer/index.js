import React from 'react'

import * as data from '../../../content/siteMetadata.json'
import * as S from './styled'

const Footer = ({ footerFontColor }) => (
  <S.Wrapper footerFontColor={footerFontColor}>
    <p>
      {new Date().getFullYear()} © {data.title}
    </p>
  </S.Wrapper>
)

export default Footer
