import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: var(--blue-dark2);
  color: var(--white);
  text-align: center;

  height: 100vh;
  padding: 2rem;

  p {
    font-size: 1.5rem;

    button {
      display: block;
      margin: 0.8rem auto auto;

      border: 0;
      color: inherit;
      background: var(--blue);
      border-radius: 5px;
      padding: 1rem;
    }
  }

  > button {
    border: 0;
    background: 0;

    font-size: 3rem;
    color: inherit;

    position: absolute;
    top: 0;
    bottom: 0;

    :nth-child(1) {
      left: 0;
    }

    :nth-child(2) {
      right: 0;
    }

    :disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`
