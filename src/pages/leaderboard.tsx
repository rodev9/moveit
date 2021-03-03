import React, { useRef, useState } from 'react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'

import axios from 'axios'

import LevelIcon from '../assets/level.svg'

import { Container, Grid, CardNumber, Card } from '../styles/pages/Leaderboard'

interface Props {
  initialUsers: any[]
}

const Leaderboard: React.FC<Props> = ({ initialUsers }) => {
  const leaderboardRef = useRef<HTMLDivElement>(null)
  const [users, setUsers] = useState(initialUsers)
  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(false)

  async function loadUsers() {
    setLoading(true)

    try {
      const response = await axios.get(`/api/users?page=${page + 1}&limit=10`)

      setPage(page + 1)
      setUsers([ ...users, ...response.data ])
      setLoading(false)
    } catch {}
  }

  function onScroll() {
    if (leaderboardRef.current.scrollHeight - leaderboardRef.current.clientHeight - leaderboardRef.current.scrollTop < 200 && !loading) {
      loadUsers()
    }
  }

  return (
    <Container>
      <Head>
        <title>Leaderborad | Move.it</title>
      </Head>

      <h1>Leaderboard</h1>

      <Grid ref={leaderboardRef} onScroll={onScroll}>
        <span className="header">Posição</span>
        <div className="header">
          <span>Usuário</span>
          <span>Desafios</span>
          <span>Experiência</span>
        </div>

        {users.map((user, i) => (
          <React.Fragment key={user._id}>
            <CardNumber>{i + 1}</CardNumber>
            <Card>
              <main>
                <img src={user.image} alt="" />
                
                <div>
                  <strong>{user.name}</strong>
                  <span><LevelIcon /> Level {user.level}</span>
                </div>
              </main>

              <section>
                <span>{user.challengesCompleted}</span> completados
              </section>

              <section>
                <span>{user.xp}</span> xp
              </section>
            </Card>
          </React.Fragment>
        ))}
      </Grid>
    </Container>
  )
}

export default Leaderboard

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const response = await axios.get(`${process.env.NEXTAUTH_URL}/api/users?page=0&limit=10`)

  return {
    props: {
      initialUsers: response.data
    }
  }
}
