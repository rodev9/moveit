import { AppProps } from 'next/dist/next-server/lib/router/router'

import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

import GlobalStyle from '../styles/global'

const MyApp: React.FC<AppProps> = ({ Component, pageProps, router }) => {
  return (
    <>
      {router.pathname !== '/login' && router.pathname !== '/welcome' && (
        <Sidebar />
      )}
      <Component {...pageProps} />
      {router.pathname !== '/login' && router.pathname !== '/welcome' && (
        <Footer />
      )}

      <GlobalStyle
        sidebarVisible={
          router.pathname !== '/login' && router.pathname !== '/welcome'
        }
      />
    </>
  )
}

export default MyApp
