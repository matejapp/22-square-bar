import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import PullQuote from "../components/PullQuote";

const gallery = [
  "1","2","3","4","5","8","9","10","11","12","13","14","15","16","17","18",
].map((n) => `${n}.webp`);

const features = [
  { icon: "🎉", label: "Proslave i roštilji" },
  { icon: "🏢", label: "Firmski eventi" },
  { icon: "💍", label: "Svadbe" },
  { icon: "🍽️", label: "Prilagođeni meniji" },
];

const checks = [
  "Dostava i postavljanje na lokaciji",
  "Prilagođen meni po zahtevu",
  "Iskusno osoblje",
  "Povoljne cene",
];

export default function KeteringPage() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <>
      <Helmet>
        <title>Ketering — 22squareBar Šimanovci</title>
        <meta
          name="description"
          content="Ketering usluge — 22 Square Bar Šimanovci. Proslave, eventi, firme."
        />
        <meta property="og:title" content="Ketering — 22 Square Bar Šimanovci" />
        <meta
          property="og:description"
          content="Upotpunite svaki event sa našim keteringom — proslave, svadbe, firmski eventi."
        />
        <meta property="og:image" content="/slike/kbackground.webp" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Navbar />

      <main className="pb-24 md:pb-0">
        <Hero
          bg="/slike/kbackground.webp"
          height="h-[70vh]"
          eyebrow="22 Square Bar"
          title={
            <>
              Ketering{" "}
              <span className="font-italic-display text-orange">#22</span>
            </>
          }
          subtitle="Upotpunite svaki event sa našim keteringom."
        >
          <a
            href="tel:+381612242244"
            className="tap-target inline-block bg-orange text-navy-deep font-bold px-8 py-3 rounded-lg
                       transition-all hover:bg-cream hover:scale-105"
          >
            Pozovite nas
          </a>
        </Hero>

        {/* Feature strip */}
        <div className="bg-navy py-7 px-4">
          <ul className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8">
            {features.map(({ icon, label }) => (
              <li key={label} className="flex items-center gap-3 text-cream">
                <span className="text-2xl" aria-hidden="true">{icon}</span>
                <span className="text-sm font-semibold tracking-wide">{label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Info */}
        <section
          aria-labelledby="why-us"
          className="max-w-6xl mx-auto px-6 py-24"
        >
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-5 order-2 md:order-1 relative">
              <img
                src="/slike/ketering.webp"
                alt="Postavka stola za ketering 22 Square Bar"
                loading="lazy"
                className="w-full rounded-2xl shadow-lift object-cover aspect-[4/5]"
              />
            </div>

            <div className="md:col-span-7 order-1 md:order-2 text-ink/85">
              <p className="text-[11px] font-semibold tracking-[0.35em] text-terracotta uppercase mb-3">
                Zašto mi?
              </p>
              <h2
                id="why-us"
                className="font-display text-4xl md:text-5xl text-navy leading-tight"
              >
                Svaki detalj,
                <br />
                <span className="font-italic-display text-terracotta">
                  vaš događaj.
                </span>
              </h2>
              <span className="heading-rule mt-5" />

              <p className="leading-relaxed text-base md:text-lg text-navy/75 mt-8 mb-5">
                Nudimo kompletne ketering usluge za sve vrste događaja —
                proslave, firme, svadbe, roštilji i još mnogo toga. Svaki detalj
                se prilagođava vašim potrebama i budžetu.
              </p>

              <PullQuote attribution="Tim 22" className="my-10">
                Sa višegodišnjim iskustvom u pripremi hrane i organizaciji
                događaja, garantujemo kvalitet i profesionalnost na svakom
                koraku.
              </PullQuote>

              <ul className="space-y-3 mb-10">
                {checks.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-base text-navy/85">
                    <span
                      className="w-6 h-6 rounded-full bg-terracotta/15 flex items-center justify-center text-terracotta font-bold text-xs flex-shrink-0"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="tel:+381612242244"
                className="tap-target inline-block bg-navy text-cream font-bold px-8 py-3 rounded-lg
                           transition-all hover:bg-terracotta hover:scale-105"
              >
                Pozovite nas
              </a>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section
          aria-labelledby="ketering-gallery"
          className="bg-cream-deep border-t border-navy/10"
        >
          <header className="pt-16 pb-10 text-center">
            <p className="text-[11px] font-semibold tracking-[0.35em] text-terracotta uppercase mb-3">
              Naši eventi
            </p>
            <h2
              id="ketering-gallery"
              className="font-display text-4xl md:text-6xl text-navy"
            >
              Galerija
            </h2>
            <hr className="section-divider" />
          </header>

          <div className="px-4 pb-20 max-w-7xl mx-auto">
            <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
              {gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setLightbox(`/galerijaK/${img}`)}
                  className={`relative break-inside-avoid overflow-hidden rounded-xl cursor-pointer
                             group shadow-card w-full block
                             ${i % 6 === 2 ? "rotate-[-1deg]" : i % 6 === 4 ? "rotate-[1deg]" : ""}`}
                  aria-label={`Otvori sliku ${i + 1} iz ketering galerije`}
                >
                  <img
                    src={`/galerijaK/${img}`}
                    alt={`Ketering 22 Square Bar — event ${i + 1}`}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-all duration-300 flex items-center justify-center">
                    <span className="text-cream text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg">
                      ⊕
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Mobile bottom-fixed CTA */}
      <a
        href="tel:+381612242244"
        className="md:hidden fixed bottom-4 inset-x-4 z-30 tap-target
                   bg-orange text-navy-deep font-bold py-3.5 rounded-full text-center
                   shadow-lift transition-transform active:scale-95"
        aria-label="Pozovite 22 Square Bar"
      >
        📞 Pozovite nas
      </a>

      {/* Lightbox */}
      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Pregled slike"
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-6 text-cream text-4xl leading-none hover:text-orange transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Zatvori sliku"
          >
            &times;
          </button>
          <img
            src={lightbox}
            alt="Ketering galerija — uvećan prikaz"
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </>
  );
}
