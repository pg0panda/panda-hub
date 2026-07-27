import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Seo from "../components/Seo";

const basePath = process.env.NODE_ENV === "production" ? "/panda-hub" : "";

const SUPPORT_CHANNELS = [
  {
    title: "Discord",
    icon: `${basePath}/images/platforms/discord.png`,
    desc: "قم بفتح تذكرة للحصول علي مساعدة.",
    href: "https://discord.com/channels/1530264106878111874/1530351017261010997",
  },
  
  {
    title: "WhatsApp",
    icon: `${basePath}/images/platforms/whatsapp.png`,
    desc: "للمشاريع والاستفسارات.",
    href: "https://wa.me/201096897507",
  },

  {
    title: "Facebook",
    icon: `${basePath}/images/platforms/facebook.png`,
    desc: "للتواصل عبر رسائل الصفحة.",
    href: "https://www.facebook.com/profile.php?id=61592268906943",
  },
];

const CONTACT_INFO = [
  {
    title: "رقم الهاتف",
    desc: "+20 1096897507",
    href: "tel:+201096897507",
    linkText: "اتصل الآن",
  },
  {
    title: "البريد الإلكتروني",
    desc: "mohamednasr9040@gmail.com",
    href: "mailto:mohamednasr9040@gmail.com",
    linkText: "أرسل رسالة",
  },
  {
    title: "العنوان",
    desc: "محافظة القليوبية، مصر",
    href: "#",
    linkText: "",
  },
];

const POLICY_PAGES = [
  {
    title: "الشروط والأحكام",
    desc: "اقرأ الشروط والأحكام الكاملة لاستخدام الخدمات والتعامل مع PANDA Hub.",
    href: "/terms",
    linkText: "عرض الشروط",
  },
  {
    title: "سياسة استرداد الأموال",
    desc: "تعرف على شروط وأسلوب استرداد الأموال المتبع عند الطلب.",
    href: "/refund-policy",
    linkText: "عرض السياسة",
  },
];

const OUR_PAGES = [
    {
    title: "Telegram",
    icon: `${basePath}/images/platforms/telegram.png`,
    desc: "للتحديثات والرسائل السريعة.",
    href: "https://t.me/panda_hub7",
  },

  {
    title: "Facebook",
    icon: `${basePath}/images/platforms/facebook.png`,
    desc: "للاطلاع على آخر التحديثات والمنشورات.",
    href: "https://www.facebook.com/groups/panda.hub",
  },

  {
    title: "YouTube",
    icon: `${basePath}/images/platforms/youtube.png`,
    desc: "قناة الفيديوهات والشرح التفاعلي.",
    href: "https://www.youtube.com/@PG-panda",
  },

  {
    title: "WhatsApp",
    icon: `${basePath}/images/platforms/whatsapp.png`,
    desc: "لمعرفة اخر التحديثات والاخبار",
    href: "https://whatsapp.com/channel/0029Vb8VbcQHQbRvoGErAu07",
  },
];

export default function Contact() {
  return (
    <>
      <Seo
        title="تواصل معنا"
        description="تواصل مع PANDA Hub عبر الهاتف أو البريد أو القنوات الرسمية للحصول على الدعم أو آخر التحديثات."
        canonicalPath="/contact"
      />
      <Navbar />
      <section className="section">
        <div className="container">
          <div className="section-title">تواصل معنا</div>
          <p style={{ color: "var(--text-muted)", maxWidth: 700 }}>
            لو عايز تتواصل مع PANDA أو تعرف آخر التحديثات، تقدر تروح لأي قناة من القنوات
            دي مباشرة.
          </p>

          <div className="contact-section">
            <h3 className="contact-section-title">بيانات التواصل المباشر</h3>
            <div className="contact-grid">
              {CONTACT_INFO.map((item) => (
                <div className="contact-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  {item.href !== "#" ? (
                    <a className="contact-link" href={item.href} target="_blank" rel="noreferrer">
                      {item.linkText}
                    </a>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <div className="contact-section">
            <h3 className="contact-section-title">دعم فني</h3>
            <div className="contact-grid">
              {SUPPORT_CHANNELS.map((item) => (
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

          <div className="contact-section">
            <h3 className="contact-section-title">صفحاتنا</h3>
            <div className="contact-grid">
              {OUR_PAGES.map((item) => (
                <div className="contact-card" key={item.title}>
                  <div className="contact-badge" aria-hidden="true">
                    <img className="contact-icon" src={item.icon} alt={item.title} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <a className="contact-link" href={item.href} target="_blank" rel="noreferrer">
                    افتح الصفحة
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-section">
            <h3 className="contact-section-title">الشروط والأحكام وسياسة الاسترداد</h3>
            <div className="contact-grid">
              {POLICY_PAGES.map((item) => (
                <div className="contact-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <Link className="contact-link" href={item.href}>
                    {item.linkText}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
