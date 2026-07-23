import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="card-body">
        <div className="card-title">{product.name}</div>
        {product.tagline && <div className="card-tagline">{product.tagline}</div>}
        <div className="spec-strip">
          {product.version} · {product.fileType}
          {product.sizeMb ? ` · ${product.sizeMb}MB` : ""}
        </div>
        <div className="card-actions">
          <Link href={`/product/${product.id}`} className="btn btn-secondary">
            التفاصيل
          </Link>
          <a
            href={product.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            تحميل
          </a>
        </div>
      </div>
    </div>
  );
}
