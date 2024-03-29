import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;

  background: ${props => props.theme.colors.white};
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  overflow: hidden;
`

export const NotActive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1.5rem 2rem;

  strong {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
  }

  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.4;
    max-width: 70%;
    margin-top: 3rem;

    svg {
      margin-bottom: 1rem;
    }
  }
`

export const Active = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;

  header,
  main {
    padding: 1.5rem 2rem;
  }

  header {
    color: ${props => props.theme.colors.primary};
    font-weight: 600;
    font-size: 1.25rem;
    border-bottom: 1px solid ${props => props.theme.colors.grayLine};
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    strong {
      font-size: 2rem;
      font-weight: 600;
      color: ${props => props.theme.colors.title};
      margin: 1.5rem 0 1rem;
    }

    p {
      line-height: 1.5;
    }
  }

  footer {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;

    border-top: 1px solid ${props => props.theme.colors.grayLine};

    > span {
      position: absolute;
      top: -2.5px;
    }

    @media (max-width: 710px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
    }
  }
`

const ButtonBase = styled.button`
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;

  font-size: 1rem;
  font-weight: 600;

  transition: background-color 0.2s, color 0.2s;

  :hover {
    color: ${props => props.theme.colors.white};
  }
`

export const FailedButton = styled(ButtonBase)`
  background: #fff5f5;
  color: ${props => props.theme.colors.red};

  border-right: 1px solid ${props => props.theme.colors.grayLine};

  :hover {
    background: ${props => props.theme.colors.red};
  }

  @media (max-width: 710px) {
    border-right: 0;
    border-bottom: 1px solid ${props => props.theme.colors.grayLine};
  }
`

export const SucceededButton = styled(ButtonBase)`
  background: #f7fff5;
  color: ${props => props.theme.colors.green};

  :hover {
    background: ${props => props.theme.colors.green};
  }
`
