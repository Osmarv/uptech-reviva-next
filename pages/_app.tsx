import { GlobalStyle } from '../styles/GlobalStyle'
import type { AppProps } from 'next/app'
import { CartContext } from '../context/CartContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />      
    </>
  )
}

export default MyApp
