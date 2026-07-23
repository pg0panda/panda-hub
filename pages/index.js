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
          <div className="hero-eyebrow">$ panda --list-products</div>
          <h1>منتجات رقمية جاهزة للتحميل والاستخدام فورًا</h1>
          <p>
            أدوات وسكريبتات وتطبيقات لويندوز، مبنية وموثقة بعناية، وكل منتج
            بييجي بنسخته وحجمه وامتداد الملف واضحين قدامك من غير لف ودوران.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">كل المنتجات</div>
          <div className="section-sub">{products.length} منتج متاح دلوقتي</div>
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
