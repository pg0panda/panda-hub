import { useState } from "react";
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

  const galleryImages = (Array.isArray(product.images) ? product.images : []).filter(Boolean);
  const [selectedImage, setSelectedImage] = useState(product.image || galleryImages[0]);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="product-detail">
          <div className="product-gallery-column">
            <a
              href={selectedImage}
              target="_blank"
              rel="noopener noreferrer"
              className="product-main-image"
              aria-label={`فتح الصورة الرئيسية للمنتج ${product.name}`}
            >
              <img src={selectedImage} alt={`${product.name} الرئيسية`} />
            </a>

            {galleryImages.length > 0 && (
              <div className="product-gallery-strip">
                {galleryImages.map((image, index) => (
                  <button
                    key={`${product.id}-${index}`}
                    type="button"
                    className={`gallery-thumb ${selectedImage === image ? "active" : ""}`}
                    onClick={() => setSelectedImage(image)}
                    aria-label={`عرض صورة ${index + 1} للمنتج ${product.name}`}
                  >
                    <img src={image} alt={`${product.name} ${index + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="product-text">
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
