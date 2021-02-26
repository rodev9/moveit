import React from 'react'
import { useChallenge } from '../contexts/ChallengesContext'

import styles from '../styles/components/CompletedChallenges.module.css'

const CompletedChallenges: React.FC = () => {
  const { challengesCompleted } = useChallenge()

  return (
    <div className={styles.container}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  )
}

export default CompletedChallenges