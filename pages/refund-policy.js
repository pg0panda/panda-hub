import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import { useSiteSettings } from "../components/SiteSettingsContext";

const CONTENT = {
  ar: {
    title: "سياسة استرداد الأموال",
    intro: "نلتزم بتقديم منتجات رقمية عالية الجودة ونسعى لضمان رضا عملائنا التام. توضح هذه السياسة الحالات التي يحق فيها طلب استرداد الأموال، والإجراءات المتبعة، والمدد الزمنية المعتمدة — بما يكفل الشفافية والعدالة لجميع الأطراف.",
    items: [
      { heading: "1. حالات الاسترداد المقبولة", body: "يحق للعميل طلب استرداد الأموال في الحالات التالية حصراً: تعذّر تسليم المنتج أو الوصول إليه بعد إتمام الدفع، وجود خلل تقني جوهري يمنع استخدام المنتج بشكل كامل، ولم يتمكن فريق الدعم من حله خلال 48 ساعة عمل من تاريخ الإبلاغ، أو تبيّن أن المنتج المُسلَّم يختلف اختلافاً جوهرياً عما هو موضح في صفحة المنتج. يتم تقييم كل طلب بشكل فردي، ويحتفظ PANDA Hub بالحق في رفض الطلبات التي لا تستوفي هذه الشروط." },
      { heading: "2. المنتجات الرقمية — تنبيه مهم", body: "نظراً لطبيعة المنتجات الرقمية وإمكانية الوصول إليها فوراً عند الشراء، لا يحق المطالبة بالاسترداد بعد تسليم المنتج أو تفعيل الترخيص، إلا في الحالات الموضحة في البند الأول أعلاه. يُعدّ تفعيل الترخيص أو تحميل المنتج موافقةً ضمنيةً على هذا الشرط." },
      { heading: "3. المدة الزمنية لتقديم الطلب", body: "يجب تقديم طلب الاسترداد خلال 7 أيام من تاريخ الشراء أو تاريخ اكتشاف المشكلة. لن تُقبل الطلبات المقدمة بعد انقضاء هذه المدة إلا في حالات استثنائية يُقدّرها فريق الدعم." },
      { heading: "4. إجراءات تقديم الطلب", body: "للتقدم بطلب استرداد، يرجى التواصل معنا عبر القنوات الرسمية مع تضمين المعلومات التالية: رقم الطلب أو إثبات الدفع، وصف واضح للمشكلة، ولقطات شاشة أو أي ملفات تساعد في توضيح المشكلة." },
      { heading: "5. مدة المراجعة والتنفيذ", body: "تتم مراجعة طلبات الاسترداد خلال 24 إلى 48 ساعة عمل من استلامها. في حال الموافقة، يُنفَّذ الاسترداد وفق طريقة الدفع الأصلية المستخدمة. قد تتفاوت مدة وصول المبلغ بحسب مزود خدمة الدفع، وقد تصل إلى 5 أيام عمل في بعض الحالات." },
    ],
  },
  en: {
    title: "Refund Policy",
    intro: "We are committed to providing high-quality digital products and ensuring customer satisfaction. This policy explains when a refund may be requested, the procedure, and the approved timeframes to maintain transparency and fairness.",
    items: [
      { heading: "1. Acceptable Refund Cases", body: "A customer may request a refund only if product delivery or access fails after payment, a major technical issue prevents normal use and support cannot resolve it within 48 working hours, or the delivered product differs significantly from what is described on the product page. Each request is reviewed individually, and PANDA Hub may refuse any request that does not meet these conditions." },
      { heading: "2. Digital Products — Important Notice", body: "Because digital products are delivered immediately upon purchase, refund claims are not valid after delivery or activation unless the conditions in section 1 apply. Activating the license or downloading the product is considered implicit acceptance of this condition." },
      { heading: "3. Time Limit for Requests", body: "Refund requests must be submitted within 7 days of purchase or the discovery of the issue. Requests made after this period are generally not accepted unless the support team approves a special case." },
      { heading: "4. Request Procedure", body: "To request a refund, please contact us through the official channels with the following information: order number or proof of payment, a clear description of the issue, and screenshots or documents that help explain the problem." },
      { heading: "5. Review and Execution Time", body: "Refund requests are reviewed within 24 to 48 working hours of receipt. If approved, the refund is processed using the original payment method. Availability may depend on the payment provider and can take up to 5 working days in some cases." },
    ],
  },
};

export default function RefundPolicy() {
  const { language } = useSiteSettings();
  const content = CONTENT[language === "en" ? "en" : "ar"];

  return (
    <>
      <Seo
        title={content.title}
        description={language === "en" ? "Learn the refund terms and procedures for PANDA Hub digital products." : "اعرف الشروط والإجراءات الخاصة باسترداد الأموال عند شراء منتجات PANDA Hub الرقمية."}
        canonicalPath="/refund-policy"
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
