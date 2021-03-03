import { useChallenge } from '../contexts/ChallengesContext'

import LevelIcon from '../assets/level.svg'

import { Container } from '../styles/components/Profile'

interface Props {
  name: string
  avatar_url: string
}

const Profile: React.FC<Props> = ({ name, avatar_url }) => {
  const { level } = useChallenge()

  return (
    <Container>
      <img src={avatar_url} alt="" />

      <div>
        <strong>{name}</strong>
        <p>
          <LevelIcon />
          Level {level}
        </p>
      </div>
    </Container>
  )
}

export default Profile
