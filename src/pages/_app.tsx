import { useRouter } from 'next/router'

import Sidebar from '../components/Sidebar'

import GlobalStyle from '../styles/global'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return (
    <>
      { router.pathname !== '/login' && <Sidebar /> }
      <Component {...pageProps} />
      <GlobalStyle sidebarVisible={router.pathname !== '/login'} />
    </>
  )
}

export default MyApp
