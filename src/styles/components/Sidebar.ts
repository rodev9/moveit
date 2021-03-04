import styled from 'styled-components'

export const Container = styled.aside`
  position: sticky;
  top: 0;
  height: 100vh;

  display: grid;
  grid-template-rows: auto 1fr auto;

  background: linear-gradient(180deg, var(--white) 0%, var(--background) 100%);
  filter: drop-shadow(0px 0px 60px rgba(0, 0, 0, 0.05));

  z-index: 1;

  > a {
    margin: 2rem;
    cursor: pointer;
  }

  > button {
    margin: 1rem 0;
    height: calc(42px + 2rem);
  }

  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 550px) {
    right: 0;
    height: auto;

    grid-template-rows: auto;
    grid-template-columns: auto 1fr auto;

    filter: drop-shadow(0px 0px 60px rgba(0, 0, 0, 0.25));

    nav {
      flex-direction: row;
    }

    > button {
      margin: 0 1rem;
      height: 100%;
      width: calc(48px + 2rem);
    }
  }
`

export const Button = styled.button`
  position: relative;

  padding: 1rem 0;

  border: 0;
  background: 0;
  font-size: 0;

  :focus {
    outline: 0;
  }

  svg {
    font-size: 2rem;
    color: var(--text);

    transition: color 0.2s;
  }

  :not(:disabled):hover svg,
  :focus svg {
    color: var(--blue-dark);
  }

  :disabled svg {
    color: var(--blue);
  }

  ::before {
    content: '';

    position: absolute;
    top: calc(50% - 4px);
    left: -4px;

    width: 8px;
    height: 8px;
    border-radius: 16px;
    background-color: var(--blue);

    opacity: 0;

    transition: opacity 0.2s, height 0.2s, top 0.2s;
  }

  :not(:disabled)::before {
    background-color: var(--blue-dark);
  }

  :not(:disabled):not(:focus):hover::before {
    opacity: 1;

    height: 50%;
    top: 25%;
  }

  :disabled::before {
    opacity: 1;

    height: 100%;
    top: 0;
  }

  :focus::before {
    opacity: 1;

    height: 80%;
    top: 10%;
  }

  @media (max-width: 550px) {
    padding: 0 1rem;
    margin: 0 auto;

    ::before {
      top: -4px;
      left: calc(50% - 4px);

      transition: opacity 0.2s, width 0.2s, left 0.2s;
    }

    :not(:disabled):not(:focus):hover::before {
      width: 50%;
      height: 8px;

      top: -4px;
      left: 25%;
    }

    :disabled::before {
      width: 100%;
      height: 8px;

      top: -4px;
      left: 0;
    }

    :focus::before {
      width: 80%;
      height: 8px;

      top: -4px;
      left: 10%;
    }
  }
`
