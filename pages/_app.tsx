import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>LVRBOY</title>
        <meta name="description" content="LVRBOY interactive 3D experience" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </>
  )
}

