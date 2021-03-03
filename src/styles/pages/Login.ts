import styled from 'styled-components'

export const Container = styled.div`
  overflow: hidden;
  background: url('/gradient_logo.svg') left center no-repeat var(--blue);
  background-size: 80vh;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 630px) {
    justify-content: center;
  }
`

export const Form = styled.div`
  padding: 1rem 10rem;
  max-width: 42rem;

  > svg {
    color: var(--white);

    margin-bottom: 5rem;
  }

  h2 {
    color: var(--white);
    margin: 1.5rem 0;
  }

  p {
    color: var(--text-highlight);
    font-size: 1.5rem;

    margin-bottom: 2.5rem;

    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;

    svg {
      margin-right: 1rem;
      font-size: 2.5rem;
    }

    span {
      line-height: 30px;
    }
  }

  select {
    color: inherit;
    font-size: 1em;
    font-weight: bold;

    background: transparent;
    border: 0;

    cursor: pointer;

    option {
      color: var(--text);
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 5rem;

    background: var(--green);
    color: var(--white);
    font-size: 2rem;

    border-radius: 5px;

    border: 0;

    transition: background-color .2s;
  }

  @media (max-width: 630px) {
    padding: 1rem;
  }
`
