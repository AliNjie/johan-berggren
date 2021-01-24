import { AppProps } from "next/app"
import "styles/tailwind.css"
import Head from "next/head"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="uppercase">
      <Head>
        <script
          src="https://kit.fontawesome.com/c96ed127ec.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <h1 className="sr-only">Johan Berggren Offisiell Nettside</h1>
      <Component {...pageProps} />
    </div>
  )
}
