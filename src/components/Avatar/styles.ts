import Image from 'next/image'

import { styled } from '../../styles/stitches.config'

export const Wrapper = styled(Image, {
  borderRadius: '9999px',
  objectFit: 'cover',
  width: '84px',
  height: '84px'
})
