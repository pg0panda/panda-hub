import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import Seo from "../components/Seo";
import { useSiteSettings } from "../components/SiteSettingsContext";
import { getAllProducts } from "../lib/products";

const basePath = process.env.NODE_ENV === "production" ? "/panda-hub" : "";

export default function Home({ products }) {
  const { language } = useSiteSettings();
  const isArabic = language === "ar";

  const content = {
    ar: {
      heroTitle: "باندا هاب | Panda Hub | منتجات رقمية لنظام ويندوز | Windows digital products",
      subtitle:
        "منصة باندا هاب تقدم أدوات ويندوز، برامج اصلاح، منتجات رقمية، وتحميل مباشر للبرامج. PANDA Hub provides Windows utilities, repair tools, software downloads, and digital products for better system performance.",
      sectionTitle: "كل المنتجات",
      sectionSub: `${products.length} منتج متاح دلوقتي`,
      banner: "جميع منتجاتنا تأتي مع دعم فني متميز لمساعدتك في كل خطوة.",
    },
    en: {
      heroTitle: "PANDA Hub | Windows Digital Products | Panda Toolbox",
      subtitle:
        "PANDA Hub delivers Windows utilities, repair tools, digital products, and direct software downloads with fast support and a clean user experience.",
      sectionTitle: "All Products",
      sectionSub: `${products.length} products available now`,
      banner: "All of our products come with premium technical support to help you at every step.",
    },
  };

  const activeContent = content[isArabic ? "ar" : "en"];

  return (
    <>
      <Seo
        title={isArabic ? "باندا هاب | Panda Hub - منتجات رقمية لنظام ويندوز" : "PANDA Hub | Windows Digital Products"}
        description={
          isArabic
            ? "PANDA Hub provides Windows tools, digital products, repair utilities, software downloads, and activation support. باندا هاب يقدم أدوات ويندوز، منتجات رقمية، برامج اصلاح، تحميل برامج، ودعم تفعيل ويندوز."
            : "PANDA Hub offers Windows tools, repair utilities, digital products, downloads, and technical support for a better PC experience."
        }
        canonicalPath="/"
        language={language}
        keywords={[
          "PANDA Hub",
          "باندا هاب",
          "Panda Hub",
          "Windows tools",
          "أدوات ويندوز",
          "digital products",
          "منتجات رقمية",
          "repair tools",
          "أدوات اصلاح",
          "software download",
          "تحميل برامج",
          "Windows activator",
          "تفعيل ويندوز",
          "Panda Toolbox",
          "Panda-Toolbox",
        ]}
      />
      <Navbar />
      <section className="hero">
        <div className="container">
          <div className="hero-eyebrow">Panda Hub</div>
          <h1>{activeContent.heroTitle}</h1>
          <p>{activeContent.subtitle}</p>
          <img
            src={`${basePath}/images/LOGO.jpeg`}
            alt="PANDA Hub - digital products and Windows tools"
            style={{ maxWidth: 220, marginTop: "1.25rem", borderRadius: 16 }}
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">{activeContent.sectionTitle}</div>
          <div className="section-sub">{activeContent.sectionSub}</div>
          <div className="support-banner">
            <span>💡</span>
            <p>{activeContent.banner}</p>
          </div>
          <div className="grid">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { products: getAllProducts() },
  };
}
