import React from 'react'
import { useCountdown } from '../contexts/CountdownContext'

import styles from '../styles/components/Countdown.module.css'
import { MdPlayArrow, MdCheckCircle } from 'react-icons/md'
import { FiX } from 'react-icons/fi'

const Countdown: React.FC = () => {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    resetCountdown,
    startCountdown
  } = useCountdown()  

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  return (
    <div>
      <div className={styles.container}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>

        <span>:</span>

        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      { hasFinished ? (
        <button
          className={styles.startButton}
          disabled
        >
          Ciclo encerrado <MdCheckCircle style={{ marginLeft: 5, color: 'var(--green)' }} />
        </button>
      ) : isActive ? (
        <button
          type="button"
          className={`${styles.startButton} ${styles.startButtonActive}`}
          onClick={resetCountdown}
        >
          Abandonar ciclo <FiX style={{ marginLeft: 5 }} />
        </button>
      ) : (
        <button
          type="button"
          className={styles.startButton}
          onClick={startCountdown}
        >
          Iniciar um ciclo <MdPlayArrow />
        </button>
      ) }
    </div>
  )
}

export default Countdown