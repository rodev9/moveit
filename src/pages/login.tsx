import React, { useState } from 'react'
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
