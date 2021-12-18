import styled from 'styled-components'

type Props = {
  color?: string
  font?: string
}

export const Wrapper = styled.main.attrs((props: Props) => ({
  color: props.color || '#e11d48',
  font: props.font || 'inherit'
}))<Props>`
  color: ${({ color }) => color};
  font-family: ${({ font }) => font};
  width: 100%;
  height: 100vh;
  transition: all 0.25s ease;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 0 auto;
  max-width: 640px;
  padding: 2rem 1rem;
`

export const Name = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  margin: 0;
`

export const Description = styled.p`
  font-size: 1rem;
  text-align: center;
  font-weight: 400;
  line-height: 1.5;
`
