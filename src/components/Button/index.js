import React from 'react'

import * as S from './styled'

const Button = ({ buttonsFontColor, borderRadius, buttonsColor, label }) => (
  <S.Button
    buttonsFontColor={buttonsFontColor}
    borderRadius={borderRadius}
    buttonsColor={buttonsColor}
  >
    {label}
  </S.Button>
)

export default Button
