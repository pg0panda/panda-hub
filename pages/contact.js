import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CONTACTS = [
  {
    title: "Discord",
    emoji: "💬",
    desc: "تواصل مباشر مع المجتمع والدردشة الفورية.",
    href: "https://canary.discord.com/channels/1411164706885865525/1420494962553913454",
  },
  {
    title: "Telegram",
    emoji: "📣",
    desc: "للتحديثات والرسائل السريعة.",
    href: "https://t.me/panda_hub7",
  },
  {
    title: "WhatsApp",
    emoji: "🟢",
    desc: "للمشاريع والاستفسارات السريعة.",
    href: "https://wa.me/201096897507",
  },
  {
    title: "Facebook",
    emoji: "📘",
    desc: "للاطلاع على آخر التحديثات والمنشورات.",
    href: "https://www.facebook.com/groups/panda.hub",
  },
  {
    title: "YouTube",
    emoji: "▶️",
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
            دي مباشرة وراحتك.
          </p>

          <div className="contact-grid">
            {CONTACTS.map((item) => (
              <div className="contact-card" key={item.title}>
                <div className="contact-badge" aria-hidden="true">
                  {item.emoji}
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
