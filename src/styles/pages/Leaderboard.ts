import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  padding: 2.5rem 2rem 1rem;
  margin: 0 11rem;

  h1 {
    color: ${props => props.theme.colors.title};
    margin-bottom: 2.5rem;
  }

  @media (max-width: 1237px) {
    margin: 0 5rem;
  }

  @media (max-width: 986px) {
    margin: 0;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;

  gap: 8px 4px;

  max-height: calc(100% - 5rem);
  overflow-y: auto;

  .header {
    position: sticky;
    top: 0;
    background: ${props => props.theme.colors.background};

    color: rgba(102, 102, 102, 0.5);
    font-size: 0.87rem;
    font-weight: 700;
    text-transform: uppercase;

    padding-bottom: 1rem;
  }

  div.header {
    display: grid;
    grid-template-columns: 1fr 13.6rem 9.6rem;

    padding-left: 1.5rem;

    @media (max-width: 830px) {
      :not(:first-child) {
        display: none;
      }
    }
  }

  @media (max-width: 835px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;

    span.header,
    div.header {
      display: none;
    }
  }
`

export const CardNumber = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 4.6rem;
  border-radius: 50% 0 0 50%;

  font-size: 1.5rem;
  font-weight: 500;

  background: ${props => props.theme.colors.white};

  @media (max-width: 835px) {
    width: 100%;
    height: 3rem;

    border-radius: 50% 50% 0 0;
  }
`

export const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 13.6rem 9.6rem;

  padding: 1rem 1.5rem;
  border-radius: 0 5px 5px 0;

  background: ${props => props.theme.colors.white};

  main {
    display: flex;
    align-items: center;

    img {
      height: 4rem;
      border-radius: 50%;

      margin-right: 1rem;
    }

    div {
      display: flex;
      flex-direction: column;
    }

    strong {
      color: ${props => props.theme.colors.title};
      font-size: 1.25rem;
    }

    span {
      line-height: 1.8rem;
    }
  }

  section {
    display: flex;
    align-items: center;

    padding: 0 1.8rem;

    text-align: center;

    span {
      color: ${props => props.theme.colors.primary};

      margin-right: 0.3rem;
    }

    ::before {
      font-size: 0.87rem;
      color: rgba(102, 102, 102, 0.5);

      font-weight: 700;
      text-transform: uppercase;

      margin-right: auto;
    }
  }

  @media (max-width: 830px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);

    section {
      padding-left: 5rem;
    }

    section:nth-child(2)::before {
      content: 'Desafios';
    }

    section:nth-child(3)::before {
      content: 'Experiência';
    }
  }

  @media (max-width: 835px) {
    border-radius: 0 0 50px 50px;
  }

  @media (max-width: 425px) {
    section {
      flex-direction: column;
      padding: 0;
    }

    section::before {
      margin: 1rem 0 0.5rem;
    }
  }
`
