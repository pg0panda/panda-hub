import { Html, Head, Main, NextScript } from "next/document";

const basePath = process.env.NODE_ENV === "production" ? "/panda-hub" : "";
const faviconPath = `${basePath}/images/panda-web.ico`;

export default function Document() {
  return (
    <Html lang="ar" dir="rtl">
      <Head>
        <meta name="description" content="PANDA Hub provides digital products for Windows with ready downloads, clear descriptions, and technical support. | باندا هاب يقدم منتجات رقمية لنظام ويندوز مع تحميل مباشر ودعم فني." />
        <meta httpEquiv="content-language" content="ar,en" />
        <link rel="icon" href={faviconPath} type="image/x-icon" />
        <link rel="shortcut icon" href={faviconPath} type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@500;700;800&family=IBM+Plex+Sans+Arabic:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
