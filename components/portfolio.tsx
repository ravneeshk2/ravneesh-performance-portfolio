"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight, Mail, Menu, X, MessageCircle, Linkedin,
  Target, Users, TrendingUp, Layers3, Settings2, ChartNoAxesCombined, UserPlus
} from "lucide-react";

const WHATSAPP = "https://wa.me/917982261772?text=Hi%20Ravneesh%2C%20I%20visited%20your%20portfolio.";
const EMAIL = "mailto:ravneeshk2@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/ravneesh-kumar/";

type Brand = {
  slug: string; logo?: string; bleed?: boolean; tileBg?: string; name: string; domain: string; url: string; market: string;
  category: string; channels: string[]; description: string;
};

const brands: Brand[] = [
  { slug: "schneider-electric", logo: "/logos/schneider-electric.png", bleed: true, name: "Schneider Electric", domain: "se.com", url: "https://www.se.com/in/en/", market: "India", category: "B2B leads, B2C leads and e-commerce", channels: ["Google Ads", "Meta Ads", "LinkedIn Ads", "Pinterest Ads", "ChatGPT Ads"], description: "Planning, execution and optimisation across B2B lead generation, B2C lead generation and e-commerce purchase campaigns for a global energy technology brand." },
  { slug: "callsara", logo: "/logos/callsara.svg", name: "Callsara.ai", domain: "callsara.ai", url: "https://www.callsara.ai/", market: "United States", category: "B2B lead generation", channels: ["Google Ads", "Meta Ads", "LinkedIn Ads", "Microsoft Ads"], description: "Full-funnel paid acquisition for the US market, reaching relevant business audiences and generating B2B leads." },
  { slug: "colorbar", logo: "/logos/colorbar.png", tileBg: "linear-gradient(135deg, #9B3E01, #C55603)", name: "Colorbar Cosmetics", domain: "colorbarcosmetics.com", url: "https://colorbarcosmetics.com/", market: "India", category: "D2C e-commerce", channels: ["Google Ads", "Meta Ads"], description: "E-commerce campaign planning and optimisation across Search, Performance Max and social advertising." },
  { slug: "bounce-back", logo: "/logos/bounce-back.png", name: "Bounce Back Drinks", domain: "bouncebackdrinks.com", url: "https://bouncebackdrinks.com/", market: "United Kingdom", category: "D2C e-commerce", channels: ["Meta Ads"], description: "Paid social campaign management focused on e-commerce purchases in the UK market." },
  { slug: "healow-genie", logo: "/logos/healow-genie.png", name: "healow Genie", domain: "healow.com", url: "https://genie.healow.com/", market: "United States", category: "B2B lead generation", channels: ["Google Ads"], description: "Google Ads planning, execution and optimisation to support B2B lead generation in the US." },
  { slug: "papaya-pads", logo: "/logos/papaya-pads.png", name: "Papaya Pads", domain: "papayapads.com", url: "https://www.papayapads.com/", market: "India", category: "D2C e-commerce", channels: ["Google Ads", "Meta Ads"], description: "Paid acquisition across Google and Meta, supporting online purchase objectives for a plastic-free period care brand." },
  { slug: "faura", logo: "/logos/faura.png", name: "Faura", domain: "faura.in", url: "https://www.faura.in/", market: "India", category: "D2C e-commerce", channels: ["Meta Ads"], description: "Meta advertising strategy and optimisation for D2C e-commerce growth." }
];

const services = [
  { icon: Target, title: "Performance marketing", desc: "End-to-end paid media strategy, campaign setup, management and optimisation tied to business goals." },
  { icon: Users, title: "B2B lead generation", desc: "Audience research, funnel strategy and lead campaigns built to reach the right decision-makers." },
  { icon: UserPlus, title: "B2C lead generation", desc: "Consumer lead campaigns that capture enquiries, registrations and qualified prospects." },
  { icon: TrendingUp, title: "D2C and e-commerce growth", desc: "Customer acquisition and purchase campaigns across search, shopping and paid social." },
  { icon: Layers3, title: "Media planning and buying", desc: "Channel selection, budget allocation, campaign structure and media investment plans." },
  { icon: Settings2, title: "Tracking and analytics", desc: "Conversion tracking, UTM structures, attribution and analytics setup." },
  { icon: ChartNoAxesCombined, title: "Optimisation and reporting", desc: "Performance analysis, structured testing and clear reports with next steps." }
];

