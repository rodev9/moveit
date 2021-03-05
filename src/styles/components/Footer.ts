import styled from 'styled-components'

export const Container = styled.footer`
  grid-area: footer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 3rem;
  background: ${props => props.theme.colors.primary};
  color: #fff;

  text-align: center;

  svg {
    color: #fff;
  }
`
