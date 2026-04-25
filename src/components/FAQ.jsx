import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQ({ items, title = "Frequently Asked Questions" }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-shell bg-light" id="faq">
      <div className="container-page max-w-4xl">
        <div className="mb-10 text-center">
          <h2 className="section-title">{title}</h2>
          <p className="mt-4 text-lg text-slate-600">Clear answers before you book your consultation.</p>
        </div>
        <div className="space-y-4">
          {items.map(([question, answer], index) => {
            const open = openIndex === index;
            return (
              <div key={question} className="card overflow-hidden">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-lg font-bold text-primary"
                  onClick={() => setOpenIndex(open ? -1 : index)}
                >
                  <span>{question}</span>
                  <ChevronDown className={`flex-none transition ${open ? "rotate-180" : ""}`} size={20} />
                </button>
                {open && <div className="border-t border-slate-200 px-5 py-5 text-slate-600">{answer}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
