import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Kontakt — 22squareBar Šimanovci</title>
        <meta
          name="description"
          content="Kontaktirajte nas — 22 Square Bar, Krnješevačka 116, Šimanovci."
        />
        <meta property="og:title" content="Kontakt — 22 Square Bar Šimanovci" />
        <meta
          property="og:description"
          content="Krnješevačka 116, Šimanovci. Pon–Čet 09–23, Pet–Sub 09–01, Ned 12–23."
        />
        <meta property="og:image" content="/slike/kontakt.webp" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Navbar />

      <main>
        <Hero
          bg="/slike/kontakt.webp"
          height="h-[55vh]"
          eyebrow="Recite zdravo"
          title={
            <>
              Pronađite{" "}
              <span className="font-italic-display text-orange">nas</span>
            </>
          }
          subtitle="Krnješevačka 116, Šimanovci 22310"
        />

        <section
          aria-labelledby="contact-info"
          className="max-w-6xl mx-auto px-6 py-20"
        >
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <p className="text-[11px] font-semibold tracking-[0.35em] text-terracotta uppercase mb-3">
                Kontakt
              </p>
              <h2
                id="contact-info"
                className="font-display text-3xl md:text-5xl text-navy leading-tight"
              >
                Svratite,{" "}
                <span className="font-italic-display text-terracotta">
                  ili pozovite.
                </span>
              </h2>
              <span className="heading-rule mt-5" />

              <ul className="space-y-5 text-navy mt-10">
                <li>
                  <p className="text-[11px] tracking-[0.3em] uppercase text-navy/50 mb-1">
                    Adresa
                  </p>
                  <a
                    href="https://www.google.com/maps/place/22+Square+Bar/@44.8729362,20.1016865,19z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-xl hover:text-terracotta transition-colors"
                  >
                    Krnješevačka 116, Šimanovci 22310
                  </a>
                </li>
                <li>
                  <p className="text-[11px] tracking-[0.3em] uppercase text-navy/50 mb-1">
                    Telefon
                  </p>
                  <a
                    href="tel:+381612242244"
                    className="font-display text-xl hover:text-terracotta transition-colors"
                  >
                    061 2242244
                  </a>
                </li>
                <li>
                  <p className="text-[11px] tracking-[0.3em] uppercase text-navy/50 mb-1">
                    Instagram
                  </p>
                  <a
                    href="https://www.instagram.com/22squarebar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-xl hover:text-terracotta transition-colors"
                  >
                    @22squarebar
                  </a>
                </li>
              </ul>

              <div className="mt-10 pt-6 border-t border-navy/10">
                <p className="text-[11px] tracking-[0.3em] uppercase text-navy/50 mb-3">
                  Radno vreme
                </p>
                <ul className="space-y-1.5 text-navy/85 text-base">
                  <li className="flex justify-between max-w-xs">
                    <span>Pon – Čet</span>
                    <span className="tabular-nums">09:00 – 23:00</span>
                  </li>
                  <li className="flex justify-between max-w-xs">
                    <span>Pet – Sub</span>
                    <span className="tabular-nums">09:00 – 01:00</span>
                  </li>
                  <li className="flex justify-between max-w-xs">
                    <span>Nedelja</span>
                    <span className="tabular-nums">12:00 – 23:00</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="md:col-span-7">
              <iframe
                title="22 Square Bar lokacija na mapi"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d743.0!2d20.1023302!3d44.8729353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a5b263e309271%3A0x1ce9b29293a436cf!2s22%20Square%20Bar!5e0!3m2!1sen!2srs!4v1"
                width="100%"
                height="460"
                style={{ border: 0, borderRadius: "16px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="shadow-card"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
