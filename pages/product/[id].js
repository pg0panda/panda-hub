import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { getAllProducts, getProductById } from "../../lib/products";

export default function ProductPage({ product }) {
  const [copiedCode, setCopiedCode] = useState("");

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (!isModalOpen) return;

      if (event.key === "Escape") {
        setIsModalOpen(false);
      }

      if (event.key === "ArrowRight") {
        const currentIndex = galleryImages.indexOf(selectedImage);
        const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % galleryImages.length : 0;
        setSelectedImage(galleryImages[nextIndex]);
      }

      if (event.key === "ArrowLeft") {
        const currentIndex = galleryImages.indexOf(selectedImage);
        const previousIndex = currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1;
        setSelectedImage(galleryImages[previousIndex]);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [galleryImages, isModalOpen, selectedImage]);

  const openImage = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleCopyCode = async (code) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);
      window.setTimeout(() => setCopiedCode(""), 1600);
    } catch (error) {
      console.error("Failed to copy code", error);
    }
  };

  const showPreviousImage = () => {
    const currentIndex = galleryImages.indexOf(selectedImage);
    const previousIndex = currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1;
    setSelectedImage(galleryImages[previousIndex]);
  };

  const showNextImage = () => {
    const currentIndex = galleryImages.indexOf(selectedImage);
    const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % galleryImages.length : 0;
    setSelectedImage(galleryImages[nextIndex]);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="product-detail">
          <div className="product-gallery-column">
            <button
              type="button"
              className="product-main-image"
              aria-label={`فتح الصورة الرئيسية للمنتج ${product.name}`}
              onClick={() => openImage(selectedImage)}
            >
              <img src={selectedImage} alt={`${product.name} الرئيسية`} />
            </button>

            {galleryImages.length > 0 && (
              <div className="product-gallery-strip">
                {galleryImages.map((image, index) => (
                  <button
                    key={`${product.id}-${index}`}
                    type="button"
                    className={`gallery-thumb ${selectedImage === image ? "active" : ""}`}
                    onClick={() => {
                      setSelectedImage(image);
                      setIsModalOpen(false);
                    }}
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
            <p className="product-description">{product.description}</p>
            <div className="spec-strip" style={{ marginBottom: 20 }}>
              {product.version} · {product.fileType}
              {product.sizeMb ? ` · ${product.sizeMb}MB` : ""}
            </div>
            <div className="payment-note">
              الدفع يتم داخل البرنامج نفسه بعد التثبيت.
            </div>

            {product.packages && product.packages.length > 0 && (
              <div className="product-packages">
                <h2 className="section-sub">الباقات المتاحة</h2>
                <div className="package-grid">
                  {product.packages.map((pkg) => (
                    <div className="package-card" key={pkg.title}>
                      <h3>{pkg.title}</h3>
                      <strong>{pkg.price}</strong>
                      <p>{pkg.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="product-packages">
              <h2 className="section-sub">اكوّد مجانية</h2>
              <div className="package-card">
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center" }}>
                  <h3 style={{ margin: 0 }}>Panda|Free-3d-L-50</h3>
                  <button
                    type="button"
                    className="copy-code-btn"
                    onClick={() => handleCopyCode("Panda|Free-3d-L-50")}
                  >
                    {copiedCode === "Panda|Free-3d-L-50" ? "تم النسخ" : "نسخ"}
                  </button>
                </div>
                <p>استخدم هذا الكود للحصول على النسخة المجانية أو العرض المخصص.</p>
              </div>
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

      {isModalOpen && (
        <div className="image-modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <div className="image-modal" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="modal-close" onClick={() => setIsModalOpen(false)}>
              ×
            </button>
            <button type="button" className="modal-arrow left" onClick={showPreviousImage}>
              ‹
            </button>
            <img src={selectedImage} alt={`${product.name} المعروضة`} className="modal-image" />
            <button type="button" className="modal-arrow right" onClick={showNextImage}>
              ›
            </button>
          </div>
        </div>
      )}

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
