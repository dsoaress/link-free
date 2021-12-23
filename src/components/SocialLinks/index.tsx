import { useData } from 'hooks/useData'
import { Link } from 'components/Link'

import { SocialItem, Wrapper } from './styles'
import { Icons } from './icons'

import type { IconType } from 'react-icons/lib'
import type { SocialLinks as SocialLinksType } from 'types/SocialLinks'

export function SocialLinks() {
  const { data } = useData()
  const socialLinks = Object.entries(data.socialLinks)

  return (
    <Wrapper>
      {socialLinks
        .map(([label, href]) => {
          if (!href) return
          const Icon: IconType = Icons[label as SocialLinksType]

          return (
            <SocialItem key={label}>
              <Link
                href={href}
                aria-label={label}
                rel="noopener noreferrer"
                target="_blank"
                color={data.settings.colors.icons}
              >
                <Icon size={22} />
              </Link>
            </SocialItem>
          )
        })
        .filter(Boolean)}
    </Wrapper>
  )
}
