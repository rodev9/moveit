import React, { useState } from 'react'
import { useChallenge } from '../contexts/ChallengesContext'
import { useCountdown } from '../contexts/CountdownContext'

import BarLoader from 'react-spinners/BarLoader'

import LevelUpIcon from '../assets/level-up.svg'
import EyeIcon from '../assets/eye.svg'
import BodyIcon from '../assets/body.svg'

import styles from '../styles/components/ChallengeBox.module.css'

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
    <div className={styles.container} id="challenge">
      { challenge ? (
        <div className={styles.active}>
          <header>Ganhe {challenge.amount} xp</header>

          <main>
            {challenge.type === 'eye' ? <EyeIcon /> : <BodyIcon />}
            <strong>Novo desafio!</strong>
            <p>{challenge.description}</p>
          </main>

          <footer>
              <BarLoader
                color="var(--blue)"
                width="100%"
                loading={isLoading}
              />
              
              <button
                type="button"
                className={styles.failedButton}
                onClick={handleChallengeFailed}
                disabled={isLoading}
              >
                Falhei :(
              </button>

              <button
                type="button"
                className={styles.succeededButton}
                onClick={handleChallengeSucceeded}
                disabled={isLoading}
              >
                Consegui! :D
              </button>
          </footer>
        </div>
      ) : (
        <div className={styles.notActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>

          <p>
            <LevelUpIcon />
            Suba de nível completando desafios.
          </p>
        </div>
      ) }
    </div>
  )
}

export default ChallengeBox
