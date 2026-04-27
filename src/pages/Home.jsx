import { ArrowRight, CheckCircle } from "lucide-react";
import Footer from "../components/Footer.jsx";
import GoogleReviews from "../components/GoogleReviews.jsx";
import Hero from "../components/Hero.jsx";
import MeetLoveneet from "../components/MeetLoveneet.jsx";
import MultiStepForm from "../components/MultiStepForm.jsx";
import Navbar from "../components/Navbar.jsx";
import ReelsSection from "../components/ReelsSection.jsx";
import Testimonials from "../components/Testimonials.jsx";
import TrustBar from "../components/TrustBar.jsx";
import SEO from "../components/SEO.jsx";
import { consultationQuestions, services } from "../data/services.js";

const homeHero = {
  eyebrow: "Free Immigration Consultation",
  title: "Brightlight Immigration",
  description:
    "Not sure what to do next with your work permit? Don’t guess. Get a clear answer on your eligibility, documents, and next move—before you apply.",
  heroImage: "/images/home_hero_1777109594276.png",
  highlights: [
    { title: "RCIC-LED REVIEW", text: "Know what actually works for your case" },
    { title: "Quick check", text: "Start with a 60-second review" },
  ],
};

const homeTestimonials = services.flatMap((service) => service.testimonials).slice(0, 5);

export default function Home() {
  return (
    <>
      <SEO 
        title="Brightlight Immigration | Expert Canadian Immigration Consultants"
        description="Get professional guidance on Canadian work permits (VOWP, PGWP, SOWP) and PR pathways from RCIC-regulated consultants. Book your free consultation today."
        url="https://www.brightlightimmigration.ca/"
      />
      <Navbar />
      <main>
        <Hero service={homeHero} home />
        <TrustBar />

        <section className="section-shell bg-white">
          <div className="container-page grid gap-5 lg:grid-cols-3">
            <article className="card-highlight">
              <p className="eyebrow">STOP GUESSING</p>
              <h2 className="mt-2 text-3xl font-extrabold text-primary">Find your best work permit option—fast</h2>
              <p className="mt-4 text-slate-600">
                Most refusals happen because people apply without clarity. In your free consultation, we review your profile, documents, and timing—so you don’t waste time or money.
              </p>
            </article>
            <article className="card-highlight">
              <p className="eyebrow">NO HIDDEN STEPS</p>
              <h2 className="mt-2 text-3xl font-extrabold text-primary">Clarity first. Decisions after.</h2>
              <p className="mt-4 text-slate-600">
                This is a free eligibility review. If you need paid support, we explain it only after identifying the right pathway. No pressure. No confusion.
              </p>
            </article>
            <article className="card-highlight">
              <p className="eyebrow">REAL IMMIGRATION ADVICE</p>
              <h2 className="mt-2 text-3xl font-extrabold text-primary">Not opinions—licensed guidance</h2>
              <p className="mt-4 text-slate-600">
                Your case is reviewed by an RCIC-led team that understands how applications are actually assessed.
              </p>
            </article>
          </div>
        </section>

        <section className="section-shell bg-light">
          <div className="container-page grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="card-highlight p-6 md:p-8">
              <p className="eyebrow">WHY THIS STEP MATTERS</p>
              <h2 className="section-title mt-2">One wrong move can delay everything</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Waiting too long. Choosing the wrong stream. Submitting incomplete documents. That’s where most people go wrong.
              </p>
              <p className="mt-4 text-lg text-slate-600">A quick consultation helps you:</p>
              <ul className="mt-6 space-y-4">
                {[
                  "Choose the right work permit pathway",
                  "Fix document gaps early",
                  "Move forward with a clear plan",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-lg text-slate-600">
                    <CheckCircle className="mt-1 flex-none text-secondary" size={22} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div id="apply-section">
              <MultiStepForm
                serviceType="free consultation"
                questions={consultationQuestions}
                title="Start Your Free Consultation"
                subtitle="This is a free eligibility check. Detailed strategy and application support come after."
              />
            </div>
          </div>
        </section>

        <section className="section-shell bg-white" id="services">
          <div className="container-page">
            <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">SERVICES</p>
                <h2 className="section-title mt-2">Pick what you want reviewed</h2>
              </div>
              <a href="#apply-section" className="btn-secondary">
                Book Free Consultation
              </a>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <a key={service.id} href={service.path} className="group card-highlight overflow-hidden transition hover:-translate-y-1">
                  <img src={service.heroImage} alt={service.eyebrow} className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-105" />
                  <div className="min-h-[250px] p-5">
                    <p className="text-sm font-bold text-secondary">{service.shortTitle}</p>
                    <h3 className="mt-2 text-xl font-extrabold text-primary">{service.eyebrow}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
                    <span className="mt-5 inline-flex items-center gap-2 font-bold text-primary group-hover:text-secondary">
                      EXPLORE PATHWAY <ArrowRight size={17} />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <GoogleReviews />
        <MeetLoveneet />
        <ReelsSection />
        <Testimonials testimonials={homeTestimonials} intro="What clients say after working with us. Clear process. Strong documentation. Real results." />
      </main>
      <Footer />
    </>
  );
}
