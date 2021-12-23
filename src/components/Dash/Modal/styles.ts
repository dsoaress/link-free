import styled from 'styled-components'
import { FiX } from 'react-icons/fi'

export const ModalStyle = styled.div`
  position: fixed;
  width: 460px;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
  outline: none;
`

export const OverlayStyle = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10 !important;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid #ccc;
`

export const Title = styled.h2``

export const CloseButton = styled(FiX)`
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
`

export const ButtonsGroup = styled.div`
  display: flex;
  gap: 1rem;
  align-self: flex-end;
  margin-top: 1rem;
`
