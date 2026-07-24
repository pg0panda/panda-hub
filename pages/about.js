import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const FEATURES = [
  {
    title: "عرض منظم للمنتجات",
    desc: "كل منتج له صورة، وصف واضح، ونسخة وامتداد وحجم ملف ظاهرين بشكل مباشر.",
  },
  {
    title: "تحميل مباشر",
    desc: "لينك تحميل واحد لكل منتج، من غير خطوات إضافية أو إعلانات.",
  },

];

export default function About() {
  return (
    <>
      <Navbar />
      <section className="section">
        <div className="container">
          <div className="section-title">عن بيئة العمل</div>
          <p style={{ color: "var(--text-muted)", maxWidth: 640 }}>
            الموقع ده واجهة بسيطة لعرض المنتجات الرقمية اللي بتصدرها PANDA،
            سواء أدوات سطح مكتب أو سكريبتات صيانة. الهدف إن أي حد يدخل يلاقي
            المنتج ووصفه ولينك تحميله من غير تعقيد، وفي نفس الوقت يبقا سهل
            عليك تضيف وتحدث المنتجات من لوحة تحكم خاصة بيك.
          </p>

          <div className="about-grid">
            {FEATURES.map((f) => (
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
