/* global React, SITE_DATA, TRANSLATIONS, TECH_GLYPHS, Reveal, SectionHead */
const { useState: useStateS, useEffect: useEffectS, useRef: useRefS, useMemo: useMemoS } = React;

// ===== About + Timeline =====
function AboutSection({ t, lang, timelineStyle }) {
  return (
    <section className="section" id="about">
      <SectionHead num="01" title={t.sections.about} aside={`${SITE_DATA.startedYear}—2026`} />
      <div className="about-grid">
        <Reveal>
          <p className="about-bio">{SITE_DATA.bio[lang]}</p>
          <div className="about-stats">
            <div className="stat-block">
              <div className="v tnum">0{SITE_DATA.yearsExperience}</div>
              <div className="l">{t.about.yearsLabel}</div>
            </div>
            <div className="stat-block">
              <div className="v tnum">{SITE_DATA.projects.length}+</div>
              <div className="l">projects shipped</div>
            </div>
          </div>
        </Reveal>
        <div>
          <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--fg-3)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 24 }}>
            // {t.about.timelineLabel}
          </div>
          {timelineStyle === "vertical" && <TimelineVertical lang={lang} t={t} />}
          {timelineStyle === "horizontal" && <TimelineHorizontal lang={lang} t={t} />}
          {timelineStyle === "layered" && <TimelineLayered lang={lang} t={t} />}
        </div>
      </div>
    </section>
  );
}

function TimelineVertical({ lang, t }) {
  return (
    <Reveal stagger className="tl-vertical">
      {SITE_DATA.timeline.map((item, i) => {
        const isActive = i === SITE_DATA.timeline.length - 1;
        return (
          <div key={item.year} className={`tl-item ${isActive ? "active" : ""}`}>
            <div className="tl-year">{item.year}{isActive && " · " + t.about.activeLabel}</div>
            <div className="tl-role">{item.role[lang]}</div>
            <div className="tl-company">{item.company}</div>
            <div className="tl-summary">{item.summary[lang]}</div>
            <div className="tl-stack">
              {item.stack.map((s) => <span key={s}>{s}</span>)}
            </div>
          </div>
        );
      })}
    </Reveal>
  );
}

function TimelineHorizontal({ lang, t }) {
  const [idx, setIdx] = useStateS(SITE_DATA.timeline.length - 1);
  const items = SITE_DATA.timeline;
  return (
    <Reveal className="tl-horizontal">
      <div className="tl-h-track">
        <div className="tl-h-line" />
        <div className="tl-h-fill" style={{ width: `${(idx / (items.length - 1)) * 100}%` }} />
        {items.map((item, i) => (
          <button
            key={item.year}
            className={`tl-h-marker ${i === idx ? "active" : ""}`}
            style={{ left: `${(i / (items.length - 1)) * 100}%` }}
            onClick={() => setIdx(i)}
            aria-label={String(item.year)}
          >
            <span className="yr">{item.year}</span>
          </button>
        ))}
      </div>
      <div className="tl-h-content">
        <div className="tl-year">{items[idx].year}</div>
        <div className="tl-role">{items[idx].role[lang]}</div>
        <div className="tl-company">{items[idx].company}</div>
        <div className="tl-summary">{items[idx].summary[lang]}</div>
        <div className="tl-stack">
          {items[idx].stack.map((s) => <span key={s}>{s}</span>)}
        </div>
      </div>
    </Reveal>
  );
}

function TimelineLayered({ lang, t }) {
  const [idx, setIdx] = useStateS(SITE_DATA.timeline.length - 1);
  const items = SITE_DATA.timeline;
  return (
    <Reveal className="tl-layered">
      <div className="tl-layered-years">
        {items.map((item, i) => (
          <button key={item.year} className={i === idx ? "active" : ""} onClick={() => setIdx(i)}>
            <span className="bar" />
            <span className="tnum">{item.year}</span>
          </button>
        ))}
      </div>
      <div className="tl-layered-content" key={idx}>
        <div className="tl-year">{items[idx].year}</div>
        <div className="tl-role" style={{ fontSize: 22 }}>{items[idx].role[lang]}</div>
        <div className="tl-company">{items[idx].company}</div>
        <div className="tl-summary">{items[idx].summary[lang]}</div>
        <div className="tl-stack">
          {items[idx].stack.map((s) => <span key={s}>{s}</span>)}
        </div>
      </div>
    </Reveal>
  );
}

// ===== Stack =====
function StackSection({ t }) {
  return (
    <section className="section" id="stack">
      <SectionHead num="02" title={t.sections.stack} aside="// 16 technologies" />
      <Reveal stagger className="stack-grid">
        {Object.entries(SITE_DATA.stack).map(([cat, techs]) => (
          <StackCat key={cat} cat={cat} techs={techs} t={t} />
        ))}
      </Reveal>
    </section>
  );
}

