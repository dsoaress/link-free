import { useData } from '../../hooks/useData'
import { Avatar } from '../Avatar'
import { Button } from '../Button'
import { SocialLinks } from '../SocialLinks'
import { Content, Description, Name, Wrapper } from './styles'

export const Home = () => {
  const { data } = useData()
  const { colors, buttonBorderRadius, font, name, description } = data.settings

  return (
    <Wrapper color={colors.texts} font={font}>
      <Content>
        <Avatar />
        <Name>{name}</Name>
        <SocialLinks />
        <Description>{description}</Description>
        {data.buttonLinks?.map(link => (
          <Button
            as="a"
            key={link.id}
            href={link.href}
            labelColor={colors.buttonLabelColor}
            backgroundColor={colors.buttonBackgroundColor}
            borderColor={colors.buttonBorderColor}
            borderRadius={buttonBorderRadius}
            rel="noopener noreferrer"
            target="_blank"
          >
            {link.label}
          </Button>
        ))}
      </Content>
    </Wrapper>
  )
}
