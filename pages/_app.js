// ** Next Imports
import Head from 'next/head'
import { Router } from 'next/router'

// ** Loader Import
import NProgress from 'nprogress'

// ** Emotion Imports
import { CacheProvider } from '@emotion/react'

// ** Config Imports
import themeConfig from 'src/configs/themeConfig'

// ** Component Imports
import UserLayout from 'src/layouts/UserLayout'
import ThemeComponent from 'src/@core/theme/ThemeComponent'

// ** Contexts
import { SettingsConsumer, SettingsProvider } from 'src/@core/context/settingsContext'

// ** Utils Imports
import { createEmotionCache } from 'src/@core/utils/create-emotion-cache'

// ** React Perfect Scrollbar Style
import 'react-perfect-scrollbar/dist/css/styles.css'

// ** Global css styles
import '../styles/globals.css'

// ** Auth HOC
// import withAuth from 'src/components/auth/withAuth'

// ** React Imports
import { useState, useEffect } from 'react'

// ** Kinde import
import { KindeProvider } from "@kinde-oss/kinde-auth-nextjs";

const clientSideEmotionCache = createEmotionCache()

// ** Pace Loader
if (themeConfig.routingLoader) {
  Router.events.on('routeChangeStart', () => {
    NProgress.start()
  })
  Router.events.on('routeChangeError', () => {
    NProgress.done()
  })
  Router.events.on('routeChangeComplete', () => {
    NProgress.done()
  })
}

// ** Configure JSS & ClassName
const App = props => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  // Variables
  const getLayout = Component.getLayout ?? (page => <UserLayout>{page}</UserLayout>)

  // Apply withAuth HOC to all pages except login, register, and error pages
  // const AuthenticatedComponent = Component.authPage ? Component : withAuth(Component)

  if (loading) {
    return <div>Loading...</div> // You can replace this with a proper loading component
  }

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>{`${themeConfig.templateName} - Pator`}</title>
        <meta
          name='description'
          content={`${themeConfig.templateName} post automater and social media manager`}
        />
        <meta name='keywords' content='social media manager, post perfomance analysis' />
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>

      <KindeProvider>
        <SettingsProvider>
          <SettingsConsumer>
            {({ settings }) => {
              return <ThemeComponent settings={settings}>{getLayout(
                <Component {...pageProps} />
              )}</ThemeComponent>
            }}
          </SettingsConsumer>
        </SettingsProvider>
      </KindeProvider>
    </CacheProvider>
  )
}

export default App
