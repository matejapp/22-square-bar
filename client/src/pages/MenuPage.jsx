import { useState, useEffect, useMemo, useRef } from "react";
import { Helmet } from "react-helmet-async";
import api from "../api/axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MenuItemCard from "../components/MenuItemCard";
import MenuSkeleton from "../components/MenuSkeleton";

export default function MenuPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeSection, setActiveSection] = useState("jelovnik");
  const [activeCategory, setActiveCategory] = useState(null);

  const sectionRefs = useRef({});

  useEffect(() => {
    api
      .get("/menu")
      .then((res) => setItems(res.data))
      .catch(() => setError("Greška pri učitavanju menija."))
      .finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(
    () => items.filter((i) => i.section === activeSection),
    [items, activeSection],
  );

  const categories = useMemo(() => {
    const seen = new Set();
    const list = [];
    for (const item of filtered) {
      if (!seen.has(item.category)) {
        seen.add(item.category);
        list.push(item.category);
      }
    }
    return list;
  }, [filtered]);

  useEffect(() => {
    setActiveCategory(categories[0] || null);
  }, [activeSection, categories.length]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!categories.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveCategory(visible[0].target.dataset.category);
      },
      { rootMargin: "-180px 0px -55% 0px", threshold: 0 },
    );
    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [categories]);

  function scrollToCategory(cat) {
    const el = sectionRefs.current[cat];
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 140;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setActiveCategory(cat);
  }

  const tabs = [
    { key: "jelovnik", label: "Jelovnik" },
    { key: "fastfood", label: "Fast food" },
    { key: "pice", label: "Karta pića" },
  ];

  return (
    <>
      <Helmet>
        <title>Menu — 22squareBar Šimanovci</title>
        <meta
          name="description"
          content="Pogledajte naš jelovnik, fast food ponudu i kartu pića."
        />
        <meta property="og:title" content="Menu — 22 Square Bar Šimanovci" />
        <meta
          property="og:description"
          content="Jelovnik, fast food i karta pića 22 Square Bar."
        />
        <meta property="og:image" content="/slike/jelovnik.webp" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Navbar />

      <main>
        <Hero
          bg="/slike/jelovnik.webp"
          height="h-[60vh]"
          eyebrow="22 Square Bar"
          title={
            <>
              Naš{" "}
              <span className="font-italic-display text-orange">jelovnik</span>
            </>
          }
          subtitle="Sve što volite, na jednoj adresi."
        />

        <section
          className="max-w-7xl mx-auto px-4 md:px-6 py-12"
          aria-label="Meni 22 Square Bar"
        >
          {/* Section tabs */}
          <div className="flex justify-center gap-1 mb-10 flex-wrap">
            {tabs.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveSection(key)}
                aria-pressed={activeSection === key}
                className={`tap-target relative px-5 py-2.5 font-bold transition-colors font-display text-lg
                  after:content-[''] after:absolute after:left-0 after:bottom-0
                  after:w-full after:h-[3px] after:bg-orange-soft
                  after:transition-transform
                  ${
                    activeSection === key
                      ? "text-terracotta after:scale-x-100"
                      : "text-navy after:scale-x-0 hover:text-terracotta hover:after:scale-x-100"
                  }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Mobile sticky chip nav (scroll-spy) */}
          {!loading && categories.length > 0 && (
            <nav
              aria-label="Kategorije menija (mobilno)"
              className="md:hidden sticky top-[72px] z-20 -mx-4 px-4 py-2 bg-cream/90 backdrop-blur
                         border-y border-navy/10 mb-8"
            >
              <ul className="flex gap-2 overflow-x-auto no-scrollbar">
                {categories.map((cat) => (
                  <li key={cat} className="shrink-0">
                    <button
                      onClick={() => scrollToCategory(cat)}
                      className={`tap-target px-3.5 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap
                                  transition-colors border
                        ${
                          activeCategory === cat
                            ? "bg-navy text-cream border-navy"
                            : "bg-cream text-navy border-navy/15 hover:border-terracotta hover:text-terracotta"
                        }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {/* Content grid: sidebar TOC (md+) | items */}
          <div className="grid md:grid-cols-12 gap-8 md:gap-12">
            {/* Desktop TOC */}
            <aside className="hidden md:block md:col-span-3 lg:col-span-3">
              <nav
                aria-label="Kategorije menija"
                className="sticky top-28"
              >
                <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-terracotta mb-4">
                  Kategorije
                </p>
                <ul className="space-y-1 border-l border-navy/15">
                  {categories.map((cat) => {
                    const active = activeCategory === cat;
                    return (
                      <li key={cat}>
                        <button
                          onClick={() => scrollToCategory(cat)}
                          className={`block w-full text-left pl-4 -ml-px py-1.5 text-sm transition-colors
                            ${
                              active
                                ? "text-terracotta font-semibold border-l-2 border-terracotta"
                                : "text-navy/70 hover:text-navy border-l-2 border-transparent"
                            }`}
                        >
                          {cat}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </aside>

            {/* Items column */}
            <div className="md:col-span-9 lg:col-span-9">
              {loading && <MenuSkeleton />}
              {error && (
                <p className="text-center text-red-500 py-10" role="alert">
                  {error}
                </p>
              )}

              {!loading && !error && (
                <div className="space-y-12">
                  {categories.map((cat) => (
                    <section
                      key={cat}
                      data-category={cat}
                      ref={(el) => (sectionRefs.current[cat] = el)}
                      aria-labelledby={`cat-${cat}`}
                      className="scroll-mt-32"
                    >
                      <header className="mb-5">
                        <h3
                          id={`cat-${cat}`}
                          className="font-display text-3xl md:text-4xl text-navy"
                        >
                          {cat}
                        </h3>
                        <span className="heading-rule" />
                      </header>
                      <div className="grid sm:grid-cols-2 gap-x-6">
                        {filtered
                          .filter((i) => i.category === cat)
                          .map((item) => (
                            <MenuItemCard key={item.id} item={item} />
                          ))}
                      </div>
                    </section>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
