import styled from 'styled-components'

export const Overlay = styled.div`
  background: rgba(242, 243, 245, 0.8);
  backdrop-filter: blur(3px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 2;
`

export const Container = styled.div`
  background: var(--white);
  width: 100%;
  max-width: 400px;
  padding: 2rem 3rem;
  border-radius: 5px;
  box-shadow: 0 0 60 rgba(0, 0, 0, 0.05);
  text-align: center;
  position: relative;

  header {
    font-size: 8.75rem;
    font-weight: 600;
    color: var(--blue);
    background: url('/levelup.svg') no-repeat center;
    background-size: contain;
  }

  strong {
    font-size: 2.25rem;
    color: var(--title);
  }

  p {
    font-size: 1.25rem;
    margin-top: 0.25rem;
  }

  button {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;

    padding: 0.6rem;

    background: 0;
    border: 0;

    font-size: 0;

    svg {
      font-size: 1rem;
    }
  }
`
