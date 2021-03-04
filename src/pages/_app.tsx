import { AppProps } from 'next/dist/next-server/lib/router/router'

import Sidebar from '../components/Sidebar'

import GlobalStyle from '../styles/global'

const MyApp: React.FC<AppProps> = ({ Component, pageProps, router }) => {
  return (
    <>
      {router.pathname !== '/login' && router.pathname !== '/welcome' && (
        <Sidebar />
      )}
      <Component {...pageProps} />
      <GlobalStyle sidebarVisible={router.pathname !== '/login'} />
    </>
  )
}

export default MyApp
