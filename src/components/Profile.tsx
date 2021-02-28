import React from 'react'
import { useChallenge } from '../contexts/ChallengesContext'

import LevelIcon from '../assets/level.svg'

import styles from '../styles/components/Profile.module.css'

interface Props {
  name: string
  avatar_url: string
}

const Profile: React.FC<Props> = ({ name, avatar_url }) => {
  const { level } = useChallenge()

  return (
    <div className={styles.container}>
      <img src={avatar_url} alt="" />

      <div>
        <strong>{name}</strong>
        <p>
          <LevelIcon />
          Level {level}
        </p>
      </div>
    </div>
  )
}

export default Profile
