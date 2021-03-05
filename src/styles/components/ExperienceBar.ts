import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;

  margin-bottom: 2rem;

  span {
    font-size: 1rem;
    text-align: center;
  }

  > div {
    flex: 1;
    height: 4px;
    border-radius: 4px;
    background: ${props => props.theme.colors.grayLine};
    margin: 0 1.5rem;
    position: relative;

    > div {
      height: 4px;
      border-radius: 4px;
      background: ${props => props.theme.colors.green};

      transition: width 0.4s;
    }
  }
`

export const CurrentXp = styled.span`
  position: absolute;
  top: 12px;
  transform: translateX(-50%);

  transition: left 0.4s;
`
