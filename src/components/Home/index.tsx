import { useData } from '../../hooks/useData'
import { Avatar } from '../Avatar'
import { Button } from '../Button'
import { SocialLinks } from '../SocialLinks'
import { Content, Description, Name, Wrapper } from './styles'

export const Home = () => {
  const { data } = useData()
  const { colors, buttonsSchema, font, name, description } = data.settings

  return (
    <Wrapper color={colors.texts} font={font}>
      <Content>
        <Avatar />
        <Name>{name}</Name>
        <SocialLinks />
        <Description>{description}</Description>
        {data.buttonLinks?.map((link, i) => (
          <Button
            as="a"
            href={link.href}
            rel="noopener noreferrer"
            target="_blank"
            // key={link.id}
            key={i}
            variant={buttonsSchema}
          >
            {link.label}
          </Button>
        ))}
      </Content>
    </Wrapper>
  )
}
