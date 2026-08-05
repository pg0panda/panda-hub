import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import Seo from "../components/Seo";
import { getAllProducts } from "../lib/products";

export default function Home({ products }) {
  return (
    <>
      <Seo
  title="باندا هاب | Panda Hub - منتجات رقمية لنظام ويندوز"
  description="منصة باندا هاب (Panda Hub) تقدم منتجات رقمية لنظام ويندوز مع تحميل مباشر، أوصاف واضحة، ودعم فني مميز."
  canonicalPath="/"
/>
      <Navbar />
      <section className="hero">
  <div className="container">
    <div className="hero-eyebrow">Panda Hub</div>
    <h1>باندا هاب - منتجات رقمية لنظام ويندوز</h1>
    <p>
      منصة باندا هاب توفر منتجات رقمية مصممة لنظام ويندوز، لتسهيل عملية الصيانة وإصلاح النظام والتحسين وزيادة الإنتاجية والأداء.
    </p>
    <img
      src="/images/LOGO.jpeg"
      alt="PANDA Hub - digital products and Windows tools"
      style={{ maxWidth: 220, marginTop: "1.25rem", borderRadius: 16 }}
    />
  </div>
</section>

      <section className="section">
        <div className="container">
          <div className="section-title">كل المنتجات</div>
          <div className="section-sub">{products.length} منتج متاح دلوقتي</div>
          <div className="support-banner">
            <span>💡</span>
            <p>جميع منتجاتنا تأتي مع دعم فني متميز لمساعدتك في كل خطوة.</p>
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