function StackCat({ cat, techs, t }) {
  const ref = useRefS(null);
  useEffectS(() => {
    if (!ref.current) return;
    const el = ref.current;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { el.classList.add("in-view"); io.unobserve(el); }
      });
    }, { threshold: 0.05 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  // proficiency widths per tech (visual heuristic, not literal)
  const widths = { "Angular": 95, "React": 85, "Ionic": 90, "TypeScript": 90, ".NET": 85, "Node.js": 80, "Python": 70, "Java": 65, "SQL Server": 85, "MySQL": 75, "MongoDB": 80, "PostgreSQL": 75, "Azure": 80, "Azure DevOps": 75, "GitHub Actions": 70, "Docker": 70 };
  return (
    <div ref={ref} className="stack-cat">
      <div className="stack-cat-head">
        <span>{t.stack.categories[cat]}</span>
        <span className="count tnum">0{techs.length}</span>
      </div>
      <div className="stack-list">
        {techs.map((tech) => {
          const g = TECH_GLYPHS[tech] || { letter: tech.slice(0, 2) };
          return (
            <div key={tech} className="tech-row">
              <div className="tech-glyph">{g.letter}</div>
              <div className="tech-name">{tech}</div>
              <div className="tech-bar" style={{ "--w": (widths[tech] || 70) + "%" }} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ===== Projects =====
function ProjectsSection({ t, lang }) {
  const [filter, setFilter] = useStateS("All");
  const filters = ["All", "Frontend", "Backend", "Full-Stack", "Mobile"];
  const filtered = useMemoS(() => {
    if (filter === "All") return SITE_DATA.projects;
    return SITE_DATA.projects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <section className="section" id="projects">
      <SectionHead num="03" title={t.sections.projects} aside={`${SITE_DATA.projects.length} total`} />

      <Reveal className="projects-controls">
        <div className="filter-row">
          {filters.map((f) => (
            <button
              key={f}
              className={`filter-btn ${filter === f ? "active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f === "All" ? t.projects.filterAll : (t.projects.filters[f] || f)}
              <span style={{ marginLeft: 6, opacity: 0.6 }}>
                ({f === "All" ? SITE_DATA.projects.length : SITE_DATA.projects.filter(p => p.category === f).length})
              </span>
            </button>
          ))}
        </div>
        <div className="filter-count">
          {t.projects.countLabel} <span style={{ color: "var(--fg)" }}>{filtered.length}</span> / {SITE_DATA.projects.length}
        </div>
      </Reveal>

      <div className="projects-grid">
        {filtered.map((p, i) => (
          <ProjectCard key={p.id} p={p} idx={i} t={t} lang={lang} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ p, idx, t, lang }) {
  const ref = useRefS(null);
  useEffectS(() => {
    if (!ref.current) return;
    const el = ref.current;
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          el.style.transition = `opacity 700ms var(--ease) ${idx * 80}ms, transform 700ms var(--ease) ${idx * 80}ms, border-color var(--t-fast)`;
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          io.unobserve(el);
        }
      });
    }, { threshold: 0.05 });
    io.observe(el);
    return () => io.disconnect();
  }, [idx]);

  return (
    <article ref={ref} className="project-card">
      <div className="project-img">
        <span className="project-img-num">P/{String(p.id).padStart(2, "0")}</span>
        <span className="project-img-label">{p.placeholder}</span>
      </div>
      <div className="project-body">
        <div className="project-meta">
          <span>{p.category}</span>
          <span>0{p.tags.length} TECH</span>
        </div>
        <h3 className="project-title">{p.title}</h3>
        <p className="project-blurb">{p.blurb[lang]}</p>
        <div className="project-tags">
          {p.tags.map((tag) => <span key={tag} className="project-tag">{tag}</span>)}
        </div>
        <div className="project-actions">
          <a className="btn btn-primary" href={p.live} target="_blank" rel="noreferrer">
            {t.projects.live} →
          </a>
          <a className="btn" href={p.source} target="_blank" rel="noreferrer">
            {t.projects.source} ⌘
          </a>
        </div>
      </div>
    </article>
  );
}

// ===== Contact =====
function ContactSection({ t }) {
  const [sent, setSent] = useStateS(false);
  const [form, setForm] = useStateS({ name: "", email: "", message: "" });
  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };
  return (
    <section className="section" id="contact">
      <SectionHead num="04" title={t.sections.contact} aside={`mailto:${SITE_DATA.email}`} />
      <div className="contact-grid">
        <Reveal>
          <h3 className="contact-headline">
            {t.contact.headline.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="accent">{t.contact.headline.split(" ").slice(-1)}</span>
          </h3>
          <p className="contact-sub">{t.contact.sub}</p>
          <div className="contact-find">
            <span>{t.contact.orFind}:</span>
            <a href={SITE_DATA.github}>GitHub ↗</a>
            <a href={SITE_DATA.linkedin}>LinkedIn ↗</a>
            <a href={`mailto:${SITE_DATA.email}`}>Email ↗</a>
          </div>
        </Reveal>
        <Reveal>
          {sent ? (
            <div className="form-sent">✓ {t.contact.sent}</div>
          ) : (
            <form className="form" onSubmit={submit}>
              <div className="field">
                <label>01 / {t.contact.name}</label>
                <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
              </div>
              <div className="field">
                <label>02 / {t.contact.email}</label>
                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
              </div>
              <div className="field">
                <label>03 / {t.contact.message}</label>
                <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
              </div>
              <button className="form-submit" type="submit">
                {t.contact.send} →
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { AboutSection, StackSection, ProjectsSection, ContactSection });
