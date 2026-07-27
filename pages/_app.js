import Head from "next/head";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* العنوان والوصف الرئيسي بالاسمين العربي والإنجليزي */}
        <title>Panda Hub | باندا هاب - منتجات رقمية لنظام ويندوز</title>
        <meta 
          name="description" 
          content="منصة باندا هاب (Panda Hub) لتقديم أدوات صيانة نظام ويندوز وتطبيقات رقمية لتسهيل وإصلاح النظام." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />

        {/* الكلمات المفتاحية ليغطي البحث باللغتين */}
        <meta 
          name="keywords" 
          content="باندا هاب, Panda Hub, panda-hub, pandahub, باندا هوب, برامج ويندوز, صيانة ويندوز" 
        />

        {/* إعدادات مشاركة الرابط على الفيسبوك والـ Social Media (Open Graph) */}
        <meta property="og:title" content="Panda Hub | باندا هاب" />
        <meta property="og:description" content="منصة باندا هاب لتقديم أدوات صيانة نظام ويندوز وتطبيقات رقمية." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pg0panda.github.io/panda-hub/" />

        {/* توثيق جوجل */}
        <meta name="google-site-verification" content="D7Kg-W89aoy6ytFXFSkXWsjydTdZpdPY5dHMh4BY7ik" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}