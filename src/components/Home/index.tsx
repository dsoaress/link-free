import { fonts } from 'constants/fonts'
import { useData } from 'hooks/useData'
import { Button } from 'components/Button'
import { Avatar } from 'components/Avatar'
import { SocialLinks } from 'components/SocialLinks'

import { Content, Description, Name, Wrapper } from './styles'

export const Home = () => {
  const { data } = useData()
  const { colors, buttonBorderRadius, font, name, description } = data.settings

  return (
    <Wrapper color={colors.texts} font={fonts[font].name}>
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
            size="large"
            fullWidth
          >
            {link.label}
          </Button>
        ))}
      </Content>
    </Wrapper>
  )
}
