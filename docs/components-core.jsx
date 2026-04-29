/* global React, SITE_DATA, TRANSLATIONS, TECH_GLYPHS */
const { useState, useEffect, useRef, useMemo } = React;

// ===== Reveal hook =====
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const reveal = () => el.classList.add("in-view");
    const check = () => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) reveal();
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { reveal(); io.unobserve(el); } });
    }, { threshold: 0.05 });
    io.observe(el);
    check();
    window.addEventListener("scroll", check, { passive: true });
    const fallback = setTimeout(reveal, 1200);
    return () => { io.disconnect(); window.removeEventListener("scroll", check); clearTimeout(fallback); };
  }, []);
  return ref;
}

function Reveal({ children, stagger, className = "", ...rest }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`${stagger ? "reveal-stagger" : "reveal"} ${className}`} {...rest}>
      {children}
    </div>
  );
}

// ===== Nav =====
function Nav({ t, lang, setLang, mode, setMode, active }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onS = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onS, { passive: true });
    return () => window.removeEventListener("scroll", onS);
  }, []);
  const items = [
    { id: "about", label: t.nav.about, num: "01" },
    { id: "stack", label: t.nav.stack, num: "02" },
    { id: "projects", label: t.nav.projects, num: "03" },
    { id: "contact", label: t.nav.contact, num: "04" },
  ];
  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <a href="#top" className="nav-brand">
        <span className="dot" />
        <span className="mono">LC</span>
        <span style={{ color: "var(--fg-3)" }}>/ {SITE_DATA.role.toLowerCase()}</span>
      </a>
      <div className="nav-links">
        {items.map((i) => (
          <a key={i.id} href={`#${i.id}`} className={active === i.id ? "active" : ""}>
            <span className="num">{i.num}</span>{i.label}
          </a>
        ))}
      </div>
      <div className="nav-actions">
        <button className="nav-btn" onClick={() => setLang(lang === "en" ? "es" : "en")} title="Language">
          {lang.toUpperCase()}
        </button>
        <button className="nav-btn" onClick={() => setMode(mode === "dark" ? "light" : "dark")} title="Theme">
          {mode === "dark" ? "☾" : "☀"}
        </button>
      </div>
    </nav>
  );
}

// ===== Hero =====
function Hero({ t, lang, layout, taglineIdx }) {
  const tagline = SITE_DATA.taglines[lang][taglineIdx] || SITE_DATA.taglines[lang][0];
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const utc = now.toUTCString().split(" ")[4];

  // Centered (default)
  if (layout === "centered") {
    return (
      <section className="hero" data-layout="centered" id="top">
        <div>
          <div className="hero-meta">
            <span className="live">{t.hero.available}</span>
            <span>{SITE_DATA.location}</span>
            <span className="tnum">UTC {utc}</span>
          </div>
          <h1>
            <span>Luis</span><br />
            <span className="indent">Chiquito<span className="accent">.</span></span>
          </h1>
          <p className="hero-tagline"><span className="arrow">→</span>{tagline}</p>
          <HeroBottom t={t} />
        </div>
      </section>
    );
  }

  if (layout === "split") {
    return (
      <section className="hero" data-layout="split" id="top">
        <div>
          <div className="hero-meta"><span className="live">{t.hero.available}</span></div>
          <h1>Luis<br/>Chiquito<span className="accent">.</span></h1>
        </div>
        <div>
          <p className="hero-tagline"><span className="arrow">→</span>{tagline}</p>
          <HeroBottom t={t} compact />
        </div>
      </section>
    );
  }

  if (layout === "indexed") {
    return (
      <section className="hero" data-layout="indexed" id="top">
        <div className="hero-side">
          <span>{t.hero.index} · 2021—2026 · {String(SITE_DATA.yearsExperience).padStart(2,'0')} YRS</span>
        </div>
        <div>
          <div className="hero-meta">
            <span className="live">{t.hero.available}</span>
            <span>{SITE_DATA.location}</span>
            <span className="tnum">UTC {utc}</span>
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 24, flexWrap: "wrap" }}>
            <span className="mono" style={{ color: "var(--accent)", fontSize: 14 }}>00 /</span>
            <h1 style={{ fontSize: "clamp(48px, 10vw, 180px)" }}>
              Luis<br/>Chiquito<span className="accent">.</span>
            </h1>
          </div>
          <p className="hero-tagline"><span className="arrow">→</span>{tagline}</p>
          <HeroBottom t={t} />
        </div>
      </section>
    );
  }

  // marquee variant
  return (
    <section className="hero" data-layout="marquee" id="top">
      <div>
        <div className="hero-meta">
          <span className="live">{t.hero.available}</span>
          <span>{SITE_DATA.location}</span>
          <span className="tnum">UTC {utc}</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 32, alignItems: "end" }}>
          <h1 style={{ fontSize: "clamp(64px, 14vw, 260px)" }}>
            Luis<br/>Chiquito<span className="accent">.</span>
          </h1>
          <div style={{ borderLeft: "1px solid var(--line-soft)", paddingLeft: 18, fontFamily: "var(--mono)", fontSize: 12, color: "var(--fg-3)", letterSpacing: "0.08em", textTransform: "uppercase", lineHeight: 1.8, alignSelf: "stretch", display: "flex", flexDirection: "column", justifyContent: "end" }}>
            <div>SOFTWARE</div>
            <div>ENGINEER</div>
            <div style={{ color: "var(--accent)" }}>EST. 2021</div>
          </div>
        </div>
        <p className="hero-tagline"><span className="arrow">→</span>{tagline}</p>
        <HeroBottom t={t} />
      </div>
    </section>
  );
}

function HeroBottom({ t, compact }) {
  return (
    <div className="hero-bottom" style={compact ? { marginTop: 32 } : {}}>
      <div className="stat">
        <span className="v tnum">{String(SITE_DATA.yearsExperience).padStart(2,'0')}</span>
        <span>YEARS · since {SITE_DATA.startedYear}</span>
      </div>
      <div className="stat">
        <span className="v tnum">04</span>
        <span>BACKEND LANGS</span>
      </div>
      <div className="stat" style={{ alignItems: "flex-end", textAlign: "right" }}>
        <span className="v">↓</span>
        <span>{t.hero.scroll}</span>
      </div>
    </div>
  );
}

// ===== Marquee row =====
function Marquee() {
  const all = [
    ...SITE_DATA.stack.Frontend,
    ...SITE_DATA.stack.Backend,
    ...SITE_DATA.stack.Databases,
    ...SITE_DATA.stack["Cloud & DevOps"],
  ];
  const items = [...all, ...all]; // duplicate for seamless loop
  return (
    <div className="marquee">
      <div className="marquee-track">
        {items.map((s, i) => (
          <span key={i}>
            <span className="dot">●</span>&nbsp;{s}
          </span>
        ))}
      </div>
    </div>
  );
}

// ===== Section header =====
function SectionHead({ num, title, aside }) {
  return (
    <Reveal className="section-head">
      <span className="section-num">{num}</span>
      <h2 className="section-title">{title}</h2>
      {aside ? <span className="section-aside">{aside}</span> : <span />}
    </Reveal>
  );
}

Object.assign(window, { useReveal, Reveal, Nav, Hero, Marquee, SectionHead });
