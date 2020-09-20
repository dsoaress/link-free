import React from 'react'

import Button from '../Button'
import * as S from './styled'

const Links = ({ links, buttonsFontColor, borderRadius, buttonsColor }) => (
  <S.Wrapper>
    {links.map((link, i) => (
      <S.Item>
        <S.Link buttonsFontColor={buttonsFontColor} href={link.url} key={i}>
          <Button
            borderRadius={borderRadius}
            buttonsColor={buttonsColor}
            label={link.label}
          />
        </S.Link>
      </S.Item>
    ))}
  </S.Wrapper>
)

export default Links
