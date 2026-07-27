import Head from "next/head";

const siteName = "PANDA Hub";
const defaultDescription =
  "منتجات رقمية لنظام ويندوز مع تحميل مباشر، وصف واضح، ودعم فني مميز من PANDA Hub.";
const defaultImage = "/images/panda-web.ico";

export default function Seo({
  title,
  description = defaultDescription,
  canonicalPath = "/",
  image = defaultImage,
}) {
  const basePath = process.env.NODE_ENV === "production" ? "/panda-hub" : "";
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pg0panda.github.io";
  const resolvedTitle = title ? `${title} | ${siteName}` : siteName;
  const resolvedCanonical = `${siteUrl}${basePath}${canonicalPath === "/" ? "" : canonicalPath}`;
  const resolvedImage = image.startsWith("http") ? image : `${siteUrl}${basePath}${image}`;

  return (
    <Head>
      <title>{resolvedTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta
        name="keywords"
        content="منتجات رقمية, ويندوز, PANDA Hub, أدوات سطح مكتب, سكريبتات, تحميل مباشر"
      />
      <link rel="canonical" href={resolvedCanonical} />

      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={resolvedImage} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={resolvedTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={resolvedImage} />
    </Head>
  );
}
