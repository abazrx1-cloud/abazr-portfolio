/* Coastal Editorial Tech: asymmetrical editorial portfolio, ink/coral/sand palette, DM Serif + Space Grotesk, precise motion. */
import { useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  Code2,
  Cpu,
  ExternalLink,
  Layers3,
  Menu,
  MoveRight,
  Sparkles,
  X,
} from "lucide-react";

const services = [
  { number: "01", title: "تطوير الويب", text: "مواقع حديثة ومتجاوبة وعالية الأداء، تُبنى حول أهدافك واحتياجات جمهورك.", icon: Code2 },
  { number: "02", title: "التجارة الإلكترونية", text: "متاجر إلكترونية احترافية تساعد الأعمال على عرض منتجاتها والوصول إلى العملاء رقميًا.", icon: Layers3 },
  { number: "03", title: "تطبيقات الويب", text: "تطبيقات ويب تفاعلية وقابلة للتوسع، مصممة لاحتياجات الأعمال الواقعية.", icon: Cpu },
  { number: "04", title: "دمج الذكاء الاصطناعي", text: "تقنيات ذكاء اصطناعي حديثة لأتمتة العمليات وتحسين التجارب وتسريع التطوير.", icon: Sparkles },
];

const strengths = [
  ["السرعة", "يجب أن تكون المواقع سريعة ومتجاوبة وسهلة الاستخدام."],
  ["التصميم", "واجهات نظيفة ولافتة وذات حضور بصري راقٍ."],
  ["تجربة المستخدم", "يجب أن يبدو كل تفاعل بسيطًا وبديهيًا."],
  ["الابتكار", "أستكشف التقنيات الحديثة والذكاء الاصطناعي لبناء منتجات أفضل."],
  ["حل المشكلات", "أفهم المشكلة الحقيقية قبل اختيار الحل."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="الصفحة الرئيسية لـ ABAZR">
          <span className="brand-mark"><span /></span>
          <span>ABAZR</span>
        </a>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="التنقل الرئيسي">
          {[["نبذة", "about"], ["الخدمات", "services"], ["المشروع", "project"], ["الذكاء الاصطناعي", "ai"], ["تواصل", "contact"]].map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>
          ))}
        </nav>
        <a className="header-cta" href="#contact">لنتحدث <ArrowUpRight size={16} /></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main>
        <section id="home" className="hero section-frame">
          <div className="hero-visual" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> مطوّر مستقل · بورتسودان، السودان</p>
            <h1>أبني تجارب<br /><em>رقمية</em> لها<br />معنى.</h1>
            <p className="hero-lede">مطوّر ويب واختصاصي ذكاء اصطناعي، أصنع منتجات سريعة وجميلة وذكية للأفكار الطموحة.</p>
            <div className="hero-actions">
              <a className="button button-coral" href="#contact">ابدأ مشروعك <MoveRight size={17} /></a>
              <a className="text-link" href="#project">استكشف أعمالي <ArrowUpRight size={16} /></a>
            </div>
          </div>
          <div className="hero-aside">
            <span className="vertical-label">ويب · ذكاء اصطناعي · تجارب رقمية</span>
            <div className="hero-index">01 <span>/ 06</span></div>
            <p>من فكرة<br />إلى منتج رقمي.</p>
          </div>
          <div className="scroll-cue"><span /> مرّر للاستكشاف</div>
        </section>

        <section id="about" className="about section-frame split-section">
          <div className="section-kicker"><span>02</span><span>نبذة</span></div>
          <div className="about-content">
            <p className="section-intro">أحوّل الأفكار إلى <strong>تجارب رقمية واقعية</strong> — من التصوّر الأول إلى منتج متكامل وقابل للاستخدام.</p>
            <div className="about-columns">
              <p>أنا أبازر ميرغني، مطوّر مستقل أركّز على تطوير الويب والمنتجات الرقمية الحديثة والذكاء الاصطناعي. أعمل مع الشركات وروّاد الأعمال والمشاريع في السوق السوداني وخارجه.</p>
              <p>أجمع في منهجي بين التصميم النظيف والأداء وسهولة الاستخدام والتقنية، لصناعة منتجات لافتة بصريًا وعملية وقابلة للنمو.</p>
            </div>
            <a className="text-link" href="#contact">تعرّف إلى منهجي <ArrowUpRight size={16} /></a>
          </div>
        </section>

        <section id="services" className="services section-frame">
          <div className="section-heading">
            <div className="section-kicker"><span>03</span><span>ماذا أقدّم</span></div>
            <h2>الأفكار تستحق<br /><em>تنفيذًا متقنًا.</em></h2>
          </div>
          <div className="service-list">
            {services.map(({ number, title, text, icon: Icon }) => (
              <article className="service-row" key={number}>
                <div className="service-number">{number}</div>
                <Icon className="service-icon" size={25} strokeWidth={1.4} />
                <h3>{title}</h3>
                <p>{text}</p>
                <ArrowUpRight className="service-arrow" size={20} />
              </article>
            ))}
          </div>
        </section>

        <section id="project" className="project section-frame">
          <div className="section-kicker light"><span>04</span><span>مشروع مميز</span></div>
          <div className="project-layout">
            <div className="project-copy">
              <p className="project-label">سوق رقمي صُمّم للنمو</p>
              <h2>Nile<br /><em>Market</em></h2>
              <p className="project-description">مفهوم سوق رقمي حديث يربط التجار والعملاء عبر تجربة تسوّق إلكترونية أبسط.</p>
              <div className="project-tags"><span>سوق رقمي</span><span>تجارة إلكترونية</span><span>السودان</span></div>
              <a className="button button-outline" href="https://nilemarket.whacka.app" target="_blank" rel="noreferrer">زيارة المشروع <ExternalLink size={16} /></a>
            </div>
            <div className="project-art"><img src="/manus-storage/nile-market_da54a745.jpg" alt="مفهوم سوق Nile Market الرقمي" /><div className="art-caption">NILE MARKET <span>2024 — مستمر</span></div></div>
          </div>
        </section>

        <section id="ai" className="ai-section section-frame split-section">
          <div className="ai-art"><img src="/manus-storage/ai-signal_395d2501.jpg" alt="إشارة تجريدية متدفقة للذكاء الاصطناعي" /></div>
          <div className="ai-copy"><div className="section-kicker"><span>05</span><span>التقنية والذكاء الاصطناعي</span></div><h2>أدوات تصنع<br /><em>أشياء أفضل.</em></h2><p>الذكاء الاصطناعي ليس بديلًا عن الإبداع؛ بل أداة قوية لاستكشاف الأفكار وحل التحديات التقنية وبناء تجارب رقمية أذكى بسرعة أكبر.</p><a className="text-link" href="#contact">لنستكشف الممكن <ArrowUpRight size={16} /></a></div>
        </section>

        <section className="strengths section-frame">
          <div className="section-kicker"><span>06</span><span>نقاط القوة</span></div>
          <div className="strengths-content"><h2>التفاصيل هي<br /><em>الفارق.</em></h2><div className="strength-list">{strengths.map(([title, text]) => <div className="strength-item" key={title}><h3>{title}</h3><p>{text}</p></div>)}</div></div>
        </section>

        <section id="contact" className="contact section-frame">
          <div className="contact-top"><span>لديك فكرة؟</span><span className="contact-line" /></div>
          <h2>لنبنِ<br /><em>شيئًا رائعًا.</em></h2>
          <p>هل لديك فكرة لموقع أو متجر إلكتروني أو تطبيق ويب أو منتج مدعوم بالذكاء الاصطناعي؟ لِنحوّل فكرتك إلى واقع.</p>
          <a className="contact-email" href="mailto:hello@abazr.dev">hello@abazr.dev <ArrowUpRight size={27} /></a>
          <div className="contact-meta"><span>ABAZR MIRGHANI</span><span>مقرّي في بورتسودان، السودان</span><span>تطوير الويب · الذكاء الاصطناعي · التجارب الرقمية</span></div>
        </section>
      </main>

      <footer className="footer"><span>© 2024 ABAZR</span><span>صُنع بقصد.</span><a href="#home">العودة إلى الأعلى <ChevronDown size={16} className="rotate" /></a></footer>
    </div>
  );
}
