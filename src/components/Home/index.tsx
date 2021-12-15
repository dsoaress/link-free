import Head from 'next/head'

import { useData } from '../../hooks/useData'
import { theme } from '../../styles/stitches.config'
import { Avatar } from '../Avatar'
import { Button } from '../Button'
import { SocialLinks } from '../SocialLinks'
import { Content, Description, Name, Wrapper } from './styles'

export const Home = () => {
  const { data } = useData()
  const { colors, buttonsSchema, outline, font, name, description } = data.settings

  return (
    <Wrapper
      css={{
        color: theme.colors[colors.texts],
        fontFamily: theme.fonts[font]
      }}
    >
      <Head>
        <style
          dangerouslySetInnerHTML={{
            __html: `body { background: ${theme.colors[colors.background]} }`
          }}
        />
      </Head>
      <Content>
        <Avatar />
        <Name>{name}</Name>
        <SocialLinks />
        <Description>{description}</Description>
        {data.buttonLinks?.map(link => (
          <Button
            colorSchema={colors.buttonLinks}
            styleSchema={buttonsSchema}
            outline={outline}
            font={font}
            key={link.href}
          >
            {link.label}
          </Button>
        ))}
      </Content>
    </Wrapper>
  )
}
