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
  { number: "01", title: "Web Development", text: "Modern, responsive, and high-performance websites built around your goals and audience.", icon: Code2 },
  { number: "02", title: "E-Commerce", text: "Professional online stores designed to help businesses showcase products and reach customers digitally.", icon: Layers3 },
  { number: "03", title: "Web Applications", text: "Interactive and scalable web applications designed for real-world business needs.", icon: Cpu },
  { number: "04", title: "AI Integration", text: "Modern AI technologies that automate processes, improve experiences, and accelerate development.", icon: Sparkles },
];

const strengths = [
  ["Speed", "Websites should feel fast, responsive, and effortless to use."],
  ["Design", "Interfaces that are clean, memorable, and visually premium."],
  ["User Experience", "Every interaction should feel simple and intuitive."],
  ["Innovation", "Exploring modern technologies and AI to build better products."],
  ["Problem Solving", "Understanding the real problem before choosing the solution."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="ABAZR home">
          <span className="brand-mark"><span /></span>
          <span>ABAZR</span>
        </a>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
          {[["About", "about"], ["Services", "services"], ["Project", "project"], ["AI", "ai"], ["Contact", "contact"]].map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>
          ))}
        </nav>
        <a className="header-cta" href="#contact">Let&apos;s talk <ArrowUpRight size={16} /></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main>
        <section id="home" className="hero section-frame">
          <div className="hero-visual" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> Independent developer · Port Sudan, Sudan</p>
            <h1>Building digital<br /><em>experiences</em> with<br />purpose.</h1>
            <p className="hero-lede">Web Developer &amp; AI Specialist creating fast, beautiful, and intelligent products for ambitious ideas.</p>
            <div className="hero-actions">
              <a className="button button-coral" href="#contact">Start a project <MoveRight size={17} /></a>
              <a className="text-link" href="#project">Explore the work <ArrowUpRight size={16} /></a>
            </div>
          </div>
          <div className="hero-aside">
            <span className="vertical-label">WEB · AI · DIGITAL EXPERIENCES</span>
            <div className="hero-index">01 <span>/ 06</span></div>
            <p>From an idea<br />to a digital product.</p>
          </div>
          <div className="scroll-cue"><span /> Scroll to explore</div>
        </section>

        <section id="about" className="about section-frame split-section">
          <div className="section-kicker"><span>02</span><span>About</span></div>
          <div className="about-content">
            <p className="section-intro">I turn ideas into <strong>real-world digital experiences</strong> — from the first concept to a complete, functional product.</p>
            <div className="about-columns">
              <p>I&apos;m Abazr Mirghani, an independent developer focused on web development, modern digital products, and artificial intelligence. I work with businesses, entrepreneurs, and projects within the Sudanese market and beyond.</p>
              <p>My approach combines clean design, performance, usability, and technology to create products that are not only visually impressive, but practical and scalable.</p>
            </div>
            <a className="text-link" href="#contact">More about my approach <ArrowUpRight size={16} /></a>
          </div>
        </section>

        <section id="services" className="services section-frame">
          <div className="section-heading">
            <div className="section-kicker"><span>03</span><span>What I do</span></div>
            <h2>Ideas deserve<br /><em>good execution.</em></h2>
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
          <div className="section-kicker light"><span>04</span><span>Featured project</span></div>
          <div className="project-layout">
            <div className="project-copy">
              <p className="project-label">A marketplace made for momentum</p>
              <h2>Nile<br /><em>Market</em></h2>
              <p className="project-description">A modern digital marketplace concept designed to connect merchants and customers through a simpler online shopping experience.</p>
              <div className="project-tags"><span>Marketplace</span><span>E-commerce</span><span>Sudan</span></div>
              <a className="button button-outline" href="https://nilemarket.whacka.app" target="_blank" rel="noreferrer">Visit project <ExternalLink size={16} /></a>
            </div>
            <div className="project-art"><img src="/manus-storage/nile-market_da54a745.jpg" alt="Nile Market digital marketplace concept" /><div className="art-caption">NILE MARKET <span>2024 — ongoing</span></div></div>
          </div>
        </section>

        <section id="ai" className="ai-section section-frame split-section">
          <div className="ai-art"><img src="/manus-storage/ai-signal_395d2501.jpg" alt="Abstract flowing AI signal" /></div>
          <div className="ai-copy"><div className="section-kicker"><span>05</span><span>Technology &amp; AI</span></div><h2>Tools that make<br /><em>better things.</em></h2><p>AI is not a replacement for creativity. It&apos;s a powerful tool for exploring ideas, solving technical challenges, and building smarter digital experiences faster.</p><a className="text-link" href="#contact">Let&apos;s explore what&apos;s possible <ArrowUpRight size={16} /></a></div>
        </section>

        <section className="strengths section-frame">
          <div className="section-kicker"><span>06</span><span>Core strengths</span></div>
          <div className="strengths-content"><h2>The details are<br /><em>the difference.</em></h2><div className="strength-list">{strengths.map(([title, text]) => <div className="strength-item" key={title}><h3>{title}</h3><p>{text}</p></div>)}</div></div>
        </section>

        <section id="contact" className="contact section-frame">
          <div className="contact-top"><span>Have an idea?</span><span className="contact-line" /></div>
          <h2>Let&apos;s build<br /><em>something great.</em></h2>
          <p>Have an idea for a website, online store, web application, or AI-powered product? Let&apos;s turn your idea into something real.</p>
          <a className="contact-email" href="mailto:hello@abazr.dev">hello@abazr.dev <ArrowUpRight size={27} /></a>
          <div className="contact-meta"><span>ABAZR MIRGHANI</span><span>Based in Port Sudan, Sudan</span><span>Web Development · AI · Digital Experiences</span></div>
        </section>
      </main>

      <footer className="footer"><span>© 2024 ABAZR</span><span>Built with intent.</span><a href="#home">Back to top <ChevronDown size={16} className="rotate" /></a></footer>
    </div>
  );
}
