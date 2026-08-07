import Head from "next/head";
import { SiteSettingsProvider } from "../components/SiteSettingsContext";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <SiteSettingsProvider>
        <Component {...pageProps} />
      </SiteSettingsProvider>
    </>
  );
}