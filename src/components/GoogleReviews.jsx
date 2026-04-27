import { Quote, Star } from "lucide-react";
import { reviews } from "../data/sharedContent.js";

export default function GoogleReviews() {
  const [featuredReview, ...supportingReviews] = reviews;
  const reviewCount = reviews.length;
  const headlineText = `${featuredReview.text.split(" ").slice(0, 16).join(" ")}...`;

  return (
    <section className="section-shell bg-slate-50" id="reviews">
      <div className="container-page">
        <div className="mb-10 grid gap-6 lg:grid-cols-[1.6fr_0.9fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="eyebrow">Google Reviews</p>
            <h2 className="section-title mt-2">Trusted immigration guidance from happy clients</h2>
            <p className="mt-4 text-lg text-slate-600">
              Verified feedback from people who completed their applications with clarity, confidence, and expert RCIC support.
            </p>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white px-6 py-6 text-center shadow-soft">
            <div className="text-5xl font-extrabold text-primary">4.8</div>
            <div className="mt-2 text-sm uppercase tracking-[0.18em] text-secondary">Google rating</div>
            <div className="mt-4 text-sm text-slate-600">Based on {reviewCount} genuine client reviews</div>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.35fr_0.95fr]">
          <article className="card overflow-hidden bg-primary text-white p-8 md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div>
                <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-white">
                  <Star size={16} fill="currentColor" />
                  5-Star service
                </div>
                <h3 className="mt-6 text-3xl font-extrabold leading-tight">"{headlineText}"</h3>
                <p className="mt-4 text-sm uppercase tracking-[0.18em] text-blue-100">Featured client story from {featuredReview.name}</p>
              </div>

              <div className="rounded-[28px] border border-white/15 bg-white/10 px-5 py-4 text-sm text-white">
                <div className="text-3xl font-extrabold">{featuredReview.rating}.0</div>
                <p className="mt-1 text-xs text-white/70">Excellent Google rating</p>
              </div>
            </div>

            <Quote className="mt-8 text-white/20" size={44} />
            <p className="mt-6 text-lg leading-8 text-slate-100">"{featuredReview.text}"</p>
          </article>

          <div className="grid gap-5">
            <article className="card bg-white p-6 md:p-7">
              <div className="flex items-center gap-4">
                <div className="rounded-3xl bg-slate-100 p-3 text-primary">
                  <Star size={18} fill="currentColor" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-secondary">What clients love</p>
                  <h3 className="mt-2 text-2xl font-semibold text-slate-900">Fast results and expert support</h3>
                </div>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                <li>• Clear communication from first consultation to approval</li>
                <li>• Expert guidance from a licensed RCIC</li>
                <li>• Smooth process for study permits, work permits, and PR pathways</li>
              </ul>
            </article>

            <div className="grid gap-4 sm:grid-cols-2">
              {supportingReviews.map((review) => (
                <article key={review.name} className="review-card bg-white text-slate-900 p-5">
                  <div className="flex items-center gap-3">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="h-12 w-12 flex-none rounded-2xl object-cover"
                      loading="lazy"
                    />
                    <div>
                      <h3 className="font-semibold text-slate-900">{review.name}</h3>
                      <div className="mt-1 flex gap-1 text-secondary" aria-label={`${review.rating} star review`}>
                        {Array.from({ length: review.rating }).map((_, index) => (
                          <Star key={index} size={16} fill="currentColor" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-600">"{review.text}"</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
