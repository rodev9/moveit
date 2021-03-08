import { useEffect } from 'react'
import { AppProps } from 'next/app'
import Router from 'next/router'
import { ThemeProvider } from 'styled-components'

import light from '../styles/themes/light'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

import GlobalStyle from '../styles/global'

const MyApp: React.FC<AppProps> = ({ Component, pageProps, router }) => {
  useEffect(() => {
    Router.events.on('routeChangeStart', () => {
      NProgress.set(0.3)
      NProgress.start()
    })
    Router.events.on('routeChangeComplete', NProgress.done)
    Router.events.on('routeChangeError', NProgress.done)
  }, [])

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
