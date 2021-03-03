import { useChallenge } from '../contexts/ChallengesContext'

import { Container, CurrentXp } from '../styles/components/ExperienceBar'

const ExperienceBar: React.FC = () => {
  const { xp, xpToNextLevel } = useChallenge()

  const levelPercent = (xp * 100) / xpToNextLevel

  return (
    <Container>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${levelPercent}%` }} />

        <CurrentXp style={{ left: `${levelPercent}%` }}>{xp} xp</CurrentXp>
      </div>
      <span>{xpToNextLevel} xp</span>
    </Container>
  )
}

export default ExperienceBar
