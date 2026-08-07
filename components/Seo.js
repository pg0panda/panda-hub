import Head from "next/head";

const siteName = "PANDA Hub";
const authorName = "PG0Panda";
const twitterHandle = "@pg0panda";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pg0panda.github.io/panda-hub";
const basePath = process.env.NODE_ENV === "production" ? "/panda-hub" : "";
const defaultTitle = "PANDA Hub | Digital Products for Windows";
const defaultDescription =
  "PANDA Hub provides ready-to-download digital products for Windows, including utilities, repair tools, and technical support. | باندا هاب يقدم منتجات رقمية لنظام ويندوز مع أدوات صيانة ودعم فني.";
const defaultImage = "/images/LOGO.jpeg";
const defaultKeywords = [
  "PANDA Hub",
  "باندا هاب",
  "Panda Hub",
  "Windows tools",
  "أدوات ويندوز",
  "Windows utilities",
  "برامج ويندوز",
  "digital products",
  "منتجات رقمية",
  "software download",
  "تحميل برامج",
  "repair tools",
  "أدوات اصلاح",
  "Windows activator",
  "تفعيل ويندوز",
  "Panda-Toolbox",
  "Panda Toolbox",
];

export default function Seo({
  title,
  description = defaultDescription,
  canonicalPath = "/",
  image = defaultImage,
  language = "ar",
  keywords = defaultKeywords,
  alternateUrls,
}) {
  const canonicalPathValue = canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`;
  const resolvedTitle = title
    ? title.includes(siteName)
      ? title
      : `${title} | ${siteName}`
    : defaultTitle;
  const resolvedDescription = description || defaultDescription;
  const resolvedCanonical = `${siteUrl}${basePath}${canonicalPathValue === "/" ? "" : canonicalPathValue}`;
  const resolvedAlternates = {
    ar: alternateUrls?.ar || resolvedCanonical,
    en: alternateUrls?.en || resolvedCanonical,
    default: alternateUrls?.default || resolvedCanonical,
  };
  const resolvedImage = image.startsWith("http")
    ? image
    : `${siteUrl}${basePath}${image.startsWith("/") ? image : `/${image}`}`;
  const locale = language === "en" ? "en_US" : "ar_AR";
  const alternateLocale = language === "en" ? "ar_AR" : "en_US";
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}${basePath}/#organization`,
        "name": siteName,
        "url": `${siteUrl}${basePath}/`,
        "logo": `${siteUrl}${basePath}/images/LOGO.jpeg`,
        "description": "PANDA Hub provides digital products and Windows utilities with direct downloads and technical support.",
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}${basePath}/#author`,
        "name": authorName,
        "url": `${siteUrl}${basePath}/`,
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}${basePath}/#website`,
        "url": `${siteUrl}${basePath}/`,
        "name": siteName,
        "author": { "@id": `${siteUrl}${basePath}/#author` },
        "inLanguage": ["ar", "en"],
        "description": "Digital products for Windows and useful utilities from PANDA Hub.",
      },
    ],
  };

  return (
    <Head>
      <title>{resolvedTitle}</title>
      <meta name="description" content={resolvedDescription} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content={authorName} />
      <meta name="theme-color" content="#0f172a" />
      <meta name="keywords" content={Array.isArray(keywords) ? keywords.join(", ") : keywords} />
      <meta httpEquiv="content-language" content="ar, en" />
      <link rel="canonical" href={resolvedCanonical} />
      <link rel="alternate" hrefLang="ar" href={resolvedAlternates.ar} />
      <link rel="alternate" hrefLang="en" href={resolvedAlternates.en} />
      <link rel="alternate" hrefLang="x-default" href={resolvedAlternates.default} />
      <link rel="image_src" href={resolvedImage} />

      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={resolvedDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={resolvedCanonical} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={resolvedImage} />
      <meta property="og:image:alt" content={resolvedTitle} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="1200" />
      <meta property="og:locale" content={locale} />
      <meta property="og:locale:alternate" content={alternateLocale} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={resolvedTitle} />
      <meta name="twitter:description" content={resolvedDescription} />
      <meta name="twitter:image" content={resolvedImage} />
      <meta name="twitter:image:alt" content={resolvedTitle} />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
}
