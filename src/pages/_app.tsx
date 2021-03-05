import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import light from '../styles/themes/light'

import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

import GlobalStyle from '../styles/global'

const MyApp: React.FC<AppProps> = ({ Component, pageProps, router }) => {
  return (
    <ThemeProvider theme={light}>
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
    </ThemeProvider>
  )
}

export default MyApp
