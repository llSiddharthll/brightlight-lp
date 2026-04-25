import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "../components/Footer.jsx";
import GoogleReviews from "../components/GoogleReviews.jsx";
import Hero from "../components/Hero.jsx";
import MeetLoveneet from "../components/MeetLoveneet.jsx";
import MultiStepForm from "../components/MultiStepForm.jsx";
import Navbar from "../components/Navbar.jsx";
import ReelsSection from "../components/ReelsSection.jsx";
import Testimonials from "../components/Testimonials.jsx";
import TrustBar from "../components/TrustBar.jsx";
import { consultationQuestions, services } from "../data/services.js";

const homeHero = {
  eyebrow: "Free Immigration Consultation",
  title: "Get Clear Work Permit Guidance Before You Apply",
  description:
    "Book a free consultation with Brightlight Immigration to review your eligibility, documents, and next best immigration step.",
  heroImage:
    "/images/home_hero_1777109594276.png",
  highlights: [
    { title: "RCIC Licensed Review", text: "Know your realistic options" },
    { title: "Fast qualification", text: "Start with a 60-second review" },
  ],
};

const homeTestimonials = services.flatMap((service) => service.testimonials).slice(0, 5);

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero service={homeHero} home />
        <TrustBar />

        <section className="section-shell bg-white">
          <div className="container-page grid gap-5 lg:grid-cols-3">
            <article className="card-highlight">
              <p className="eyebrow">Fast clarity</p>
              <h2 className="mt-2 text-3xl font-extrabold text-primary">Know your best work permit pathway in minutes</h2>
              <p className="mt-4 text-slate-600">
                We review your options, documents, and timing during a free consultation so you can avoid delays and costly mistakes.
              </p>
            </article>
            <article className="card-highlight">
              <p className="eyebrow">Transparent support</p>
              <h2 className="mt-2 text-3xl font-extrabold text-primary">No surprise fees for the first review</h2>
              <p className="mt-4 text-slate-600">Your free consultation is an eligibility review. Paid services and application fees are discussed only after we confirm your best move.</p>
            </article>
            <article className="card-highlight">
              <p className="eyebrow">Trusted guidance</p>
              <h2 className="mt-2 text-3xl font-extrabold text-primary">RCIC-backed advice for every case</h2>
              <p className="mt-4 text-slate-600">Get a recommendation from licensed immigration professionals who know Canadian work permit pathways.</p>
            </article>
          </div>
        </section>

        <section className="section-shell bg-light">
          <div className="container-page grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="card-highlight p-6 md:p-8">
              <p className="eyebrow">Why Book First</p>
              <h2 className="section-title mt-2">Avoid guessing on eligibility, documents, and timing</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Immigration decisions are expensive when they are rushed or based on incomplete advice. A free consultation gives you a focused review before you choose the right work permit path.
              </p>
              <ul className="mt-6 space-y-4">
                {[
                  "Confirm which work permit stream fits your situation.",
                  "Understand document gaps before filing.",
                  "Get next steps from an RCIC-licensed team.",
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
                title="Book Your Free Consultation"
              />
            </div>
          </div>
        </section>

        <section className="section-shell bg-white relative overflow-hidden" id="services">
          {/* Decorative background element */}
          <div className="absolute top-1/2 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="container-page relative z-10">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="eyebrow inline-flex items-center gap-2">
                  <span className="w-8 h-px bg-secondary" />
                  Services
                </p>
                <h2 className="section-title mt-2">Choose the pathway you want reviewed</h2>
              </motion.div>
              <motion.a 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                href="#apply-section" 
                className="btn-secondary group"
              >
                Book Your Review
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>

            <motion.div 
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {services.map((service) => (
                <motion.a
                  key={service.id}
                  href={service.path}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 }
                  }}
                  className="group relative flex flex-col h-full rounded-[32px] bg-white border border-slate-100 shadow-xl shadow-slate-200/40 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/10 hover:-translate-y-2"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={service.heroImage}
                      alt={service.eyebrow}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-black uppercase tracking-widest text-primary shadow-sm border border-white/20">
                        {service.shortTitle}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col flex-1 p-6">
                    <h3 className="text-xl font-black text-primary leading-tight group-hover:text-secondary transition-colors">
                      {service.eyebrow}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-500 line-clamp-3">
                      {service.description}
                    </p>
                    
                    <div className="mt-auto pt-6 flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary group-hover:text-secondary transition-all">
                        Explore Pathway
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                      <div className="h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-secondary group-hover:text-white transition-all">
                        <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>

        <GoogleReviews />
        <MeetLoveneet />
        <ReelsSection />
        <Testimonials testimonials={homeTestimonials} intro="Real client stories across Brightlight work permit services." />
      </main>
      <Footer />
    </>
  );
}
