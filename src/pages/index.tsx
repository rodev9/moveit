import React from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/client'

import { User } from 'next-auth'

import { Container } from '../styles/pages/Home'

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
      <Container>
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
      </Container>
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
