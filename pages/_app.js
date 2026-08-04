import Head from "next/head";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>PANDA Hub | Digital Products for Windows</title>
        <meta
          name="description"
          content="PANDA Hub provides ready-to-download digital products and Windows utilities with easy installation and technical support. | باندا هاب يقدم منتجات رقمية وأدوات ويندوز مع دعم فني سهل." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta
          name="keywords"
          content="PANDA Hub, باندا هاب, panda-hub, Panda Hub, Windows tools, digital products, repair tools"
        />
        <meta property="og:title" content="PANDA Hub | Digital Products for Windows" />
        <meta
          property="og:description"
          content="PANDA Hub provides ready-to-download digital products and Windows utilities with easy installation and technical support."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pg0panda.github.io/panda-hub/" />
        <meta property="og:image" content="https://pg0panda.github.io/panda-hub/images/panda_ico.png" />
        <meta property="og:image:alt" content="PANDA Hub logo" />
        <meta property="og:locale" content="ar_AR" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://pg0panda.github.io/panda-hub/images/panda_ico.png" />
        <meta name="google-site-verification" content="D7Kg-W89aoy6ytFXFSkXWsjydTdZpdPY5dHMh4BY7ik" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}