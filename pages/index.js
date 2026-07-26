import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { getAllProducts } from "../lib/products";

export default function Home({ products }) {
  return (
    <>
      <Navbar />
      <section className="hero">
        <div className="container">
          <div className="hero-eyebrow">Panda-List-Products</div>
          <h1> منتجات رقمية لنظام ويندوز</h1>
          <p>
            منتجات رقمية مصممة لنظام ويندوز، لتسهيل عملية الصيانة واصلاح النظام والتحسين وزيادة الإنتاجية والاداء.
          </p>
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
