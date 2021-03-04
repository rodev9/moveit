import styled from 'styled-components'

export const Container = styled.footer`
  grid-area: footer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 3rem;
  background: var(--blue);
  color: var(--white);

  text-align: center;

  svg {
    color: var(--white);
  }
`
