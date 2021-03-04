import React from 'react'
import Head from 'next/head'

import NotFoundIllustration from '../assets/illustrations/404.svg'

import { Container } from '../styles/pages/404'

const NotFound: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Página não encontrada | Move.it</title>
      </Head>

      <NotFoundIllustration />
    </Container>
  )
}

export default NotFound
