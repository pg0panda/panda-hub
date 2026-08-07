import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSiteSettings } from "../components/SiteSettingsContext";

const FEATURES = {
  ar: [
    {
      title: "عرض منظم للمنتجات",
      desc: "كل منتج له صورة، وصف واضح، ونسخة وامتداد وحجم ملف ظاهرين بشكل مباشر.",
    },
    {
      title: "تحميل مباشر",
      desc: "لينك تحميل واحد لكل منتج، من غير خطوات إضافية أو إعلانات.",
    },
  ],
  en: [
    {
      title: "Organized Product Showcase",
      desc: "Each product includes a clear image, description, version, file type, and size displayed directly.",
    },
    {
      title: "Direct Download",
      desc: "A single download link for each product, without unnecessary steps or ads.",
    },
  ],
};

export default function About() {
  const { language } = useSiteSettings();
  const isEnglish = language === "en";
  const features = FEATURES[isEnglish ? "en" : "ar"];

  return (
    <>
      <Navbar />
      <section className="section">
        <div className="container">
          <div className="section-title">{isEnglish ? "About the Workspace" : "عن بيئة العمل"}</div>
          <p style={{ color: "var(--text-muted)", maxWidth: 640 }}>
            {isEnglish
              ? "This site is a clean platform for showcasing PANDA digital products, whether desktop tools or system maintenance scripts. The goal is to make every product easy to discover, understand, and download."
              : "الموقع ده واجهة بسيطة لعرض المنتجات الرقمية اللي بيطورها PANDA، سواء أدوات سطح مكتب أو سكريبتات صيانة. الهدف إن أي حد يدخل يلاقي المنتج ووصفه ولينك تحميله من غير تعقيد."}
          </p>

          <div className="about-grid">
            {features.map((f) => (
              <div className="about-item" key={f.title}>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
