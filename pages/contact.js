import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import { useSiteSettings } from "../components/SiteSettingsContext";

const basePath = process.env.NODE_ENV === "production" ? "/panda-hub" : "";

const CONTENT = {
  ar: {
    title: "تواصل معنا",
    intro: "لو عايز تتواصل مع PANDA أو تعرف آخر التحديثات، تقدر تروح لأي قناة من القنوات دي مباشرة.",
    direct: "بيانات التواصل المباشر",
    support: "دعم فني",
    pages: "صفحاتنا",
    policies: "الشروط والأحكام وسياسة الاسترداد",
    openChannel: "افتح القناة",
    openPage: "افتح الصفحة",
    supportChannels: [
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
    ],
    contactInfo: [
      { title: "رقم الهاتف", desc: "+20 1096897507", href: "tel:+201096897507", linkText: "اتصل الآن" },
      { title: "البريد الإلكتروني", desc: "mohamednasr9040@gmail.com", href: "mailto:mohamednasr9040@gmail.com", linkText: "أرسل رسالة" },
      { title: "العنوان", desc: "محافظة القليوبية، مصر", href: "#", linkText: "" },
    ],
    policyPages: [
      { title: "الشروط والأحكام", desc: "اقرأ الشروط والأحكام الكاملة لاستخدام الخدمات والتعامل مع PANDA Hub.", href: "/terms", linkText: "عرض الشروط" },
      { title: "سياسة استرداد الأموال", desc: "تعرف على شروط وأسلوب استرداد الأموال المتبع عند الطلب.", href: "/refund-policy", linkText: "عرض السياسة" },
    ],
    ourPages: [
      { title: "Telegram", icon: `${basePath}/images/platforms/telegram.png`, desc: "للتحديثات والرسائل السريعة.", href: "https://t.me/panda_hub7" },
      { title: "Facebook", icon: `${basePath}/images/platforms/facebook.png`, desc: "للاطلاع على آخر التحديثات والمنشورات.", href: "https://www.facebook.com/groups/panda.hub" },
      { title: "YouTube", icon: `${basePath}/images/platforms/youtube.png`, desc: "قناة الفيديوهات والشرح التفاعلي.", href: "https://www.youtube.com/@PG-panda" },
      { title: "WhatsApp", icon: `${basePath}/images/platforms/whatsapp.png`, desc: "لمعرفة اخر التحديثات والاخبار", href: "https://whatsapp.com/channel/0029Vb8VbcQHQbRvoGErAu07" },
    ],
  },
  en: {
    title: "Contact Us",
    intro: "If you want to contact PANDA or get the latest updates, you can reach any of these channels directly.",
    direct: "Direct Contact Information",
    support: "Technical Support",
    pages: "Our Channels",
    policies: "Terms and Refund Policy",
    openChannel: "Open Channel",
    openPage: "Open Page",
    supportChannels: [
      {
        title: "Discord",
        icon: `${basePath}/images/platforms/discord.png`,
        desc: "Open a ticket to get help from the team.",
        href: "https://discord.com/channels/1530264106878111874/1530351017261010997",
      },
      {
        title: "WhatsApp",
        icon: `${basePath}/images/platforms/whatsapp.png`,
        desc: "For projects and inquiries.",
        href: "https://wa.me/201096897507",
      },
      {
        title: "Facebook",
        icon: `${basePath}/images/platforms/facebook.png`,
        desc: "For contacting the page through messages.",
        href: "https://www.facebook.com/profile.php?id=61592268906943",
      },
    ],
    contactInfo: [
      { title: "Phone Number", desc: "+20 1096897507", href: "tel:+201096897507", linkText: "Call Now" },
      { title: "Email", desc: "mohamednasr9040@gmail.com", href: "mailto:mohamednasr9040@gmail.com", linkText: "Send Message" },
      { title: "Address", desc: "Qalyubia Governorate, Egypt", href: "#", linkText: "" },
    ],
    policyPages: [
      { title: "Terms and Conditions", desc: "Read the full terms and conditions for using PANDA Hub services.", href: "/terms", linkText: "View Terms" },
      { title: "Refund Policy", desc: "Learn the refund process and conditions before making a purchase.", href: "/refund-policy", linkText: "View Policy" },
    ],
    ourPages: [
      { title: "Telegram", icon: `${basePath}/images/platforms/telegram.png`, desc: "For updates and quick messages.", href: "https://t.me/panda_hub7" },
      { title: "Facebook", icon: `${basePath}/images/platforms/facebook.png`, desc: "For the latest updates and posts.", href: "https://www.facebook.com/groups/panda.hub" },
      { title: "YouTube", icon: `${basePath}/images/platforms/youtube.png`, desc: "Video channel for tutorials and walkthroughs.", href: "https://www.youtube.com/@PG-panda" },
      { title: "WhatsApp", icon: `${basePath}/images/platforms/whatsapp.png`, desc: "For the latest news and updates.", href: "https://whatsapp.com/channel/0029Vb8VbcQHQbRvoGErAu07" },
    ],
  },
};

export default function Contact() {
  const { language } = useSiteSettings();
  const content = CONTENT[language === "en" ? "en" : "ar"];

  return (
    <>
      <Seo
        title={content.title}
        description={language === "en" ? "Contact PANDA Hub by phone, email, or official channels for support and updates." : "تواصل مع PANDA Hub عبر الهاتف أو البريد أو القنوات الرسمية للحصول على الدعم أو آخر التحديثات."}
        canonicalPath="/contact"
        language={language}
      />
      <Navbar />
      <section className="section">
        <div className="container">
          <div className="section-title">{content.title}</div>
          <p style={{ color: "var(--text-muted)", maxWidth: 700 }}>{content.intro}</p>

          <div className="contact-section">
            <h3 className="contact-section-title">{content.direct}</h3>
            <div className="contact-grid">
              {content.contactInfo.map((item) => (
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
            <h3 className="contact-section-title">{content.support}</h3>
            <div className="contact-grid">
              {content.supportChannels.map((item) => (
                <div className="contact-card" key={item.title}>
                  <div className="contact-badge" aria-hidden="true">
                    <img className="contact-icon" src={item.icon} alt={item.title} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <a className="contact-link" href={item.href} target="_blank" rel="noreferrer">
                    {content.openChannel}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-section">
            <h3 className="contact-section-title">{content.pages}</h3>
            <div className="contact-grid">
              {content.ourPages.map((item) => (
                <div className="contact-card" key={item.title}>
                  <div className="contact-badge" aria-hidden="true">
                    <img className="contact-icon" src={item.icon} alt={item.title} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <a className="contact-link" href={item.href} target="_blank" rel="noreferrer">
                    {content.openPage}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-section">
            <h3 className="contact-section-title">{content.policies}</h3>
            <div className="contact-grid">
              {content.policyPages.map((item) => (
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
