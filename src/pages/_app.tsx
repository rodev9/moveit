import { useEffect } from 'react'
import { useRouter } from 'next/router'

import Sidebar from '../components/Sidebar'

import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const nextDiv = document.getElementById('__next')

    if (router.pathname === '/login') nextDiv.style.margin = '0'
    else nextDiv.style.margin = undefined
  }, [router.pathname])

  return (
    <>
      { router.pathname !== '/login' && <Sidebar /> }
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
