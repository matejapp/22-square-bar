import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Stamp from "../components/Stamp";
import PullQuote from "../components/PullQuote";
import Reviews from "../components/Reviews";

const galleryImages = Array.from({ length: 15 }, (_, i) => `${i + 1}.webp`);

export default function HomePage() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <>
      <Helmet>
        <title>22squareBar Šimanovci</title>
        <meta
          name="description"
          content="22 Square Bar Šimanovci — mesto malih užitaka i velikih ljudi. Jelovnik, ketering, kafić."
        />
        <meta property="og:title" content="22 Square Bar Šimanovci" />
        <meta
          property="og:description"
          content="Mesto malih užitaka i velikih ljudi. Jelovnik, ketering, kafić."
        />
        <meta property="og:image" content="/slike/pixelcut-export.webp" />
        <meta property="og:url" content="/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="sr_RS" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="22 Square Bar Šimanovci" />
        <meta
          name="twitter:description"
          content="Mesto malih užitaka i velikih ljudi."
        />
        <meta name="twitter:image" content="/slike/pixelcut-export.webp" />
      </Helmet>

      <Navbar />

      <main>
        <Hero
          bg="/slike/pixelcut-export.webp"
          height="h-screen"
          eyebrow="Šimanovci • Od 2020"
          title={
            <>
              Mesto malih užitaka{" "}
              <span className="font-italic-display text-orange">
                i velikih ljudi
              </span>
            </>
          }
          subtitle="Jelovnik, ketering i bar — sve na jednoj adresi."
        >
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to="/menu"
              className="tap-target inline-block bg-orange text-navy-deep font-bold px-7 py-3 rounded-lg
                         shadow-lift transition-all hover:bg-cream hover:scale-105"
            >
              Pogledaj jelovnik
            </Link>
            <Link
              to="/ketering"
              className="tap-target inline-block border-2 border-cream/70 text-cream font-bold px-7 py-3 rounded-lg
                         transition-all hover:bg-cream hover:text-navy hover:scale-105"
            >
              Ketering →
            </Link>
          </div>
        </Hero>

        {/* ── Pull-quote section ─────────────────────────────────── */}
        <section
          aria-label="Citat"
          className="relative max-w-5xl mx-auto px-6 pt-24 pb-12 md:pt-32 md:pb-20"
        >
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-9">
              <p className="text-[11px] font-semibold tracking-[0.35em] text-terracotta uppercase mb-6">
                Naša priča
              </p>
              <h2 className="font-display text-4xl md:text-6xl font-semibold text-navy leading-[1.05]">
                Od garaže{" "}
                <span className="font-italic-display text-terracotta">
                  do bara
                </span>
                .
              </h2>
              <span className="heading-rule mt-6" />
            </div>
            <div className="md:col-span-3 hidden md:flex justify-end">
              <Stamp label="OD 2020" sub="Šimanovci" />
            </div>
          </div>
        </section>

        {/* ── Story columns + photo ──────────────────────────────── */}
        <section
          id="about"
          aria-labelledby="about-title"
          className="max-w-6xl mx-auto px-6 pb-20"
        >
          <div className="grid md:grid-cols-12 gap-10 md:gap-16">
            {/* Photo collage left */}
            <div className="md:col-span-5 relative order-2 md:order-1">
              <img
                src="/slike/22. sep. ‘24..webp"
                alt="22 Square Bar — otvaranje 22. septembra"
                loading="lazy"
                className="w-full rounded-2xl shadow-lift object-cover aspect-[4/5]"
              />
            </div>

            {/* Story column right */}
            <div className="md:col-span-7 order-1 md:order-2 text-ink/85">
              <h3
                id="about-title"
                className="font-display text-3xl md:text-4xl text-navy mb-4"
              >
                Spontano rođen, namerno vođen.
              </h3>
              <p className="leading-relaxed text-base md:text-lg mb-6">
                Počeli su sa radom u toliko teškoj godini, kakvu modernija
                istorija ne pamti. Mala garaža od tog 4. marta 2020. hranila je
                više stotina radnika industrijske zone u Šimanovcima.
              </p>
              <p className="leading-relaxed text-base md:text-lg mb-8">
                Al' ne lezi, vraže! Jedan karantin, drugi, kovid mere i zabrane.
                Dok su se čekali naredni potezi svetskih moćnika, koji je
                trebalo da odluče da li će se naši životi vratiti u pređašnji
                tok, rodila se ideja — <em>"22 Square Bar"</em>.
              </p>

              <PullQuote attribution="Snežana Čenad" className="my-10">
                Spontano sam mu dala ime, dobivši tu čast da budem kuma lokala
                koji je iznedrio najjače svirke, najukusniju hranu, najfiniju
                kafu, najborbenije kvizove i najlepše pijane noći.
              </PullQuote>

              <p className="leading-relaxed text-base md:text-lg mb-6">
                Iste te godine, 22. septembra usudili su se na korak na koji ne
                bi smeo svako. Šimanovci, a i ceo kraj dobili su mesto koje ima
                sve potrebno, a pre svega — <strong>ima dušu</strong>.
              </p>
              <p className="leading-relaxed text-base md:text-lg">
                Od tada pa do danas ovo je bar porodice, prijatelja i svih vas
                koji mu se vraćate ili ćete to činiti nakon vaše prve
                porudžbine. I ne zaboravite — <em>DVADESETDVOJKA</em> je mesto
                malih užitaka i velikih gostiju.
              </p>

              <div className="mt-10 pt-6 border-t border-navy/10 flex flex-wrap items-baseline gap-x-6 gap-y-2">
                <span className="font-display italic text-terracotta text-lg">
                  naš početak
                </span>
                <span className="text-sm text-navy/60">
                  FASTFOOD — 4. 3. 2020.
                </span>
                <span className="text-sm text-navy/60">BAR — 22. 9. 2020.</span>
              </div>
              <p className="mt-3 text-xs text-navy/50 italic">
                tekst: Snežana Čenad — novinar, prijatelj i kuma
                'dvadesetdvojke'
              </p>
            </div>
          </div>
        </section>

        <Reviews />

        {/* ── Gallery ────────────────────────────────────────────── */}
        <section
          id="gallery"
          aria-labelledby="gallery-title"
          className="bg-cream py-20"
        >
          <header className="text-center mb-12 px-6">
            <p className="text-[11px] font-semibold tracking-[0.35em] text-terracotta uppercase mb-3">
              Naši trenuci
            </p>
            <h2
              id="gallery-title"
              className="font-display text-4xl md:text-6xl text-navy"
            >
              Galerija
            </h2>
            <hr className="section-divider" />
          </header>

          <div className="px-4 max-w-7xl mx-auto">
            <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
              {galleryImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setLightbox(`/galerija/${img}`)}
                  className={`relative break-inside-avoid overflow-hidden rounded-xl cursor-pointer
                             group shadow-card w-full block
                             ${i % 7 === 3 ? "rotate-[-1deg]" : i % 7 === 5 ? "rotate-[1deg]" : ""}`}
                  aria-label={`Otvori sliku ${i + 1} iz galerije`}
                >
                  <img
                    src={`/galerija/${img}`}
                    alt={`Galerija 22 Square Bar — slika ${i + 1}`}
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
            alt="Galerija — uvećan prikaz"
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </>
  );
}
