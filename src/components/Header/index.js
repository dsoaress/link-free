import React from 'react'

import * as S from './styled'

const Header = ({ logo }) => (
  <S.Header>{logo && <S.Image src={logo} />}</S.Header>
)

export default Header
