import React from 'react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'

import styles from '../styles/pages/Home.module.css'

import { ChallengesProvider } from '../contexts/ChallengesContext'
import { CountdownProvider } from '../contexts/CountdownContext'

import ExperienceBar from '../components/ExperienceBar'
import Profile from '../components/Profile'
import CompletedChallenges from '../components/CompletedChallenges'
import Countdown from '../components/Countdown'
import ChallengeBox from '../components/ChallengeBox'

interface Props {
  level: number
  xp: number
  challengesCompleted: number
}

const Home: React.FC<Props> = (props) => {
  return (
    <ChallengesProvider
      level={props.level}
      xp={props.xp}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Move.it</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>

            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const { level, xp, challengesCompleted } = context.req.cookies

  return {
    props: {
      level: Number(level),
      xp: Number(xp),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}
