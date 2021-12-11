import {
  AiFillGithub as GitHub,
  AiOutlineInstagram as Instagram,
  AiOutlineWhatsApp as WhatsApp
} from 'react-icons/ai'
import { BsEnvelope as Email } from 'react-icons/bs'
import { FaDev as Dev, FaLinkedinIn as LinkedIn } from 'react-icons/fa'
import { IconType } from 'react-icons/lib'

import { Link } from '../Link'
import { LinkVariantProps } from '../Link/styles'
import { SocialItem, Wrapper } from './styles'

type SocialLink = {
  label: string
  href: string
}

type SocialLinksProps = LinkVariantProps & {
  socialLinks: SocialLink[]
}

const Icons = {
  Email,
  GitHub,
  LinkedIn,
  Dev,
  Instagram,
  WhatsApp
}

export function SocialLinks({ socialLinks, color }: SocialLinksProps) {
  return (
    <Wrapper>
      {socialLinks.map(({ label, href }) => {
        const Icon: IconType = Icons[label as keyof typeof Icons]
        return (
          <SocialItem key={href}>
            <Link
              href={href}
              aria-label={label}
              rel="noopener noreferrer"
              target="_blank"
              // @ts-ignore
              color={color}
            >
              <Icon size={22} />
            </Link>
          </SocialItem>
        )
      })}
    </Wrapper>
  )
}
