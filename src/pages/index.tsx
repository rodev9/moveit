import React from 'react'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/client'
import Head from 'next/head'

import { User } from 'next-auth'

import styles from '../styles/pages/Home.module.css'

import { ChallengesProvider } from '../contexts/ChallengesContext'
import { CountdownProvider } from '../contexts/CountdownContext'

import ExperienceBar from '../components/ExperienceBar'
import Profile from '../components/Profile'
import CompletedChallenges from '../components/CompletedChallenges'
import Countdown from '../components/Countdown'
import ChallengeBox from '../components/ChallengeBox'

const Home: React.FC<User> = (props) => {
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
              <Profile name={props.name} avatar_url={props.image} />
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

export const getServerSideProps: GetServerSideProps<User> = async (context) => {
  const session = await getSession(context)

  if (session) return {
    props: session.user
  }
  else return {
    redirect: {
      destination: '/login',
      permanent: false
    }
  }
}
