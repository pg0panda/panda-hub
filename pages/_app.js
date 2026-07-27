import Head from "next/head";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="google-site-verification" content="D7Kg-W89aoy6ytFXFSkXWsjydTdZpdPY5dHMh4BY7ik" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}