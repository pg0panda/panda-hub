import Head from "next/head";

const siteName = "PANDA Hub";
const defaultTitle = "PANDA Hub | Digital Products for Windows";
const defaultDescription =
  "PANDA Hub provides ready-to-download digital products for Windows, including utilities, repair tools, and technical support. | باندا هاب يقدم منتجات رقمية لنظام ويندوز مع أدوات صيانة ودعم فني.";
const defaultImage = "/images/panda_ico.png";
const defaultStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://pg0panda.github.io/panda-hub/#organization",
      "name": "PANDA Hub",
      "url": "https://pg0panda.github.io/panda-hub/",
      "logo": "https://pg0panda.github.io/panda-hub/images/panda_ico.png",
      "description": "PANDA Hub provides digital products and Windows utilities with direct downloads and technical support."
    },
    {
      "@type": "WebSite",
      "@id": "https://pg0panda.github.io/panda-hub/#website",
      "url": "https://pg0panda.github.io/panda-hub/",
      "name": "PANDA Hub",
      "inLanguage": ["ar", "en"],
      "description": "Digital products for Windows and useful utilities from PANDA Hub."
    }
  ]
};

export default function Seo({
  title,
  description = defaultDescription,
  canonicalPath = "/",
  image = defaultImage,
}) {
  const basePath = process.env.NODE_ENV === "production" ? "/panda-hub" : "";
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pg0panda.github.io/panda-hub";
  const canonicalPathValue = canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`;
  const resolvedTitle = title ? `${title} | ${siteName}` : `${defaultTitle} | ${siteName}`;
  const resolvedDescription = description || defaultDescription;
  const resolvedCanonical = `${siteUrl}${basePath}${canonicalPathValue === "/" ? "" : canonicalPathValue}`;
  const resolvedImage = image.startsWith("http")
    ? image
    : `${siteUrl}${basePath}${image.startsWith("/") ? image : `/${image}`}`;

  return (
    <Head>
      <title>{resolvedTitle}</title>
      <meta name="description" content={resolvedDescription} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content={siteName} />
      <meta name="theme-color" content="#0f172a" />
      <meta
        name="keywords"
        content="PANDA Hub, باندا هاب, Windows tools, digital products, download, utilities, repair tools"
      />
      <link rel="canonical" href={resolvedCanonical} />
      <link rel="alternate" hrefLang="ar" href={resolvedCanonical} />
      <link rel="alternate" hrefLang="en" href={resolvedCanonical} />
      <link rel="alternate" hrefLang="x-default" href={resolvedCanonical} />

      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={resolvedDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={resolvedCanonical} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={resolvedImage} />
      <meta property="og:image:alt" content={resolvedTitle} />
      <meta property="og:locale" content="ar_AR" />
      <meta property="og:locale:alternate" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={resolvedTitle} />
      <meta name="twitter:description" content={resolvedDescription} />
      <meta name="twitter:image" content={resolvedImage} />
      <meta name="twitter:image:alt" content={resolvedTitle} />
      <meta name="twitter:site" content="@pg0panda" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(defaultStructuredData) }}
      />
    </Head>
  );
}
