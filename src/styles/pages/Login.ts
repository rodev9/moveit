import styled from 'styled-components'

export const Container = styled.div`
  overflow: hidden;
  background: url('/gradient_logo.svg') left center no-repeat
    ${props => props.theme.colors.primary};
  background-size: 80vh;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  min-height: 100vh;

  @media (max-width: 630px) {
    justify-content: center;
  }
`

export const Form = styled.div`
  padding: 1rem 10rem;
  max-width: 42rem;

  > svg {
    color: #fff;

    margin-bottom: 5rem;
  }

  h2 {
    color: #fff;
    margin: 1.5rem 0;
  }

  p {
    color: ${props => props.theme.colors.textHighlight};
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
      color: #000;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 5rem;

    background: ${props => props.theme.colors.green};
    color: #fff;
    font-size: 2rem;

    border-radius: 5px;

    border: 0;

    :disabled {
      cursor: not-allowed;
      background: ${props => props.theme.colors.red};
    }
  }

  @media (max-width: 630px) {
    padding: 1rem;
  }
`
