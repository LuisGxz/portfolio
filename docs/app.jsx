/* global React, ReactDOM, SITE_DATA, TRANSLATIONS, useTweaks, TweaksPanel, TweakSection, TweakSlider, TweakRadio, TweakSelect, TweakToggle, TweakColor,
   Nav, Hero, Marquee, AboutSection, StackSection, ProjectsSection, ContactSection */

const { useState: useStateA, useEffect: useEffectA } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "lang": "en",
  "mode": "dark",
  "accent": "emerald",
  "heroLayout": "centered",
  "timelineStyle": "vertical",
  "anim": "expressive",
  "density": "comfy",
  "body": "sans",
  "taglineIdx": 0
}/*EDITMODE-END*/;

const ACCENTS = {
  emerald: "oklch(0.72 0.16 155)",
  violet:  "oklch(0.68 0.18 295)",
  amber:   "oklch(0.78 0.16 80)",
  blue:    "oklch(0.68 0.18 245)",
  red:     "oklch(0.66 0.20 25)",
  mono:    "oklch(0.85 0 0)",
};

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [active, setActive] = useStateA("about");
  const [progress, setProgress] = useStateA(0);
  const t = TRANSLATIONS[tweaks.lang] || TRANSLATIONS.en;

  // Apply HTML data attributes for CSS theming
  useEffectA(() => {
    const html = document.documentElement;
    html.setAttribute("data-mode", tweaks.mode);
    html.setAttribute("data-anim", tweaks.anim);
    html.setAttribute("data-density", tweaks.density);
    html.setAttribute("data-body", tweaks.body);
    html.setAttribute("lang", tweaks.lang);

    const c = ACCENTS[tweaks.accent] || ACCENTS.emerald;
    // Parse oklch( L C H ) so we can rebuild soft and line variants
    const m = /oklch\(([\d.]+)\s+([\d.]+)\s+([\d.]+)\)/.exec(c);
    document.documentElement.style.setProperty("--accent", c);
    if (m) {
      const [, L, C, H] = m;
      document.documentElement.style.setProperty("--accent-soft", `oklch(${L} ${C} ${H} / 0.14)`);
      document.documentElement.style.setProperty("--accent-line", `oklch(${L} ${C} ${H} / 0.4)`);
    }
  }, [tweaks]);

  // Scroll-spy + progress
  useEffectA(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const p = max > 0 ? (h.scrollTop / max) * 100 : 0;
      setProgress(p);

      const sections = ["about", "stack", "projects", "contact"];
      let cur = "about";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 200) cur = id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Smooth scroll for anchor clicks
  useEffectA(() => {
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const href = a.getAttribute("href");
      if (href === "#" || href.length < 2) return;
      const el = document.querySelector(href);
      if (!el) return;
      e.preventDefault();
      window.scrollTo({ top: el.offsetTop - 60, behavior: "smooth" });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <React.Fragment>
      <div className="grid-bg" />
      <div className="scroll-prog" style={{ "--prog": progress + "%" }} />

      <Nav
        t={t}
        lang={tweaks.lang}
        setLang={(v) => setTweak("lang", v)}
        mode={tweaks.mode}
        setMode={(v) => setTweak("mode", v)}
        active={active}
      />

      <main className="shell">
        <Hero t={t} lang={tweaks.lang} layout={tweaks.heroLayout} taglineIdx={tweaks.taglineIdx} />
        <Marquee />
        <AboutSection t={t} lang={tweaks.lang} timelineStyle={tweaks.timelineStyle} />
        <StackSection t={t} />
        <ProjectsSection t={t} lang={tweaks.lang} />
        <ContactSection t={t} />

        <footer className="footer">
          <span>© 2026 Luis Chiquito</span>
          <span>{t.footer.built}</span>
        </footer>
      </main>

      <TweaksPanel title={t.tweaks.title}>
        <TweakSection title="Content">
          <TweakRadio
            label={t.tweaks.lang}
            value={tweaks.lang}
            options={[{ value: "en", label: "EN" }, { value: "es", label: "ES" }]}
            onChange={(v) => setTweak("lang", v)}
          />
          <TweakRadio
            label={t.tweaks.mode}
            value={tweaks.mode}
            options={[{ value: "dark", label: "Dark" }, { value: "light", label: "Light" }]}
            onChange={(v) => setTweak("mode", v)}
          />
          <TweakSelect
            label={t.tweaks.tagline}
            value={String(tweaks.taglineIdx)}
            options={SITE_DATA.taglines[tweaks.lang].map((tg, i) => ({
              value: String(i),
              label: `${i + 1}. ${tg.length > 38 ? tg.slice(0, 36) + "…" : tg}`,
            }))}
            onChange={(v) => setTweak("taglineIdx", Number(v))}
          />
        </TweakSection>

        <TweakSection title="Layout">
          <TweakRadio
            label={t.tweaks.hero}
            value={tweaks.heroLayout}
            options={[
              { value: "centered", label: "Centered" },
              { value: "split", label: "Split" },
              { value: "indexed", label: "Indexed" },
              { value: "marquee", label: "Wide" },
            ]}
            onChange={(v) => setTweak("heroLayout", v)}
          />
          <TweakRadio
            label={t.tweaks.timeline}
            value={tweaks.timelineStyle}
            options={[
              { value: "vertical", label: "Vertical" },
              { value: "horizontal", label: "Scrub" },
              { value: "layered", label: "Layered" },
            ]}
            onChange={(v) => setTweak("timelineStyle", v)}
          />
          <TweakRadio
            label={t.tweaks.density}
            value={tweaks.density}
            options={[{ value: "comfy", label: "Comfy" }, { value: "compact", label: "Compact" }]}
            onChange={(v) => setTweak("density", v)}
          />
        </TweakSection>

        <TweakSection title="Style">
          <TweakSelect
            label={t.tweaks.accent}
            value={tweaks.accent}
            options={Object.keys(ACCENTS).map((k) => ({ value: k, label: k.charAt(0).toUpperCase() + k.slice(1) }))}
            onChange={(v) => setTweak("accent", v)}
          />
          <TweakRadio
            label={t.tweaks.typeface}
            value={tweaks.body}
            options={[{ value: "sans", label: "Sans" }, { value: "mono", label: "Mono" }]}
            onChange={(v) => setTweak("body", v)}
          />
          <TweakRadio
            label={t.tweaks.animations}
            value={tweaks.anim}
            options={[
              { value: "subtle", label: "Subtle" },
              { value: "medium", label: "Medium" },
              { value: "expressive", label: "Expressive" },
            ]}
            onChange={(v) => setTweak("anim", v)}
          />
        </TweakSection>
      </TweaksPanel>
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
