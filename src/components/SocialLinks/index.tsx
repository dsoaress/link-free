import {
  AiFillGithub as GitHub,
  AiOutlineInstagram as Instagram,
  AiOutlineWhatsApp as WhatsApp
} from 'react-icons/ai'
import { BsEnvelope as Email } from 'react-icons/bs'
import { FaDev as Dev, FaLinkedinIn as LinkedIn } from 'react-icons/fa'
import { IconType } from 'react-icons/lib'

import { useData } from '../../contexts/DataContext'
import { Link } from '../Link'
import { SocialItem, Wrapper } from './styles'

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
      {data.socialLinks?.map(({ label, href }) => {
        const Icon: IconType = Icons[label as keyof typeof Icons]
        return (
          <SocialItem key={href}>
            <Link
              href={href}
              aria-label={label}
              rel="noopener noreferrer"
              target="_blank"
              // @ts-ignore
              color={data.settings.colors.socialLinks}
            >
              <Icon size={22} />
            </Link>
          </SocialItem>
        )
      })}
    </Wrapper>
  )
}