const skillGroups = [
  { title: "Ad platforms", items: ["Google Ads", "Meta Ads", "LinkedIn Campaign Manager", "Microsoft Advertising", "Pinterest Ads", "ChatGPT Ads"] },
  { title: "Campaign types", items: ["Search and Shopping", "Performance Max", "Demand Gen", "B2B lead generation", "D2C e-commerce", "Remarketing", "Audience strategy", "Media planning"] },
  { title: "Analytics and measurement", items: ["Google Analytics 4", "Google Tag Manager", "Looker Studio", "Power BI", "AppsFlyer", "Adjust", "Branch", "Singular", "Kochava", "Firebase"] }
];

const nav = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" }
];

/* Uses the file in /public/logos, then the brand's website icon, then initials */
function BrandLogo({ brand, size = "md" }: { brand: Brand; size?: "md" | "lg" }) {
  const sources = [
    ...(brand.logo ? [brand.logo] : []),
    `https://www.google.com/s2/favicons?domain=${brand.domain}&sz=128`
  ];
  const [i, setI] = useState(0);
  const imgRef = useRef<HTMLImageElement>(null);
  // Catch images that failed before React hydrated (onError would be missed)
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setI(n => n + 1);
  }, [i]);
  const initials = brand.name.split(/[\s.]/).filter(Boolean).slice(0, 2).map(w => w[0]).join("").toUpperCase();
  return (
    <span className={`logo-tile logo-${size}${brand.bleed && i === 0 ? " logo-bleed" : ""}${brand.tileBg && i === 0 ? " logo-filled" : ""}`} style={brand.tileBg && i === 0 ? { background: brand.tileBg } : undefined}>
      {i < sources.length
        ? <img ref={imgRef} src={sources[i]} alt={`${brand.name} logo`} loading="lazy" onError={() => setI(i + 1)} />
        : <span className="logo-initials" aria-label={brand.name}>{initials}</span>}
    </span>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <main>
      <header className="header">
        <div className="wrap header-inner">
          <a href="#top" className="wordmark" onClick={close}>Ravneesh Kumar</a>
          <nav className={menuOpen ? "nav nav-open" : "nav"} aria-label="Main">
            {nav.map(item => <a key={item.href} href={item.href} onClick={close}>{item.label}</a>)}
            <a className="btn btn-small btn-primary" href={WHATSAPP} target="_blank" rel="noreferrer" onClick={close}>Let’s talk</a>
          </nav>
          <button className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <section className="hero wrap" id="top">
        <div className="hero-text">
          <p className="kicker">Performance marketer and media buyer in New Delhi</p>
          <h1>Ravneesh<br />Kumar</h1>
          <p className="hero-lead">I plan, buy and optimise paid media that brings in B2B leads, B2C leads and e-commerce sales for brands in India, the US and the UK.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#work">View my work</a>
            <a className="btn btn-ghost" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Chat on WhatsApp</a>
          </div>
        </div>
        <figure className="portrait">
          <img src="/ravneesh-portrait.jpg" alt="Ravneesh Kumar, performance marketer and media buyer" width={960} height={1200} />
          <figcaption className="availability"><span className="dot" /> Open to new projects and roles</figcaption>
        </figure>
      </section>

      <section className="wrap facts" aria-label="At a glance">
        <div><strong>3.5+ years</strong><span>in performance marketing</span></div>
        <div><strong>{brands.length} brands</strong><span>across B2B and D2C</span></div>
        <div><strong>3 markets</strong><span>India, US and UK</span></div>
        <div><strong>6+ platforms</strong><span>from Google to ChatGPT Ads</span></div>
      </section>

      <section className="wrap logo-strip" id="brands" aria-labelledby="brands-h">
        <h2 id="brands-h" className="strip-title">Brands I’ve run paid media for</h2>
        <ul>
          {brands.map(b => <li key={b.slug}><BrandLogo brand={b} /><span>{b.name}</span></li>)}
        </ul>
      </section>

      <section className="section" id="about">
        <div className="wrap about">
          <h2>Curious by nature. Performance by design.</h2>
          <div className="about-copy">
            <p className="lead">I’m a performance marketer with 3.5+ years of experience planning, running and optimising paid media across Google, Meta, LinkedIn, Microsoft, Pinterest and ChatGPT Ads.</p>
            <p>I work in two growth areas: <strong>lead generation</strong> (B2B and B2C) and <strong>D2C e-commerce</strong>. My work spans technology, healthcare, electrical, beverage and beauty brands across India, the United States and the United Kingdom.</p>
            <p>From audience research and media plans to launch, conversion tracking and reporting, I connect what we spend on ads to what the business gets back.</p>
            <ul className="strengths">
              <li>Analytical thinking</li><li>Commercial mindset</li><li>Continuous testing</li><li>Clear communication</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="work">
        <div className="wrap">
          <div className="section-intro">
            <h2>Selected work</h2>
            <p>For each brand I planned, launched and optimised the paid media against its business goal. Detailed results can be shared where clients allow.</p>
          </div>
          <div className="work-list">
            {brands.map(b => (
              <article className="work-row" key={b.slug}>
                <BrandLogo brand={b} size="lg" />
                <div className="work-head">
                  <h3><a href={b.url} target="_blank" rel="noreferrer">{b.name} <ArrowUpRight size={18} aria-hidden="true" /></a></h3>
                  <p className="work-meta">{b.market}<br />{b.category}</p>
                </div>
                <div className="work-body">
                  <p>{b.description}</p>
                  <ul className="chips">{b.channels.map(c => <li key={c}>{c}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark" id="skills">
        <div className="wrap">
          <div className="section-intro">
            <h2>Skills and tools</h2>
            <p>Platforms are only as good as the strategy behind them. These are the tools I use to plan, measure and optimise campaigns.</p>
          </div>
          <div className="skill-grid">
            {skillGroups.map(g => (
              <div className="skill-group" key={g.title}>
                <h3>{g.title}</h3>
                <ul className="chips chips-dark">{g.items.map(item => <li key={item}>{item}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="wrap">
          <div className="section-intro">
            <h2>How I can help</h2>
            <p>Whether the goal is qualified leads or more online sales, I bring structure, curiosity and a focus on results to every campaign.</p>
          </div>
          <div className="service-grid">
            {services.map(s => {
              const Icon = s.icon;
              return (
                <div className="service" key={s.title}>
                  <span className="service-icon"><Icon size={22} aria-hidden="true" /></span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="wrap contact-inner">
          <img className="contact-avatar" src="/ravneesh-headshot.jpg" alt="" width={120} height={120} />
          <h2>Have a growth goal in mind?</h2>
          <p>Let’s talk about how focused media planning and performance marketing can move your business forward.</p>
          <div className="contact-actions">
            <a className="btn btn-whatsapp" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp +91 79822 61772</a>
            <a className="btn btn-light" href={EMAIL}><Mail size={18} /> ravneeshk2@gmail.com</a>
            <a className="btn btn-outline-light" href={LINKEDIN} target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap footer-inner">
          <span>© {new Date().getFullYear()} Ravneesh Kumar, New Delhi</span>
          <span>Brand names describe professional experience and don’t imply endorsement.</span>
        </div>
      </footer>

      <a className="whatsapp-float" href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Chat with Ravneesh on WhatsApp">
        <MessageCircle size={22} />
      </a>
    </main>
  );
}
