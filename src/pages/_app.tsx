import { AppProps } from "next/app"
import "styles/tailwind.css"
import Head from "next/head"
import { useEffect } from "react"

const meta = {
  title: "Johan Berggren",
  url: "johanberggren.no",
  description: "Offisiell nettside for Johan Berggren",
  keywords: [
    "Johan Berggren",
    "Lilyhamericana",
    "For Now I'm Good Right Here",
    "Music",
    "Country",
    "Americana",
    "Norwegian",
    "Lilyhamericana lyrics",
    "Lilyhamericana tekst",
    "For Now I'm Good Right Here lyrics",
    "For Now I'm Good Right Here tekst",
    "Johan Berggren lyrics",
    "Johan Berggren tekst",
    "Johan Berggren musikk",
    "Coutry musikk",
    "Americana musikk",
    "Norsk americana",
    "Johan Berggren hjemmeside",
    "Johan Berggren nettside",
    "Johan Berggren galleri",
    "Johan Berggren bilder",
    "Johan Berggren offisiell",
  ].join(", "),
  image: "/seo.jpg",
}

export default function App({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    if (router.pathname === "/") {
      window.scrollTo(0, 0)
    }
  }, [])
  return (
    <div className="uppercase text-sm">
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />

        <meta property="og:image" content={meta.image} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={meta.url} />

        <meta property="twitter:image" content={meta.image} />
        <meta property="twitter:title" content={meta.title} />
        <meta property="twitter:description" content={meta.description} />

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
