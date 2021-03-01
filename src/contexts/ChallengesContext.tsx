import React, { createContext, useContext, useEffect, useState } from 'react'

import axios from 'axios'

import challenges from '../../challenges.json'

import LevelUpModal from '../components/LevelUpModal'

import EyeIcon from '../assets/eye.png'
import BodyIcon from '../assets/body.png'

interface Challenge {
  type: 'body' | 'eye'
  description: string
  amount: number
}

interface ChallengesContextData {
  level: number
  xp: number
  xpToNextLevel: number
  challengesCompleted: number
  challenge: Challenge | null
  startNewChallenge(): void
  completeChallenge(): Promise<void>
  resetChallenge(): void
  closeLevelUpModal(): void
}

const ChallengesContext = createContext({} as ChallengesContextData)

interface ChallengesProviderProps {
  level: number
  xp: number
  challengesCompleted: number
}

export const ChallengesProvider: React.FC<ChallengesProviderProps> = ({
  children,
  ...rest
}) => {
  const [level, setLevel] = useState(rest.level)
  const [xp, setXp] = useState(rest.xp)
  const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted)

  const [challenge, setChallenge] = useState(null)
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false)

  const xpToNextLevel = Math.pow((level + 1) * 4, 2)

  useEffect(() => {
    if (level !== rest.level) setIsLevelUpModalOpen(true)
  }, [level])

  function startNewChallenge() {
    const randomChallenge = challenges[Math.floor(Math.random() * challenges.length)]

    setChallenge(randomChallenge)

    new Audio('/notification.mp3').play()

    if (Notification.permission === 'granted') {
      const notification = new Notification('Novo desafio! 🎉', {
        body: `Ganhe ${randomChallenge.amount} xp`,
        icon: randomChallenge.type === 'eye' ? EyeIcon : BodyIcon,
        silent: true
      })

      notification.onclick = () => {
        window.focus()
        document.getElementById('challenge')?.scrollIntoView()
      }
    }
  }

  async function completeChallenge() {
    if (!challenge) return

    const response = await axios.post('/api/completeChallenge', { challenge })

    setLevel(response.data.level)
    setXp(response.data.xp)
    setChallengesCompleted(response.data.challengesCompleted)

    resetChallenge()
  }

  function resetChallenge() {
    setChallenge(null)

    scroll({ top: 0, behavior: 'smooth' })
  }

  function closeLevelUpModal() {
    setIsLevelUpModalOpen(false)
  }

  return (
    <ChallengesContext.Provider
     value={{
        level,
        xp,
        xpToNextLevel,
        challengesCompleted,
        challenge,
        startNewChallenge,
        completeChallenge,
        resetChallenge,
        closeLevelUpModal
      }}
    >
      {children}

      { isLevelUpModalOpen && <LevelUpModal /> }
    </ChallengesContext.Provider>
  )
}

export const useChallenge = () => useContext(ChallengesContext)
