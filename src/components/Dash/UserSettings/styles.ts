import styled from 'styled-components'

export const Wrapper = styled.div``

export const Users = styled.div`
  list-style: none;
`

export const UserContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #333;
  font-size: 0.875rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 12px;

  span {
    font-weight: bold;
  }
`

export const UserDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    font-weight: bold;
  }
`

export const UserButtonsGroup = styled.div`
  display: flex;
  gap: 0.5rem;

  svg {
    cursor: pointer;
    width: 1rem;
    height: 1rem;
  }
`
