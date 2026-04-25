import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function Testimonials({ testimonials, intro = "Client success stories" }) {
  return (
    <section className="section-shell bg-primary relative overflow-hidden" id="testimonials">
      {/* Abstract background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/10 to-transparent pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-page relative z-10">
        <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <p className="font-bold uppercase tracking-[0.2em] text-accent flex items-center gap-2">
              <span className="w-8 h-px bg-accent" />
              Testimonials
            </p>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight md:text-6xl text-white">
              Trusted by thousands of <span className="text-accent">applicants</span>
            </h2>
            <p className="mt-6 text-xl text-blue-100/80 leading-relaxed font-medium">{intro}</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:flex rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-6 py-4 items-center gap-4 text-sm font-semibold text-blue-50 shadow-2xl"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-primary bg-slate-200" />
              ))}
            </div>
            <span>RCIC Licensed Expertise</span>
          </motion.div>
        </div>

        <motion.div 
          className="grid gap-6 md:grid-cols-3"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -10 }}
              className={`relative p-8 rounded-[40px] shadow-2xl transition-all duration-300 ${
                index === 0 
                  ? "md:col-span-2 bg-white border-b-4 border-accent" 
                  : "bg-white/95 backdrop-blur-sm border-t-4 border-secondary/20"
              }`}
            >
              <div className="absolute top-8 right-8 text-slate-100">
                <Quote size={48} fill="currentColor" />
              </div>

              <div className="mb-6 flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} size={20} fill="currentColor" />
                ))}
              </div>

              <p className={`leading-relaxed text-slate-700 ${
                index === 0 ? "text-xl md:text-2xl font-medium" : "text-lg"
              }`}>
                "{item.quote}"
              </p>

              <div className="mt-10 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-xl font-black text-white shadow-lg transform rotate-3">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-primary text-lg">{item.name}</h3>
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">{item.detail}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
