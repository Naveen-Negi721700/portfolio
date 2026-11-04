// To change your photo: replace /public/me.jpg (or change PHOTO below).
const PHOTO = "/me.jpg";

const PLACEHOLDER =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 520'><defs><linearGradient id='g' x1='0' y1='0' x2='0' y2='1'><stop offset='0' stop-color='#f3d9e3'/><stop offset='1' stop-color='#b4627f'/></linearGradient></defs><rect width='400' height='520' fill='url(#g)'/><circle cx='200' cy='200' r='78' fill='#6b2a43' opacity='.85'/><path d='M40 520c0-110 70-170 160-170s160 60 160 170z' fill='#6b2a43' opacity='.85'/></svg>`
  );

const Badge = ({ label, value, className = "" }) => (
  <div
    className={`absolute rounded-2xl border border-pink-400/20 bg-[#28101a]/70 px-4 py-3 backdrop-blur-md ${className}`}
  >
    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-pink-100/50">
      {label}
    </div>
    <div className="mt-1 font-semibold text-white">{value}</div>
  </div>
);
          
const Hero = () => {
  return (
    <section id="home" className="hero-bg relative pt-[72px]">
      <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-12 px-6 pb-20 pt-10 lg:grid-cols-2 lg:px-12">
        {/* Left */}
        <div className="fade-up">
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-pink-300 md:text-xs">
            <span className="h-px w-12 bg-pink-300" />
            Full-Stack · Backend · Security
          </div>

          <h1 className="mt-6 font-display text-[72px] font-light leading-[0.92] tracking-[-0.04em] text-white sm:text-[100px] md:text-[128px]">
            Naveen
            <br />
            <em className="bg-gradient-to-r from-white to-pink-300 bg-clip-text pr-2 text-transparent">
              Negi
            </em>
            <span className="text-pink-300">.</span>
          </h1>

          <p className="mt-8 max-w-lg text-lg leading-relaxed text-pink-100/60 md:text-xl">
            I build{" "}
            <em className="font-display font-semibold text-white">
              secure, scalable
            </em>{" "}
            web products, from JWT-protected APIs and rate-limited backends to
            AI-assisted dashboards, engineered end to end.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-full bg-gradient-to-br from-[#8a1a40] to-[#5e0f2c] px-7 py-4 font-semibold text-white shadow-[0_10px_40px_-10px_rgba(122,21,55,0.9)] transition hover:brightness-125"
            >
              Explore My Work <span>→</span>
            </a>
            <a
              href="/Naveen_negi_resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-pink-400/25 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              View Resume <span>↗</span>
            </a>
          </div>
        </div>

        {/* Right: photo */}
        <div className="fade-up relative mx-auto w-full max-w-[460px]">
          <div className="absolute -inset-6 rounded-full bg-pink-700/30 blur-3xl" />
          <div className="relative">
            <div className="rounded-t-full rounded-b-[28px] border border-pink-400/20 bg-[#1a0a12] p-3">
              <div className="aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[20px]">
                <img
                  src={PHOTO}
                  alt="Naveen Negi"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = PLACEHOLDER;
                  }}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <Badge
              label="GeeksforGeeks"
              value="160 Days DSA"
              className="float-a -left-4 top-24 md:-left-14"
            />
            <Badge
              label="Backora · BaaS"
              value="Shipped & Deployed"
              className="float-b -right-2 bottom-24 md:-right-10"
            />
            <span className="absolute -left-5 top-[38%] h-8 w-8 border-l border-t border-pink-300" />
            <span className="absolute -bottom-5 -right-5 h-8 w-8 border-b border-r border-pink-300" />
          </div>

          <div className="mt-8 flex justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-pink-100/50">
            <span>Fig. 01</span>
            <span>B.Tech CSE · Batch 2028</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
