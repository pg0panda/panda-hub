import { useSiteSettings } from "./SiteSettingsContext";

export default function Footer() {
  const { language } = useSiteSettings();
  const text =
    language === "en"
      ? `© ${new Date().getFullYear()} PANDA — Digital Products`
      : `© ${new Date().getFullYear()} PANDA — منتجات رقمية`;

  return (
    <footer className="footer">
      <div className="container">{text}</div>
    </footer>
  );
}
