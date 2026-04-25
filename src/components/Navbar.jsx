import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { company } from "../data/sharedContent.js";
import { services } from "../data/services.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["Home", "/"],
    ["Services", "#services"],
    ["Reviews", "#reviews"],
    ["Free Consultation", "#apply-section"],
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition ${
        scrolled ? "border-slate-200 bg-white/95 shadow-sm backdrop-blur" : "border-transparent bg-white/80"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <a href="/" className="flex items-center gap-3" aria-label="Brightlight Immigration home">
          <img src={company.icon} alt="Brightlight Immigration" className="h-11 w-auto object-contain" />
        </a>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-primary lg:flex">
          {links.slice(0, 3).map(([label, href]) => (
            <a key={label} href={href} className="transition hover:text-secondary">
              {label}
            </a>
          ))}
          <div className="group relative">
            <button className="font-semibold transition hover:text-secondary">Programs</button>
            <div className="invisible absolute right-0 top-full w-72 translate-y-2 rounded-lg border border-slate-200 bg-white p-3 opacity-0 shadow-xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {services.map((service) => (
                <a
                  key={service.id}
                  href={service.path}
                  className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-secondary"
                >
                  {service.eyebrow}
                </a>
              ))}
            </div>
          </div>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href={company.phoneHref} className="text-sm font-semibold text-primary hover:text-secondary">
            {company.phone}
          </a>
          <a href="#apply-section" className="btn-primary">
            Free Consultation
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-primary lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {[...links, ...services.map((service) => [service.eyebrow, service.path])].map(([label, href]) => (
              <a
                key={`${label}-${href}`}
                href={href}
                className="rounded-md px-3 py-3 font-semibold text-primary hover:bg-slate-50"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
