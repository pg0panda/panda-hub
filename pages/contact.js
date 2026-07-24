import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const basePath = process.env.NODE_ENV === "production" ? "/panda-hub" : "";

const CONTACTS = [
  {
    title: "Discord",
    icon: `${basePath}/images/platforms/discord.svg`,
    desc: "تواصل مباشر مع المجتمع والدردشة الفورية.",
    href: "https://canary.discord.com/channels/1411164706885865525/1420494962553913454",
  },
  {
    title: "Telegram",
    icon: `${basePath}/images/platforms/telegram.svg`,
    desc: "للتحديثات والرسائل السريعة.",
    href: "https://t.me/panda_hub7",
  },
  {
    title: "WhatsApp",
    icon: `${basePath}/images/platforms/whatsapp.svg`,
    desc: "للمشاريع والاستفسارات السريعة.",
    href: "https://wa.me/201096897507",
  },
  {
    title: "Facebook",
    icon: `${basePath}/images/platforms/facebook.svg`,
    desc: "للاطلاع على آخر التحديثات والمنشورات.",
    href: "https://www.facebook.com/groups/panda.hub",
  },
  {
    title: "YouTube",
    icon: `${basePath}/images/platforms/youtube.svg`,
    desc: "قناة الفيديوهات والشرح التفاعلي.",
    href: "https://www.youtube.com/@PG-panda",
  },
];

export default function Contact() {
  return (
    <>
      <Navbar />
      <section className="section">
        <div className="container">
          <div className="section-title">تواصل معنا</div>
          <p style={{ color: "var(--text-muted)", maxWidth: 700 }}>
            لو عايز تتواصل مع PANDA أو تعرف آخر التحديثات، تقدر تروح لأي قناة من القنوات
            دي مباشرة.
          </p>

          <div className="contact-grid">
            {CONTACTS.map((item) => (
              <div className="contact-card" key={item.title}>
                <div className="contact-badge" aria-hidden="true">
                  <img className="contact-icon" src={item.icon} alt={item.title} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <a className="contact-link" href={item.href} target="_blank" rel="noreferrer">
                  افتح القناة
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
