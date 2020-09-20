import React from 'react'

import * as data from '../../settings/siteMetadata.json'
import * as S from './styled'

const Footer = ({ fontColor }) => (
  <S.Wrapper fontColor={fontColor}>
    <p>
      {new Date().getFullYear()} © {data.title}
    </p>
  </S.Wrapper>
)

export default Footer
