import styled, { css, keyframes } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Rajdhani';
  font-weight: 600;
  color: ${props => props.theme.colors.title};

  > div {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background: ${props => props.theme.colors.white};
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
      padding: 0.2rem;
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

const TimeAnimation = keyframes`
  from {
    width: 0;
  }

  to {
    width: 100%;
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

  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};

  font-size: 1.25rem;
  font-weight: 600;

  transition: background-color 0.2s, color 0.2s, border 0.2s;

  &:not(:disabled):hover {
    background: ${props => props.theme.colors.primaryDark};
  }

  ${props =>
    props.active &&
    css<typeof props>`
      position: relative;

      background: ${props => props.theme.colors.white};
      color: ${props => props.theme.colors.title};

      border-bottom: 4px solid ${props => props.theme.colors.grayLine};

      ::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: -4px;

        height: 4px;
        background: ${props => props.theme.colors.green};

        border-radius: 5px;
        border-top-left-radius: 0;

        animation: ${TimeAnimation} ${props => props.active}s linear forwards;
      }

      :not(:disabled):hover {
        background: ${props => props.theme.colors.red};
        color: ${props => props.theme.colors.white};

        border-bottom: 4px solid transparent;
      }
    `}

  :disabled {
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.text};
    border-bottom: 4px solid ${props => props.theme.colors.green};

    cursor: not-allowed;
  }
`
