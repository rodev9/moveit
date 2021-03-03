import styled, { css, keyframes } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Rajdhani';
  font-weight: 600;
  color: var(--title);

  > div {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background: var(--white);
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;

    padding: 1rem;

    span {
      flex: 1;

      &:first-child {
        border-right: 1px solid #f0f1f3;
      }

      &:last-child {
        border-left: 1px solid #f0f1f3;
      }
    }

    @media (max-width: 330px) {
      padding: .2rem;
    }

    @media (max-width: 420px) {
      font-size: 6rem;
    }
  }

  > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;

    @media (max-width: 420px) {
      font-size: 3rem;
    }
  }
`

export const Button = styled.button<{ active?: number }>`
  width: 100%;
  height: 5rem;

  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  background: var(--blue);
  color: var(--white);

  font-size: 1.25rem;
  font-weight: 600;

  transition: background-color .2s, color .2s, border .2s;

  &:not(:disabled):hover {
    background: var(--blue-dark);
  }

  ${props => props.active && css<typeof props>`
    position: relative;
    
    background: var(--white);
    color: var(--title);

    border-bottom: 4px solid var(--gray-line);

    ::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: -4px;

      height: 4px;
      background: var(--green);

      border-radius: 5px;
      border-top-left-radius: 0;

      animation: ${TimeAnimation} ${props => props.active}s linear;
    }

    :not(:disabled):hover {
      background: var(--red);
      color: var(--white);

      border-bottom: 4px solid transparent;
    }
  `}

  :disabled {
    background: var(--white);
    color: var(--text);
    border-bottom: 4px solid var(--green);

    cursor: not-allowed;
  }
`

const TimeAnimation = keyframes`
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
`
