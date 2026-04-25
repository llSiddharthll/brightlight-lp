import { CheckCircle } from "lucide-react";
import FAQ from "./FAQ.jsx";
import Footer from "./Footer.jsx";
import GoogleReviews from "./GoogleReviews.jsx";
import Hero from "./Hero.jsx";
import MeetLoveneet from "./MeetLoveneet.jsx";
import MultiStepForm from "./MultiStepForm.jsx";
import Navbar from "./Navbar.jsx";
import ProcessSteps from "./ProcessSteps.jsx";
import ReelsSection from "./ReelsSection.jsx";
import Testimonials from "./Testimonials.jsx";
import TrustBar from "./TrustBar.jsx";

export default function ServicePageLayout({ service }) {
  return (
    <>
      <Navbar />
      <main>
        <Hero service={service} />
        <TrustBar />

        <section className="section-shell bg-light" id="about">
          <div className="container-page grid items-stretch gap-8 lg:grid-cols-2">
            <div className="media-panel">
              <img
                src={service.aboutImage || service.heroImage}
                alt={service.eyebrow}
                className="h-full min-h-[420px] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft md:p-8">
              <h2 className="section-title">{service.detailTitle}</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">{service.detailText}</p>
              <ul className="mt-6 space-y-4">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-lg text-slate-600">
                    <CheckCircle className="mt-1 flex-none text-secondary" size={22} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <a href="#apply-section" className="btn-primary mt-8">
                Find Out If You Qualify
              </a>
            </div>
          </div>
        </section>

        <section className="section-shell bg-white">
          <div className="container-page">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">What customers appreciate</p>
              <h2 className="section-title mt-2">A clear review, no surprises, strong next step</h2>
              <p className="mt-4 text-lg text-slate-600">
                We focus on eligibility, document readiness, and a practical recommendation so you can move forward with confidence.
              </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Fast eligibility review",
                  text: "We identify the right pathway and risks before you invest in an application.",
                },
                {
                  title: "Transparent process",
                  text: "No hidden fees on the consultation call — just clear guidance and next steps.",
                },
                {
                  title: "RCIC-backed advice",
                  text: "Your consultation is reviewed by a licensed immigration consultant with real Canadian case experience.",
                },
              ].map((item) => (
                <article key={item.title} className="card-highlight text-left">
                  <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                  <p className="mt-3 text-slate-600">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ProcessSteps steps={service.process} />
        <GoogleReviews />
        <MeetLoveneet />
        <ReelsSection />
        <Testimonials testimonials={service.testimonials} intro={service.testimonialsIntro} />
        <FAQ items={service.faqs} />

        <section className="section-shell bg-white" id="apply-section">
          <div className="container-page max-w-3xl">
            <div className="mb-10 text-center">
              <p className="eyebrow">Free Consultation</p>
              <h2 className="section-title mt-2">Ready to start?</h2>
              <p className="mt-4 text-lg text-slate-600">
                Fill out the quick assessment and Brightlight will review your next best step.
              </p>
            </div>
            <MultiStepForm serviceType={service.eyebrow} questions={service.questions} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
