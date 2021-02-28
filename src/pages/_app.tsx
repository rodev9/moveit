import { useRouter } from 'next/router'

import Sidebar from '../components/Sidebar'

import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return (
    <>
      { router.pathname !== '/login' && <Sidebar /> }
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
