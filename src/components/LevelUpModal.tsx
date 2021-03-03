import { useChallenge } from '../contexts/ChallengesContext'

import { Overlay, Container } from '../styles/components/LevelUpModal'
import { FiX } from 'react-icons/fi'

const LevelUpModal: React.FC = () => {
  const { level, closeLevelUpModal } = useChallenge()

  return (
    <Overlay>
      <Container>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button onClick={closeLevelUpModal}>
          <FiX />
        </button>
      </Container>
    </Overlay>
  )
}

export default LevelUpModal