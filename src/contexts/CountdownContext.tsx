import React, { createContext, useContext, useEffect, useState } from 'react'
import { useChallenge } from './ChallengesContext'

interface CountdownContextData {
  minutes: number
  seconds: number
  hasFinished: boolean
  isActive: boolean
  startCountdown(): void
  resetCountdown(): void
}

const CountdownContext = createContext({} as CountdownContextData)

const defaultTime = process.env.NODE_ENV === 'development' ? 3 : 25 * 60
let countdownTimeout: NodeJS.Timeout

export const CountdownProvider: React.FC = ({ children }) => {
  const { startNewChallenge } = useChallenge()

  const [time, setTime] = useState(defaultTime)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true)
      setIsActive(false)
      startNewChallenge()
    }
  }, [isActive, time])

  function startCountdown() {
    setIsActive(true)

    Notification.requestPermission()
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout)
    setIsActive(false)
    setHasFinished(false)
    setTime(defaultTime)
  }
  
  return (
    <CountdownContext.Provider value={{
      minutes,
      seconds,
      hasFinished,
      isActive,
      startCountdown,
      resetCountdown
    }}>
      {children}
    </CountdownContext.Provider>
  )
}

export const useCountdown = () => useContext(CountdownContext)
