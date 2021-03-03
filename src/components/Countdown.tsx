import { useCountdown } from '../contexts/CountdownContext'

import { Container, Button } from '../styles/components/Countdown'
import { MdPlayArrow, MdCheckCircle } from 'react-icons/md'
import { FiX } from 'react-icons/fi'

const Countdown: React.FC = () => {
  const {
    defaultTime,
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
      <Container>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>

        <span>:</span>

        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </Container>

      {hasFinished ? (
        <Button disabled>
          Ciclo encerrado{' '}
          <MdCheckCircle style={{ marginLeft: 5, color: 'var(--green)' }} />
        </Button>
      ) : isActive ? (
        <Button type="button" active={defaultTime} onClick={resetCountdown}>
          Abandonar ciclo <FiX style={{ marginLeft: 5 }} />
        </Button>
      ) : (
        <Button type="button" onClick={startCountdown}>
          Iniciar um ciclo <MdPlayArrow />
        </Button>
      )}
    </div>
  )
}

export default Countdown
