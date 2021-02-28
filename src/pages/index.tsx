import React from 'react'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/client'
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
  name: string
  avatar_url: string
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
              <Profile name={props.name} avatar_url={props.avatar_url} />
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
  const session = await getSession(context)

  if (session) return {
    props: {
      level: Number(level),
      xp: Number(xp),
      challengesCompleted: Number(challengesCompleted),
      name: session.user.name,
      avatar_url: session.user.image 
    }
  }
  else return {
    redirect: {
      destination: '/login',
      permanent: false
    }
  }
}
