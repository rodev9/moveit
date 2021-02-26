import { useChallenge } from '../contexts/ChallengesContext'

import styles from '../styles/components/ExperienceBar.module.css'

const ExperienceBar: React.FC = () => {
  const { xp, xpToNextLevel } = useChallenge()

  const levelPercent = (xp * 100) / xpToNextLevel

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${levelPercent}%` }} />

        <span className={styles.currentXp} style={{ left: `${levelPercent}%` }}>
          {xp} xp
        </span>
      </div>
      <span>{xpToNextLevel} xp</span>
    </header>
  )
}

export default ExperienceBar