import { Star } from "lucide-react";

export default function Testimonials({ testimonials, intro = "Client success stories" }) {
  return (
    <section className="section-shell bg-primary text-white" id="testimonials">
      <div className="container-page">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="font-bold uppercase tracking-[0.18em] text-accent">SUCCESS STORIES</p>
            <h2 className="mt-2 text-3xl font-extrabold leading-tight md:text-5xl">See how others got it right</h2>
            <p className="mt-4 text-lg text-blue-100">{intro || "From expiring permits to approvals—real journeys, real outcomes."}</p>
          </div>
          <div className="rounded-lg border border-white/15 bg-white/10 px-5 py-4 text-sm font-semibold text-blue-50">
            Strategy, documents, submission, follow-up
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <article
              key={item.name}
              className={`review-card ${index === 0 ? "md:col-span-2 bg-white" : "bg-white/95"}`}
            >
              <div className="mb-4 flex text-accent">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="min-h-[140px] leading-7 text-slate-800">"{item.quote}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-light text-lg font-bold text-primary">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-primary">{item.name}</h3>
                  <p className="text-sm text-slate-500">{item.detail}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
