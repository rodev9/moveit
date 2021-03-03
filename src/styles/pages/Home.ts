import styled from 'styled-components'

export const Container = styled.div`
  max-width: 992px;
  margin: 0 auto;
  padding: 2rem;

  display: flex;
  flex-direction: column;

  section {
    flex: 1;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6.25rem;
    align-content: center;
  }

  @media (max-width: 768px) {
    section {
      gap: 3.25rem;
    }
  }

  @media (max-width: 740px) {
    section {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
    }
  }
`
