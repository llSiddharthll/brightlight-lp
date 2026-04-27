import { ArrowDown, CheckCircle } from "lucide-react";

export default function Hero({ service, home = false }) {
  return (
    <section className="relative overflow-hidden bg-white pt-28">
      <div className="container-page grid min-h-[680px] items-center gap-8 py-12 lg:grid-cols-[1fr_0.88fr] lg:py-16">
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex rounded-full border border-secondary/20 bg-secondary/5 px-4 py-2 text-sm font-bold text-secondary">
            {service.eyebrow}
          </div>
          <h1 className="text-4xl font-extrabold leading-tight tracking-normal text-primary md:text-6xl">
            {service.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600 md:text-xl">{service.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#apply-section" className="btn-primary px-8 py-4">
              {home ? "Book Free Consultation" : "Start Assessment"}
              <ArrowDown size={18} />
            </a>
            <a href={home ? "#services" : "#about"} className="btn-secondary px-8 py-4">
              View Services
            </a>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {service.highlights.map((item) => (
              <div key={item.title} className="hero-feature flex min-h-[96px] gap-3">
                <CheckCircle className="mt-1 text-secondary" size={22} />
                <div>
                  <h3 className="font-bold text-primary">{item.title}</h3>
                  <p className="text-sm text-slate-500">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="hero-pill">Real guidance</div>
            <div className="hero-pill">Free discovery call</div>
            <div className="hero-pill">Clear next steps—no confusion</div>
          </div>
        </div>

        <div className="relative">
          <img
            src={service.heroImage}
            alt={service.eyebrow}
            className="aspect-[4/5] w-full rounded-[32px] border border-slate-200 object-cover shadow-soft lg:max-h-[620px]"
            loading={home ? "eager" : "lazy"}
          />
          <div className="absolute bottom-5 left-5 right-5 rounded-[28px] bg-white/95 p-5 shadow-soft backdrop-blur">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Trusted by</p>
                <p className="text-2xl font-extrabold text-primary">5,000+ applicants</p>
              </div>
              <div className="text-right text-accent" aria-label="Five star rating">
                ★★★★★
                <p className="text-xs text-slate-500">Top-rated reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
