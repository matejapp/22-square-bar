export default function Footer() {
  return (
    <footer className="bg-navy-deep text-cream">
      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Logo + tagline */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <img src="/slike/download (1).webp" alt="22 Square Bar" className="w-20 h-20 object-contain" />
          <p className="text-white/50 text-sm leading-relaxed text-center md:text-left">
            Mesto malih užitaka i velikih ljudi.<br />Šimanovci, od 2020.
          </p>
          <a
            href="https://www.instagram.com/22squarebar/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-white/60 hover:text-[#ffa500] transition-colors"
          >
            <img src="/slike/instagram.webp" alt="Instagram" className="w-5 h-5" />
            @22squarebar
          </a>
        </div>

        {/* Working hours */}
        <div className="flex flex-col items-center gap-3">
          <p className="text-xs font-semibold tracking-[0.25em] text-[#ffa500] uppercase">Radno vreme</p>
          <div className="text-sm text-white/70 leading-relaxed text-center space-y-1">
            <p><span className="text-white/40">Pon – Čet</span> &nbsp; 09:00 – 23:00</p>
            <p><span className="text-white/40">Pet – Sub</span> &nbsp; 09:00 – 01:00</p>
            <p><span className="text-white/40">Ned</span> &nbsp; 12:00 – 23:00</p>
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <p className="text-xs font-semibold tracking-[0.25em] text-[#ffa500] uppercase">Kontakt</p>
          <div className="text-sm text-white/70 text-center md:text-right space-y-2">
            <p>
              <a href="tel:+381612242244" className="hover:text-[#ffa500] transition-colors">
                061 2242244
              </a>
            </p>
            <p>
              <a
                href="https://www.google.com/maps/place/22+Square+Bar/@44.8729362,20.1016865,19z"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ffa500] transition-colors"
              >
                Krnješevačka 116<br />Šimanovci 22310
              </a>
            </p>
          </div>
          <div className="flex gap-2 items-center mt-2">
            <img src="/slike/visa.webp" alt="Visa" className="h-6 w-auto opacity-60" />
            <img src="/slike/mastercard.webp" alt="MasterCard" className="h-6 w-auto opacity-60" />
            <img src="/slike/union.webp" alt="UnionPay" className="h-6 w-auto opacity-60" />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-4 px-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/30">
        <span>&copy; {new Date().getFullYear()} 22 Square Bar. All rights reserved.</span>
        <span className="flex items-center gap-1">
          Designed &amp; developed by
          <a
            href="https://www.instagram.com/matejapavlovic/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-[#ffa500] transition-colors ml-1"
          >
            Mateja
          </a>
          <span className="text-white/20 mx-1">·</span>
          <a
            href="https://www.linkedin.com/in/mateja-pavlovic-85ba35340"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-[#ffa500] transition-colors"
          >
            LinkedIn
          </a>
        </span>
      </div>
    </footer>
  )
}
