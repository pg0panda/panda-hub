import Link from "next/link";
import { useSiteSettings } from "./SiteSettingsContext";

const navLabels = {
  ar: {
    products: "المنتجات",
    about: "عن بيئة العمل",
    contact: "تواصل معنا",
    terms: "الشروط والأحكام",
    refund: "سياسة استرجاع الأموال",
  },
  en: {
    products: "Products",
    about: "About",
    contact: "Contact",
    terms: "Terms",
    refund: "Refund Policy",
  },
};

export default function Navbar() {
  const { theme, setTheme, language, setLanguage } = useSiteSettings();
  const labels = navLabels[language] || navLabels.ar;

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link href="/" className="brand">
          <span className="brand-dot" />
          PANDA HUB
        </Link>

        <div className="nav-actions">
          <div className="toggle-group" aria-label="Site settings">
            <button
              type="button"
              className="toggle-button"
              onClick={() => setLanguage((current) => (current === "ar" ? "en" : "ar"))}
              aria-label="Toggle language"
            >
              {language === "ar" ? "EN" : "AR"}
            </button>
            <button
              type="button"
              className="toggle-button"
              onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </div>

          <nav className="nav-links">
            <Link href="/">{labels.products}</Link>
            <Link href="/about">{labels.about}</Link>
            <Link href="/contact">{labels.contact}</Link>
            <Link href="/terms">{labels.terms}</Link>
            <Link href="/refund-policy">{labels.refund}</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
