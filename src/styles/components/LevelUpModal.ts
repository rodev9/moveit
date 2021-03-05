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
  background: ${props => props.theme.colors.white};
  width: 100%;
  max-width: 400px;
  padding-top: 2rem;
  border-radius: 5px;
  box-shadow: 0 0 60 rgba(0, 0, 0, 0.05);
  text-align: center;
  position: relative;

  header,
  strong,
  p {
    margin: 0 3rem;
  }

  header {
    font-size: 8.75rem;
    font-weight: 600;
    color: ${props => props.theme.colors.primary};
    background: url('/levelup.svg') no-repeat center;
    background-size: contain;
  }

  strong {
    font-size: 2.25rem;
    color: ${props => props.theme.colors.title};
  }

  p {
    font-size: 1.25rem;
    margin-top: 0.25rem;
    margin-bottom: 2rem;
  }
`

export const CloseButton = styled.button`
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
`

export const ShareButton = styled.button`
  width: 100%;
  padding: 1.75rem;

  font-size: 1.25rem;

  border: 0;
  border-top: 1px solid ${props => props.theme.colors.grayLine};
  border-radius: 0 0 5px 5px;
  background: #f5fcff;
  color: ${props => props.theme.colors.twitter};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.2s, color 0.2s;

  :hover {
    background: ${props => props.theme.colors.twitter};
    color: ${props => props.theme.colors.white};
  }

  svg {
    margin-left: 0.75rem;
  }
`
