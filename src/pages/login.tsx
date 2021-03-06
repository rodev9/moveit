import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { signIn } from 'next-auth/client'

import LogoFull from '../assets/logo-full.svg'

import { Container, Form } from '../styles/pages/Login'
import { ImGithub, ImArrowRight2 } from 'react-icons/im'
import { SiDiscord, SiGitlab } from 'react-icons/si'

const Login: React.FC = () => {
  const { query } = useRouter()
  const [provider, setProvider] = useState('github')
  const [isOnline, setIsOnline] = useState(true)

  useEffect(() => {
    function updateIsOnline() {
      setIsOnline(navigator.onLine)
    }

    updateIsOnline()

    window.addEventListener('online', updateIsOnline)
    window.addEventListener('offline', updateIsOnline)
  }, [])

  return (
    <Container>
      <Head>
        <title>Login | Move.it</title>
      </Head>

      <Form>
        <LogoFull />

        <h2>Bem-vindo</h2>

        <p>
          {provider === 'github' ? (
            <ImGithub />
          ) : provider === 'discord' ? (
            <SiDiscord />
          ) : (
            provider === 'gitlab' && <SiGitlab />
          )}
          <span>
            Faça login com seu
            <select
              value={provider}
              onChange={e => setProvider(e.target.value)}
            >
              <option value="github">Github</option>
              <option value="discord">Discord</option>
              <option value="gitlab">GitLab</option>
            </select>
            para começar
          </span>
        </p>

        <button
          disabled={!isOnline}
          onClick={() =>
            signIn(provider, {
              callbackUrl: query.callbackUrl?.toString() || '/'
            })
          }
        >
          <ImArrowRight2 />
        </button>
      </Form>
    </Container>
  )
}

export default Login
