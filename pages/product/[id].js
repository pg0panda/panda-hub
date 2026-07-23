import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { getAllProducts, getProductById } from "../../lib/products";

export default function ProductPage({ product }) {
  if (!product) {
    return (
      <>
        <Navbar />
        <div className="container section">المنتج غير موجود.</div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="product-detail">
          <img src={product.image} alt={product.name} />
          <div>
            <Link href="/" className="back-link">
              ← كل المنتجات
            </Link>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", margin: "0 0 12px" }}>
              {product.name}
            </h1>
            {product.tagline && (
              <p style={{ color: "var(--text-muted)", marginTop: 0 }}>{product.tagline}</p>
            )}
            <p>{product.description}</p>
            <div className="spec-strip" style={{ marginBottom: 20 }}>
              {product.version} · {product.fileType}
              {product.sizeMb ? ` · ${product.sizeMb}MB` : ""}
            </div>
            <a
              href={product.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              تحميل المنتج
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const products = getAllProducts();
  return {
    paths: products.map((p) => ({ params: { id: p.id } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = getProductById(params.id);
  return {
    props: { product },
  };
}
