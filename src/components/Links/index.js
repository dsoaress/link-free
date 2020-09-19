import React from 'react'

import * as S from './styled'

const Links = ({ links, fontColor, borderRadius, buttonsColor }) => (
  <S.Wrapper>
    {links.map((link, i) => (
      <S.Link fontColor={fontColor} href={link.url} key={i}>
        <S.List borderRadius={borderRadius} buttonsColor={buttonsColor}>
          {link.label}
        </S.List>
      </S.Link>
    ))}
  </S.Wrapper>
)

export default Links
