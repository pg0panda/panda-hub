import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import { useSiteSettings } from "../components/SiteSettingsContext";

const CONTENT = {
  ar: {
    title: "الشروط والأحكام",
    intro: "يرجى قراءة هذه الشروط بعناية قبل استخدام الموقع أو شراء أي منتج من PANDA Hub. باستمرارك في استخدام الموقع أو إتمام أي عملية شراء داخل البرنامج، فإنك توافق على الالتزام بجميع البنود الواردة أدناه.",
    items: [
      { heading: "1. التعريفات", body: "يُقصد بـ PANDA Hub: الموقع الإلكتروني وجميع المنتجات والخدمات الرقمية المقدمة تحت هذا الاسم. يُقصد بـ المستخدم: أي شخص يزور الموقع أو يستخدم خدماته أو يشتري منتجاته. يُقصد بـ الترخيص: الإذن الممنوح للمستخدم باستخدام المنتج الرقمي وفق الشروط المحددة." },
      { heading: "2. استخدام الخدمات", body: "يُسمح باستخدام الموقع والمنتجات للأغراض المشروعة فقط. يُحظر تحديداً: محاولة اختراق الموقع أو التلاعب بأنظمته، إعادة بيع أو توزيع المنتجات المشتراة بأي شكل كان، استخدام المنتجات لأغراض غير مشروعة أو تنتهك حقوق الغير، محاولة تجاوز أنظمة الترخيص أو التحقق من الهوية (HWID)." },
      { heading: "3. الملكية الفكرية", body: "جميع المنتجات والمحتوى المنشور على PANDA Hub — بما في ذلك البرامج، التصاميم، والنصوص — هي ملك حصري لـ PANDA Hub وتخضع لقوانين حقوق الملكية الفكرية المعمول بها. لا يمنح شراء المنتج أي حق في امتلاكه أو نسخه أو توزيعه؛ بل يمنح ترخيص استخدام شخصي وغير قابل للتحويل وفق الشروط المحددة لكل منتج." },
      { heading: "4. نظام الترخيص والأجهزة", body: "تعتمد منتجات PANDA Hub نظام ترخيص مرتبط بالجهاز (HWID). يُتيح كل ترخيص الاستخدام على عدد محدد من الأجهزة وفق ما هو موضح عند الشراء. يُحظر تجاوز هذا الحد أو مشاركة الترخيص مع أطراف أخرى. في حال الإخلال بهذا البند، يحق لـ PANDA Hub إلغاء الترخيص فوراً دون استرداد." },
      { heading: "5. إنهاء الخدمة والحظر", body: "يحتفظ PANDA Hub بالحق في إلغاء ترخيص أي مستخدم أو حجب وصوله في حال: انتهاك أي بند من هذه الشروط، محاولة التحايل على نظام الترخيص أو الحماية، استخدام المنتج بطريقة تضر بـ PANDA Hub أو بمستخدمين آخرين. لا يترتب على إنهاء الخدمة لهذه الأسباب أي حق في استرداد المبالغ المدفوعة." },
      { heading: "6. حدود المسؤولية", body: "يبذل PANDA Hub أقصى جهوده لتقديم منتجات وخدمات موثوقة وعالية الجودة، غير أنه لا يضمن خلوّها من الأخطاء أو الانقطاعات التقنية بشكل مطلق. لا يتحمل PANDA Hub أي مسؤولية عن الأضرار المباشرة أو غير المباشرة الناتجة عن سوء استخدام المنتجات أو استخدامها بطريقة تخالف تعليمات التشغيل أو الأحداث الخارجة عن إرادته." },
      { heading: "7. تعديل الشروط", body: "يحتفظ PANDA Hub بالحق في تعديل هذه الشروط في أي وقت. سيتم الإشعار بأي تغييرات جوهرية عبر الموقع أو قنوات التواصل الرسمية. استمرارك في استخدام الموقع بعد نشر التعديلات يُعدّ قبولاً ضمنياً لها." },
    ],
  },
  en: {
    title: "Terms and Conditions",
    intro: "Please read these terms carefully before using the website or purchasing any product from PANDA Hub. By continuing to use the website or completing any purchase, you agree to comply with all terms below.",
    items: [
      { heading: "1. Definitions", body: "PANDA Hub refers to the website and all digital products and services offered under this name. User means any person who visits the website, uses its services, or purchases products. License means the permission granted to the user to use the digital product under the specified conditions." },
      { heading: "2. Service Use", body: "The website and products may only be used for lawful purposes. Specifically prohibited are hacking or interfering with the website systems, reselling or redistributing purchased products, using products for unlawful purposes, and bypassing licensing or identity verification (HWID)." },
      { heading: "3. Intellectual Property", body: "All products and content published on PANDA Hub, including software, designs, and scripts, are the exclusive property of PANDA Hub and are subject to applicable intellectual property laws. Purchasing a product does not grant ownership, copying, or distribution rights; it only grants a personal, non-transferable usage license under the conditions defined for each product." },
      { heading: "4. License and Device System", body: "PANDA Hub products depend on a device-based licensing system (HWID). Each license allows usage on a limited number of devices as specified at the time of purchase. Exceeding this limit or sharing the license with others is prohibited. In such cases, PANDA Hub may revoke the license immediately without refund." },
      { heading: "5. Service Termination and Blocking", body: "PANDA Hub reserves the right to cancel the license of any user or block access if there is a violation of any clause, attempts to bypass the licensing or protection system, or any misuse that harms PANDA Hub or other users. No right to refund arises from such termination." },
      { heading: "6. Liability Limits", body: "PANDA Hub makes every effort to provide reliable, high-quality products and services, but does not guarantee that they are absolutely free from errors or technical outages. PANDA Hub is not liable for direct or indirect damages caused by misuse, use outside instructions, or events beyond its control." },
      { heading: "7. Changes to Terms", body: "PANDA Hub reserves the right to revise these terms at any time. Material changes will be announced through the website or official communication channels. Continued use of the site after changes are published constitutes implicit acceptance." },
    ],
  },
};

export default function Terms() {
  const { language } = useSiteSettings();
  const content = CONTENT[language === "en" ? "en" : "ar"];

  return (
    <>
      <Seo
        title={content.title}
        description={language === "en" ? "Read the terms and conditions for using PANDA Hub products and services before purchase or support." : "اقرأ شروط استخدام PANDA Hub والمنتجات الرقمية قبل الشراء أو استخدام الخدمات."}
        canonicalPath="/terms"
        language={language}
      />
      <Navbar />
      <section className="section">
        <div className="container">
          <div className="section-title">{content.title}</div>
          <p style={{ color: "var(--text-muted)", maxWidth: 760 }}>{content.intro}</p>

          <div className="contact-section">
            {content.items.map((item) => (
              <div className="contact-card" key={item.heading}>
                <h3>{item.heading}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}