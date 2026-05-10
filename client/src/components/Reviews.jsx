// Google reviews showcase. Reviews are hardcoded — easy to swap later
// (or wire to Google Places API if you ever add a backend proxy).
//
// To update: edit the `reviews` array below with real text/names/ratings
// from your Google Maps profile.

const reviews = [
  {
    name: "Claudia Vojkic",
    when: "pre 4 meseca",
    rating: 5,
    text: "Прославили смо 60. рођендан мог мужа. Не могу да опишем колико је услуга била/било добра. Свака жеља је испуњена. Драго ми је што се Виктор сетио сваког детаља и идеје коју сам му рекла током нашег првог разговора. Храна је била укусна, атмосфера дивна. Особље веома дискретно. Топло препоручујем 22 Square Bar за сва ваша окупљања. Викторе, хвала теби и твом особљу што си нашу прилику учинио тако дивним искуством. Озбиљно мислим на сваку реч ❤️",
  },
  {
    name: "Snezana Vujicic",
    when: "pre 2 nedelje",
    rating: 5,
    text: "Веома лепо место, љубазно, услужно и брзо особље и што је најважније веома укусна храна по пристојним ценама. Одлично је што постоји овакво место у Шимановцима. Свака част!",
  },
  {
    name: "Milos Lukesevic",
    when: "pre 4 godine",
    rating: 5,
    text: "Опуштено место.. Удобан намештај, добра музика (рок, баладе...) и одлична храна.. Посебно „пљескавица“, једна од најбољих које сам икада пробао.. Цене су нормалне, чак и јефтине.. Добро место за учење или лагани рад на даљину.",
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} od 5 zvezdica`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < count ? "#ffa500" : "rgba(9,46,74,0.15)"}
          aria-hidden="true"
        >
          <path d="M12 2l2.9 6.9 7.4.6-5.6 4.9 1.7 7.3L12 17.8 5.6 21.7l1.7-7.3L1.7 9.5l7.4-.6L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleG() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.83z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.83C6.71 7.31 9.14 5.38 12 5.38z"
      />
    </svg>
  );
}

export default function Reviews() {
  return (
    <section
      aria-labelledby="reviews-title"
      className="bg-cream-deep border-y border-navy/10 py-20"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.35em] text-terracotta uppercase mb-3">
              <GoogleG /> Google ocene
            </p>
            <h2
              id="reviews-title"
              className="font-display text-3xl md:text-5xl text-navy"
            >
              Šta kažu{" "}
              <span className="font-italic-display text-terracotta">
                naši gosti.
              </span>
            </h2>
          </div>
          <a
            href="https://www.google.com/maps/place/22+Square+Bar/@44.8729362,20.1016865,19z"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold text-navy hover:text-terracotta transition-colors"
          >
            Pogledaj sve recenzije →
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="bg-cream rounded-2xl p-7 border border-navy/10
                         shadow-card flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <Stars count={r.rating} />
                <GoogleG />
              </div>
              <blockquote className="font-display italic text-lg leading-snug text-navy mb-6 flex-1">
                “{r.text}”
              </blockquote>
              <figcaption className="pt-4 border-t border-navy/10">
                <p className="font-semibold text-navy">{r.name}</p>
                <p className="text-xs text-navy/50 mt-0.5">{r.when}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
