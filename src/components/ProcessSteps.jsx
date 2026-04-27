import { motion } from "framer-motion";
import { Search, FileText, Send, Briefcase } from "lucide-react";

const stepIcons = [Search, FileText, Send, Briefcase];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.16,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 22, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export default function ProcessSteps({ steps }) {
  return (
    <section className="section-shell bg-white" id="process">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="eyebrow">How we guide you</p>
          <h2 className="section-title mt-3">A clearer process for your immigration journey</h2>
          <p className="mt-4 text-lg text-slate-600">
            Four practical steps that keep your work permit application organized, compliant, and easy to follow.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-12 grid gap-5 lg:grid-cols-4"
        >
          {steps.map(([title, text], index) => {
            const Icon = stepIcons[index] || Search;
            return (
              <motion.article
                key={title}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group overflow-hidden rounded-[32px] border border-slate-200 bg-slate-50 p-8 shadow-soft transition duration-300 hover:border-secondary/40 hover:bg-white hover:shadow-xl"
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-secondary">Step {index + 1}</p>
                    <h3 className="mt-3 text-2xl font-bold text-primary">{title}</h3>
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-secondary to-accent text-white shadow-glow">
                    <Icon size={22} />
                  </div>
                </div>
                <p className="leading-7 text-slate-600">{text}</p>
                <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-secondary/15 bg-secondary/5 px-4 py-2 text-sm font-semibold text-secondary">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-white">{index + 1}</span>
                  <span>{index === 0 ? "Start with eligibility" : index === 1 ? "Gather documents" : index === 2 ? "Submit confidently" : "Move forward with work"}</span>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <article className="rounded-[28px] border border-slate-200 bg-slate-950 p-6 text-white shadow-soft">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Why it works</p>
            <h3 className="mt-3 text-2xl font-bold">Built around confidence</h3>
            <p className="mt-3 leading-7 text-slate-300">
              The process is designed to reduce uncertainty and make each step feel purposeful, not overwhelming.
            </p>
          </article>
          <article className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
            <p className="text-sm uppercase tracking-[0.28em] text-secondary">What you avoid</p>
            <h3 className="mt-3 text-2xl font-bold text-primary">Common application delays</h3>
            <p className="mt-3 leading-7 text-slate-600">
              We catch missing evidence, incorrect forms, and eligibility issues before they slow your case down.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
