import React, { useEffect, useState } from 'react'
import { useChallenge } from '../contexts/ChallengesContext'
import { useCountdown } from '../contexts/CountdownContext'

import { useTheme } from 'styled-components'

import BarLoader from 'react-spinners/BarLoader'

import LevelUpIcon from '../assets/level-up.svg'
import EyeIcon from '../assets/eye.svg'
import BodyIcon from '../assets/body.svg'

import {
  Container,
  NotActive,
  Active,
  FailedButton,
  SucceededButton,
  Error
} from '../styles/components/ChallengeBox'
import { RiSignalWifiOffFill } from 'react-icons/ri'

const ChallengeBox: React.FC = () => {
  const { colors } = useTheme()
  const { challenge, completeChallenge, resetChallenge } = useChallenge()
  const { resetCountdown } = useCountdown()

  const [isLoading, setIsLoading] = useState(false)
  const [isOnline, setIsOnline] = useState(true)

  useEffect(() => {
    function updateIsOnline() {
      setIsOnline(navigator.onLine)
    }

    updateIsOnline()

    window.addEventListener('online', updateIsOnline)
    window.addEventListener('offline', updateIsOnline)
  }, [])

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
      {!isOnline && (
        <Error>
          <h2>
            <RiSignalWifiOffFill /> Sem conexão com a internet!
          </h2>
          <p>O progresso não será salvo!</p>
        </Error>
      )}

      {challenge ? (
        <Active>
          <header>Ganhe {challenge.amount} xp</header>

          <main>
            {challenge.type === 'eye' ? <EyeIcon /> : <BodyIcon />}
            <strong>Novo desafio!</strong>
            <p>{challenge.description}</p>
          </main>

          <footer>
            <BarLoader
              color={colors.primary}
              width="100%"
              loading={isLoading}
            />

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
