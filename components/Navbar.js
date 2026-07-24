import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link href="/" className="brand">
          <span className="brand-dot" />
          PANDA HUB
        </Link>
        <nav className="nav-links">
          <Link href="/">المنتجات</Link>
          <Link href="/about">عن بيئة العمل</Link>
          <Link href="/contact">تواصل معنا</Link>
        </nav>
      </div>
    </header>
  );
}
