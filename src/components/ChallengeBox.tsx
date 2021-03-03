import React, { useState } from 'react'
import { useChallenge } from '../contexts/ChallengesContext'
import { useCountdown } from '../contexts/CountdownContext'

import BarLoader from 'react-spinners/BarLoader'

import LevelUpIcon from '../assets/level-up.svg'
import EyeIcon from '../assets/eye.svg'
import BodyIcon from '../assets/body.svg'

import {
  Container,
  NotActive,
  Active,
  FailedButton,
  SucceededButton
} from '../styles/components/ChallengeBox'

const ChallengeBox: React.FC = () => {
  const { challenge, completeChallenge, resetChallenge } = useChallenge()
  const { resetCountdown } = useCountdown()

  const [isLoading, setIsLoading] = useState(false)

  async function handleChallengeSucceeded() {
    setIsLoading(true)

    await completeChallenge()
    resetCountdown()

    setIsLoading(false)
  }

  function handleChallengeFailed() {
    resetChallenge()
    resetCountdown()
  }

  return (
    <Container id="challenge">
      {challenge ? (
        <Active>
          <header>Ganhe {challenge.amount} xp</header>

          <main>
            {challenge.type === 'eye' ? <EyeIcon /> : <BodyIcon />}
            <strong>Novo desafio!</strong>
            <p>{challenge.description}</p>
          </main>

          <footer>
            <BarLoader color="var(--blue)" width="100%" loading={isLoading} />

            <FailedButton
              type="button"
              onClick={handleChallengeFailed}
              disabled={isLoading}
            >
              Falhei :(
            </FailedButton>

            <SucceededButton
              type="button"
              onClick={handleChallengeSucceeded}
              disabled={isLoading}
            >
              Consegui! :D
            </SucceededButton>
          </footer>
        </Active>
      ) : (
        <NotActive>
          <strong>Finalize um ciclo para receber um desafio</strong>

          <p>
            <LevelUpIcon />
            Suba de nível completando desafios.
          </p>
        </NotActive>
      )}
    </Container>
  )
}

export default ChallengeBox
