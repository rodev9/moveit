import React, { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'

import Work from '../assets/illustrations/work.svg'
import Time from '../assets/illustrations/time_management.svg'
import Training from '../assets/illustrations/online_training.svg'

import { Container } from '../styles/pages/Welcome'

const Welcome: React.FC = () => {
  const { query } = useRouter()
  const [page, setPage] = useState(0)

  const pages = [
    {
      img: <Work />,
      text:
        'Nos dias de hoje, estamos cada vez mais tempo à frente de ecrãs. O problema é que ficarmos muito tempo sentados e com os olhos fixos num só lugar não é nada bom para a nossa saúde.'
    },
    {
      img: <Time />,
      text:
        'Por isso o Move.it usa a técnica de Pomodoro. Ao iniciar um ciclo, 25 minutos seram contados.'
    },
    {
      img: <Training />,
      text: (
        <>
          No fim desse tempo receberá uma notificação, lembrando-o de se
          alongar. Se clicar na notificação ou entrar no site, irá aparecer um
          exercício simples. Se o fizer, receberá uma quantidade de xp variável
          de acordo com cada desafio.
          <Link href={query.callbackUrl?.toString() || '/'} replace>
            <button>Começar!</button>
          </Link>
        </>
      )
    }
  ]

  return (
    <Container>
      <Head>
        <title>Bem-vindo ao Move.it!</title>
      </Head>

      <button disabled={page < 1} onClick={() => setPage(page - 1)}>
        {'<'}
      </button>

      <button
        disabled={page + 1 >= pages.length}
        onClick={() => setPage(page + 1)}
      >
        {'>'}
      </button>

      <h1>Bem-vindo ao Move.it!</h1>

      {pages[page].img}

      <p>{pages[page].text}</p>
    </Container>
  )
}

export default Welcome
