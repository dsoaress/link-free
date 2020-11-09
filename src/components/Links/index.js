import React from 'react'

import Button from '../Button'
import * as S from './styled'

const Links = ({ links, buttonsFontColor, borderRadius, buttonsColor }) => (
  <S.Wrapper>
    {links.map((link, i) => (
      <S.Item>
        <S.Link
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          key={i}
        >
          <Button
            borderRadius={borderRadius}
            buttonsFontColor={buttonsFontColor}
            buttonsColor={buttonsColor}
            label={link.label}
          />
        </S.Link>
      </S.Item>
    ))}
  </S.Wrapper>
)

export default Links
