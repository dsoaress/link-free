import { Input } from 'components/Input'
import { Icons } from 'components/SocialLinks/icons'
import { useData } from 'hooks/useData'

import type { SocialLinks } from 'types/SocialLinks'

export function SocialLinksSettings() {
  const { data, setData } = useData()
  const socialLinks = Object.entries(data.socialLinks)

  return (
    <form>
      {socialLinks.map(([label, href]) => {
        const Icon = Icons[label as SocialLinks]

        return (
          <Input
            key={label}
            label={label}
            value={href}
            icon={Icon}
            onChange={e => {
              setData({
                ...data,
                socialLinks: {
                  // @ts-ignore
                  ...data.socialLinks,
                  [label]: e.target.value
                }
              })
            }}
          />
        )
      })}
    </form>
  )
}
