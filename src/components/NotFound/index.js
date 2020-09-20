import React from 'react'
import { Link } from 'gatsby'

import Button from '../Button'
import * as S from './styled'

const NotFound = ({
  title,
  message,
  buttonLabel,
  buttonsFontColor,
  borderRadius,
  buttonsColor,
  fontColor
}) => (
  <S.Wrapper fontColor={fontColor}>
    <S.Title>{title}</S.Title>
    <p>{message}</p>
    <Link to="/">
      <Button
        label={buttonLabel}
        buttonsFontColor={buttonsFontColor}
        borderRadius={borderRadius}
        buttonsColor={buttonsColor}
      />
    </Link>
  </S.Wrapper>
)

export default NotFound
