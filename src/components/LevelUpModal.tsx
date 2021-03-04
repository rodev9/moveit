import { useEffect, useState } from 'react'
import { useChallenge } from '../contexts/ChallengesContext'

import {
  Overlay,
  Container,
  CloseButton,
  ShareButton
} from '../styles/components/LevelUpModal'
import { FiX } from 'react-icons/fi'
import { SiTwitter } from 'react-icons/si'

const LevelUpModal: React.FC = () => {
  const { level, xp, challengesCompleted, closeLevelUpModal } = useChallenge()
  const [shareUrl, setShareUrl] = useState('https://twitter.com/intent/tweet')

  useEffect(() => {
    const url = new URL(shareUrl)

    url.searchParams.set(
      'text',
      `Subi para o nível ${level} no Move It desenvolvido pelo @romilo903!\n\n${xp} xp\n${challengesCompleted} desafios completados\n\n`
    )
    url.searchParams.set('hashtags', 'moveit')
    url.searchParams.set('url', 'https://moveit.romilo.vercel.app')
    url.searchParams.set(
      'related',
      'romilo903,Esta versão do Move It foi desenvolvida por Romilo'
    )

    setShareUrl(url.href)
  }, [])

  function handleShare() {
    window.open(shareUrl)
  }

  return (
    <Overlay>
      <Container>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Alcançaste um novo nível!</p>

        <CloseButton aria-label="Fechar" onClick={closeLevelUpModal}>
          <FiX />
        </CloseButton>

        <ShareButton onClick={handleShare}>
          Compartilhar no Twitter <SiTwitter />
        </ShareButton>
      </Container>
    </Overlay>
  )
}

export default LevelUpModal
