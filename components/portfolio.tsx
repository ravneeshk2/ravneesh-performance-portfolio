"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown, ArrowRight, ArrowUpRight, BarChart3, Check, ChevronDown,
  Compass, LineChart, Mail, Menu, MousePointer2, Target, TrendingUp,
  Users, X, Zap, Layers3, ChartNoAxesCombined, Settings2, Globe2
} from "lucide-react";

const brands = [
  { name: "Schneider Electric", market: "India", type: "B2B + E-commerce", platforms: "Google · Meta · LinkedIn · Pinterest · ChatGPT" },
  { name: "Callsara.ai", market: "United States", type: "B2B Lead Generation", platforms: "Google · Meta · LinkedIn · Microsoft" },
  { name: "healow Genie", market: "United States", type: "B2B Lead Generation", platforms: "Google Ads" },
  { name: "Bounce Back Drinks", market: "United Kingdom", type: "D2C E-commerce", platforms: "Meta Ads" },
  { name: "LK-EA", market: "Market details to confirm", type: "B2B + E-commerce", platforms: "Google · Meta" },
  { name: "Colorbar Cosmetics", market: "India", type: "D2C E-commerce", platforms: "Google · Meta" },
  { name: "Faura", market: "India", type: "D2C E-commerce", platforms: "Meta Ads" },
  { name: "PapayaPads", market: "India", type: "D2C E-commerce", platforms: "Google · Meta" }
];

const projects = [
  { no: "01", name: "Schneider Electric", category: "B2B lead generation + E-commerce", market: "India", channels: ["Google Ads", "Meta Ads", "LinkedIn Ads", "Pinterest Ads", "ChatGPT Ads"], description: "Planning, execution and optimisation across B2B lead generation and e-commerce purchase campaigns for a global energy technology brand.", tone: "lime" },
  { no: "02", name: "Callsara.ai", category: "B2B lead generation", market: "United States", channels: ["Google Ads", "Meta Ads", "LinkedIn Ads", "Microsoft Ads"], description: "Full-funnel paid acquisition for the US market, with a focus on reaching relevant business audiences and generating B2B leads.", tone: "lavender" },
  { no: "03", name: "Colorbar Cosmetics", category: "D2C e-commerce", market: "India", channels: ["Google Ads", "Meta Ads"], description: "E-commerce campaign planning and optimisation across search, Performance Max and social advertising.", tone: "pink" },
  { no: "04", name: "Bounce Back Drinks", category: "D2C e-commerce", market: "United Kingdom", channels: ["Meta Ads"], description: "Paid social campaign management focused on e-commerce purchases in the UK market.", tone: "orange" },
  { no: "05", name: "healow Genie", category: "B2B lead generation", market: "United States", channels: ["Google Ads"], description: "Google Ads planning, execution and optimisation to support B2B lead generation in the US.", tone: "blue" },
  { no: "06", name: "PapayaPads", category: "D2C e-commerce", market: "India", channels: ["Google Ads", "Meta Ads"], description: "Paid acquisition across Google and Meta, supporting online purchase objectives.", tone: "yellow" },
  { no: "07", name: "LK-EA", category: "B2B lead generation + E-commerce", market: "Market details to confirm", channels: ["Google Ads", "Meta Ads"], description: "Campaign planning and optimisation across lead generation and e-commerce objectives.", tone: "mint" },
  { no: "08", name: "Faura", category: "D2C e-commerce", market: "India", channels: ["Meta Ads"], description: "Meta advertising strategy and optimisation for D2C e-commerce growth.", tone: "purple" }
];

const services = [
  { icon: Target, title: "Performance marketing", desc: "End-to-end paid media strategy, campaign setup, management and optimisation aligned with business goals." },
  { icon: Users, title: "B2B lead generation", desc: "Audience research, funnel strategy and lead acquisition campaigns designed to reach relevant decision-makers." },
  { icon: TrendingUp, title: "D2C & e-commerce growth", desc: "Customer acquisition and purchase-focused campaigns across search, shopping and paid social." },
  { icon: Layers3, title: "Media planning & buying", desc: "Channel selection, budget allocation, campaign architecture and media investment planning." },
  { icon: Settings2, title: "Tracking & analytics", desc: "Conversion measurement, UTM structures, attribution and analytics implementation." },
  { icon: ChartNoAxesCombined, title: "Optimisation & reporting", desc: "Performance analysis, structured testing, insight-led improvements and clear reporting." }
];

const skillGroups = [
  { title: "Paid media platforms", items: ["Google Ads", "Meta Ads", "LinkedIn Campaign Manager", "Microsoft Advertising", "Pinterest Ads", "ChatGPT Ads"] },
  { title: "Campaign specialisms", items: ["Search & Shopping", "Performance Max", "Demand Gen", "B2B Lead Generation", "D2C E-commerce", "Remarketing", "Audience Strategy", "Media Planning"] },
  { title: "Analytics & measurement", items: ["Google Analytics 4", "Google Tag Manager", "Looker Studio", "Power BI", "AppsFlyer", "Adjust", "Branch", "Singular", "Kochava", "Firebase"] }
];

