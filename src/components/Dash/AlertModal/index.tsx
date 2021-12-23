import { useI18n } from 'hooks/useI18n'

import { Button } from '../Button'
import { Modal } from '../Modal'

type AlertModalProps = {
  title: string
  description: string
  isOpen: boolean
  callback: () => void
  onClose: () => void
}

export function AlertModal({ title, description, callback, isOpen, onClose }: AlertModalProps) {
  const { t } = useI18n()

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      title={title}
      description={description}
      footer={
        <>
          <Button outlined onClick={onClose}>
            {t.common.cancel}
          </Button>
          <Button danger onClick={callback}>
            {t.common.delete}
          </Button>
        </>
      }
    />
  )
}
