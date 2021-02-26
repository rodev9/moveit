import React from 'react'
import { useChallenge } from '../contexts/ChallengesContext'

import styles from '../styles/components/LevelUpModal.module.css'
import { FiX } from 'react-icons/fi'

const LevelUpModal: React.FC = () => {
  const { level, closeLevelUpModal } = useChallenge()

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button onClick={closeLevelUpModal}>
          <FiX />
        </button>
      </div>
    </div>
  )
}

export default LevelUpModal