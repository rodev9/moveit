import styled from 'styled-components'

export const Container = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;

  display: grid;
  grid-template-rows: auto 1fr;

  background: linear-gradient(180deg, var(--white) 0%, var(--background) 100%);
  filter: drop-shadow(0px 0px 60px rgba(0, 0, 0, 0.05));

  z-index: 1;

  > svg {
    margin: 2rem;
    cursor: pointer;
  }

  > button {
    margin: 2rem 0;
  }

  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 550px) {
    top: 0;
    left: 0;
    right: 0;
    bottom: initial;

    grid-template-rows: auto;
    grid-template-columns: auto 1fr;

    filter: drop-shadow(0px 0px 60px rgba(0, 0, 0, 0.25));

    nav {
      flex-direction: row;
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

    transition: color .2s;
  }

  :not(:disabled):hover svg, :focus svg {
    color: var(--blue-dark);
  }

  :disabled svg {
    color: var(--blue);
  }

  ::before {
    content: "";

    position: absolute;
    top: calc(50% - 4px);
    left: -4px;

    width: 8px;
    height: 8px;
    border-radius: 16px;
    background-color: var(--blue);

    opacity: 0;

    transition: opacity .2s, height .2s, top .2s;
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

      transition: opacity .2s, width .2s, left .2s;
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
