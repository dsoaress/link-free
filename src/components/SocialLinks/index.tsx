import {
  AiFillGithub as GitHub,
  AiOutlineInstagram as Instagram,
  AiOutlineWhatsApp as WhatsApp
} from 'react-icons/ai'
import { BsEnvelope as Email } from 'react-icons/bs'
import { FaDev as Dev, FaLinkedinIn as LinkedIn } from 'react-icons/fa'

import { useData } from 'hooks/useData'
import { Link } from 'components/Link'

import { SocialItem, Wrapper } from './styles'

import type { IconType } from 'react-icons/lib'

const Icons = {
  Email,
  GitHub,
  LinkedIn,
  Dev,
  Instagram,
  WhatsApp
}

export function SocialLinks() {
  const { data } = useData()

  return (
    <Wrapper>
      {data.socialLinks?.map(({ label, href }, i) => {
        const Icon: IconType = Icons[label as keyof typeof Icons]
        return (
          <SocialItem key={i}>
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
      })}
    </Wrapper>
  )
}
