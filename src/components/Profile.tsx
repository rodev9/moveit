import React from 'react'
import { useChallenge } from '../contexts/ChallengesContext'

import LevelIcon from '../assets/level.svg'

import styles from '../styles/components/Profile.module.css'

const Profile: React.FC = () => {
  const { level } = useChallenge()

  return (
    <div className={styles.container}>
      <img src="https://github.com/romilodev.png" alt="Romilo" />

      <div>
        <strong>Romilo</strong>
        <p>
          <LevelIcon />
          Level {level}
        </p>
      </div>
    </div>
  )
}

export default Profile
