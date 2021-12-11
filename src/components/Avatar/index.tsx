import { ImageProps } from 'next/image'

import { Wrapper } from './styles'

type AvatarProps = ImageProps & {
  src?: string
}

export function Avatar({ src, ...rest }: AvatarProps) {
  return !!src ? <Wrapper src={src} width={84} height={84} quality={100} {...rest} /> : null
}
