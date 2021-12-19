import { useData } from 'hooks/useData'

import { Wrapper } from './styles'

export function Avatar() {
  const { data } = useData()
  const { avatar } = data.settings

  return !!avatar ? <Wrapper src={avatar} width={84} height={84} quality={100} /> : null
}
