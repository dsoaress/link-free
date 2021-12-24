import styled from 'styled-components'

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: fixed;
  inset: 0;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 5rem 1rem 1rem;
  font-family: 'Roboto', sans-serif;
  overflow-y: scroll;
  background: #fff;
`

export const Preview = styled.div`
  position: relative;
  overflow-y: scroll;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
  }
`
