import React from 'react'
import { useChallenge } from '../contexts/ChallengesContext'

import { Container } from '../styles/components/CompletedChallenges'

const CompletedChallenges: React.FC = () => {
  const { challengesCompleted } = useChallenge()

  return (
    <Container>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </Container>
  )
}

export default CompletedChallenges