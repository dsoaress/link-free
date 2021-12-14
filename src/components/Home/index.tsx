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
        background: theme.colors[colors.background as keyof typeof theme.colors],
        color: theme.colors[colors.texts as keyof typeof theme.colors],
        fontFamily: theme.fonts[font as keyof typeof theme.fonts]
      }}
    >
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
