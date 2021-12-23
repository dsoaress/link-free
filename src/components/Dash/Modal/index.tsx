import ReactModal from 'react-modal'

import { ButtonsGroup, CloseButton, Header, ModalStyle, OverlayStyle, Title } from './styles'

import type { ReactNode } from 'react'

type ModalProps = {
  isOpen: boolean
  onRequestClose: () => void
  title: string
  description?: string
  children?: ReactNode
  footer?: ReactNode
}

export function Modal({
  children,
  description,
  footer,
  isOpen,
  onRequestClose,
  title
}: ModalProps) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="_"
      overlayClassName="_"
      contentElement={(props, children) => <ModalStyle {...props}>{children}</ModalStyle>}
      overlayElement={(props, contentElement) => (
        <OverlayStyle {...props}>{contentElement}</OverlayStyle>
      )}
    >
      <Header>
        <Title>{title}</Title>
        <CloseButton aria-label="Close modal" onClick={onRequestClose} />
      </Header>

      <p>{description}</p>

      {children}

      {!!footer && <ButtonsGroup>{footer}</ButtonsGroup>}
    </ReactModal>
  )
}
