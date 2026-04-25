import { motion } from "framer-motion";
import { Search, FileText, Send, Briefcase, ArrowRight } from "lucide-react";

const stepIcons = [Search, FileText, Send, Briefcase];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

export default function ProcessSteps({ steps }) {
  return (
    <section className="relative overflow-hidden bg-white py-24" id="process">
      {/* Decorative premium background grid/glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent opacity-100" />
      
      <div className="container-page relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-secondary/10 bg-secondary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-secondary mb-6">
            <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
            How we guide you
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight text-primary md:text-5xl lg:text-6xl">
            A clearer process for your immigration journey
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto">
            Four practical steps that keep your work permit application organized, compliant, and easy to follow.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 grid gap-6 lg:grid-cols-4"
        >
          {steps.map(([title, text], index) => {
            const Icon = stepIcons[index] || Search;
            return (
              <motion.article
                key={title}
                variants={cardVariants}
                className="group relative flex flex-col overflow-hidden rounded-[2.5rem] bg-white p-8 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-12px_rgba(29,78,216,0.15)] hover:ring-secondary/30"
              >
                {/* Subtle top gradient bar that animates on hover */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-secondary to-blue-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                {/* Background Number */}
                <div className="absolute -right-6 -top-10 z-0 text-[140px] font-black text-slate-50 transition-colors duration-500 group-hover:text-blue-50">
                  {index + 1}
                </div>

                <div className="relative z-10 flex flex-1 flex-col">
                  <div className="mb-8">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 text-secondary ring-1 ring-slate-200 transition-all duration-500 group-hover:bg-secondary group-hover:text-white group-hover:shadow-lg group-hover:shadow-secondary/30 group-hover:ring-secondary group-hover:scale-110">
                      <Icon size={28} strokeWidth={1.5} />
                    </div>
                  </div>

                  <div className="mb-2 text-sm font-bold uppercase tracking-widest text-secondary/80">Step 0{index + 1}</div>
                  <h3 className="mb-4 text-2xl font-bold text-primary">{title}</h3>
                  <p className="mb-8 leading-relaxed text-slate-600">{text}</p>

                  <div className="mt-auto pt-5 border-t border-slate-100">
                    <div className="inline-flex w-full items-center justify-between text-sm font-bold text-secondary transition-transform duration-300 group-hover:translate-x-1">
                      <span>
                        {index === 0 ? "Start with eligibility" : index === 1 ? "Gather documents" : index === 2 ? "Submit confidently" : "Move forward with work"}
                      </span>
                      <ArrowRight size={16} className="opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Info Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          <motion.article 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative overflow-hidden rounded-[2.5rem] bg-[#0A2540] p-10 text-white shadow-xl"
          >
            {/* Ambient background glow */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-secondary/20 blur-3xl transition-opacity duration-500 group-hover:bg-secondary/30" />
            
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white/90 backdrop-blur-sm">
                  Why it works
                </span>
                <h3 className="mt-6 text-3xl font-bold">Built around confidence</h3>
                <p className="mt-4 text-lg leading-relaxed text-slate-300">
                  The process is designed to reduce uncertainty and make each step feel purposeful, not overwhelming.
                </p>
              </div>
            </div>
          </motion.article>
          
          <motion.article 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative overflow-hidden rounded-[2.5rem] bg-slate-50 p-10 ring-1 ring-slate-200 hover:bg-white hover:shadow-xl transition-all duration-500"
          >
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <span className="inline-block rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-secondary shadow-sm ring-1 ring-slate-100">
                  What you avoid
                </span>
                <h3 className="mt-6 text-3xl font-bold text-primary">Common application delays</h3>
                <p className="mt-4 text-lg leading-relaxed text-slate-600">
                  We catch missing evidence, incorrect forms, and eligibility issues before they slow your case down.
                </p>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