const nav = ["About me", "Skills & tools", "Projects", "Services", "Brands", "Contact"];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="topline"><span>INDEPENDENT PERFORMANCE MARKETER</span><span>NEW DELHI, INDIA <i /> AVAILABLE FOR SELECT PROJECTS</span></div>
      <header className="header">
        <a href="#home" className="wordmark" onClick={closeMenu}>RK<span>.</span></a>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          {nav.map((item) => <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} onClick={() => { setActive(item); closeMenu(); }}>{item}</a>)}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>
        <button className="mobile-menu" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-kicker"><span className="status-dot" /> PERFORMANCE MARKETING / MEDIA BUYING</div>
        <div className="hero-grid">
          <div>
            <h1>Making every<br /><span className="serif">click</span> count<span className="lime-dot">.</span></h1>
            <p className="hero-copy">I’m <strong>Ravneesh Kumar</strong> — a performance marketer and media buyer helping brands turn paid media into measurable business growth.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="text-link" href="#contact">Let’s connect <ArrowRight size={16} /></a>
            </div>
            <div className="hero-note"><span>01 / 05</span><span>STRATEGY · EXECUTION · OPTIMISATION</span></div>
          </div>
          <div className="hero-art" aria-label="Abstract campaign performance dashboard illustration">
            <div className="art-top"><span>PAID MEDIA / PERFORMANCE</span><span>LIVE MINDSET ↗</span></div>
            <div className="art-graph">
              <div className="graph-label">GROWTH IS A PROCESS.</div>
              <svg viewBox="0 0 520 300" role="img" aria-label="Abstract upward performance trend line">
                <defs><linearGradient id="fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#d5f36b" stopOpacity=".32"/><stop offset="100%" stopColor="#d5f36b" stopOpacity="0"/></linearGradient></defs>
                {[55,115,175,235].map(y => <line key={y} x1="0" x2="520" y1={y} y2={y} stroke="#ffffff" strokeOpacity=".13" strokeDasharray="4 7" />)}
                <path d="M0 240 C55 225 55 205 105 213 S155 190 190 198 S240 135 285 158 S340 125 375 133 S430 70 465 82 S495 45 520 28 L520 280 L0 280Z" fill="url(#fill)"/>
                <path d="M0 240 C55 225 55 205 105 213 S155 190 190 198 S240 135 285 158 S340 125 375 133 S430 70 465 82 S495 45 520 28" fill="none" stroke="#d5f36b" strokeWidth="4" strokeLinecap="round"/>
                <circle cx="465" cy="82" r="6" fill="#d5f36b"/><circle cx="465" cy="82" r="13" fill="none" stroke="#d5f36b" strokeOpacity=".4"/>
              </svg>
              <div className="graph-foot"><span>INSIGHT → ACTION</span><span>TEST. LEARN. SCALE.</span></div>
            </div>
            <div className="art-bottom"><span>INDIA / US / UK</span><span>01—2026</span></div>
            <div className="art-sticker"><Zap size={17} fill="currentColor" /><span>DATA-LED<br />GROWTH</span></div>
          </div>
        </div>
        <div className="hero-stats">
          <div><strong>3.5+</strong><span>YEARS IN PERFORMANCE</span></div>
          <div><strong>08</strong><span>BRANDS & COUNTING</span></div>
          <div><strong>03</strong><span>MARKETS WORKED IN</span></div>
          <div><strong>06+</strong><span>PAID MEDIA CHANNELS</span></div>
        </div>
        <a className="scroll-cue" href="#about-me"><ArrowDown size={15} /> SCROLL TO EXPLORE</a>
      </section>

      <section className="section section-paper" id="about-me">
        <div className="section-wrap">
          <div className="section-head"><span className="eyebrow">01 / A LITTLE INTRODUCTION</span><span className="section-index">ABOUT ME</span></div>
          <div className="about-grid">
            <h2>Curious by nature.<br /><span className="serif">Performance</span><br />by design.</h2>
            <div className="about-copy">
              <p className="lead">I’m a performance marketer with 3.5+ years of experience planning, executing and optimising paid media campaigns across multiple platforms.</p>
              <p>I work across two key growth areas: <strong>B2B lead generation</strong> and <strong>D2C e-commerce</strong>. My experience spans brands in technology, healthcare, electrical solutions, beverages and beauty — across India, the United States and the United Kingdom.</p>
              <p>From audience research and media planning to campaign execution, conversion tracking and reporting, I connect the dots between marketing activity and business outcomes.</p>
              <p className="about-signoff">Good marketing is measured in outcomes, not just activity.</p>
            </div>
          </div>
          <div className="about-strip"><span>WHAT I BRING TO THE TABLE</span><div><b>Analytical thinking</b><b>Commercial mindset</b><b>Continuous testing</b><b>Clear communication</b></div></div>
        </div>
      </section>

      <section className="section section-dark" id="skills-&-tools">
        <div className="section-wrap">
          <div className="section-head"><span className="eyebrow">02 / MY TOOLKIT</span><span className="section-index">SKILLS & TOOLS</span></div>
          <div className="skills-intro"><h2>The right tools.<br /><span className="serif">Smarter decisions.</span></h2><p>Platforms are only as powerful as the strategy behind them. Here’s the ecosystem I use to plan, measure and optimise campaigns.</p></div>
          <div className="skill-grid">
            {skillGroups.map((group, i) => <div className="skill-card" key={group.title}><span className="skill-no">0{i + 1}</span><h3>{group.title}</h3><div className="tag-list">{group.items.map(item => <span key={item}>{item}</span>)}</div></div>)}
          </div>
          <div className="skill-bottom"><span>ALWAYS LEARNING. ALWAYS TESTING.</span><span>PLATFORM KNOWLEDGE + PERFORMANCE THINKING <ArrowUpRight size={14}/></span></div>
        </div>
      </section>

      <section className="section section-paper projects-section" id="projects">
        <div className="section-wrap">
          <div className="section-head"><span className="eyebrow">03 / SELECTED EXPERIENCE</span><span className="section-index">PROJECTS</span></div>
          <div className="projects-title"><h2>Work that moves<br /><span className="serif">business forward.</span></h2><p>A selection of brands and campaign environments I’ve worked on. Each project reflects planning, execution and ongoing optimisation against its business objective.</p></div>
          <div className="project-list">
            {projects.map(project => <article className="project-row" key={project.no}>
              <span className="project-number">{project.no}</span>
              <div className={`project-mark ${project.tone}`}><span>{project.name.split(/[\s.]/).filter(Boolean).slice(0,2).map(w => w[0]).join("").toUpperCase()}</span></div>
              <div className="project-main"><div className="project-meta">{project.market} <i /> {project.category}</div><h3>{project.name}</h3><p>{project.description}</p><div className="project-tags">{project.channels.map(channel => <span key={channel}>{channel}</span>)}</div></div>
              <ArrowUpRight className="project-arrow" size={22}/>
            </article>)}
          </div>
          <p className="project-disclaimer">Project descriptions summarise my campaign responsibilities. Detailed performance figures can be shared where permitted and verified.</p>
        </div>
      </section>

      <section className="section section-lime" id="services">
        <div className="section-wrap">
          <div className="section-head"><span className="eyebrow">04 / HOW I CAN HELP</span><span className="section-index">SERVICES</span></div>
          <div className="services-intro"><h2>From first click<br />to <span className="serif">real growth.</span></h2><p>Whether the goal is qualified leads or more online purchases, I bring structure, curiosity and performance focus to every campaign.</p></div>
          <div className="service-grid">
            {services.map((service, i) => { const Icon = service.icon; return <div className="service-card" key={service.title}><div className="service-top"><span>0{i + 1}</span><Icon size={23}/></div><h3>{service.title}</h3><p>{service.desc}</p><ArrowUpRight className="service-arrow" size={18}/></div>; })}
          </div>
        </div>
      </section>

      <section className="section section-paper brands-section" id="brands">
        <div className="section-wrap">
          <div className="section-head"><span className="eyebrow">05 / TRUSTED EXPERIENCE</span><span className="section-index">BRANDS</span></div>
          <div className="brands-intro"><h2>Different brands.<br /><span className="serif">Different challenges.</span></h2><p>Experience across business models, categories and markets — with a shared focus on effective paid media.</p></div>
          <div className="brand-grid">
            {brands.map((brand, i) => <div className="brand-card" key={brand.name}><span className="brand-count">0{i + 1}</span><div className="brand-wordmark">{brand.name}</div><div className="brand-type">{brand.type}</div><div className="brand-market">{brand.market}</div><div className="brand-platforms">{brand.platforms}</div></div>)}
          </div>
          <p className="brand-note">Brand names are shown to describe professional experience. This portfolio does not imply endorsement or an official partnership.</p>
        </div>
      </section>

      <section className="section section-dark contact-section" id="contact">
        <div className="section-wrap">
          <div className="section-head"><span className="eyebrow">06 / YOUR NEXT MOVE</span><span className="section-index">CONTACT</span></div>
          <div className="contact-content"><span className="contact-kicker"><span className="status-dot"/> OPEN TO THE RIGHT OPPORTUNITIES</span><h2>Have a growth<br />goal in <span className="serif">mind?</span></h2><p>Let’s talk about how thoughtful media planning and performance marketing can help move your business forward.</p><a className="contact-button" href="mailto:ravneeshk2@gmail.com">Start a conversation <ArrowUpRight size={19}/></a></div>
          <div className="contact-links"><a href="mailto:ravneeshk2@gmail.com"><Mail size={16}/> ravneeshk2@gmail.com</a><a href="https://www.linkedin.com/in/ravneesh-kumar/" target="_blank" rel="noreferrer">LINKEDIN <ArrowUpRight size={14}/></a><span>NEW DELHI, INDIA</span></div>
        </div>
      </section>

      <footer className="footer"><a href="#home" className="wordmark">RK<span>.</span></a><span>BUILT AROUND STRATEGY. DRIVEN BY PERFORMANCE.</span><span>© {new Date().getFullYear()} RAVNEESH KUMAR</span><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
    </main>
  );
}
