import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { company } from "../data/sharedContent.js";
import { services } from "../data/services.js";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container-page py-16">
        <div className="mb-10 rounded-[28px] border border-white/10 bg-white/5 p-8 text-center text-white shadow-soft sm:flex sm:items-center sm:justify-between sm:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">Ready to get clarity?</p>
            <p className="mt-3 text-2xl font-extrabold">Book your free Brightlight consultation today.</p>
          </div>
          <a href="#apply-section" className="btn-primary mt-4 inline-flex sm:mt-0">
            Start free consultation
          </a>
        </div>

        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <img src={company.logo} alt="Brightlight Immigration" className="mb-5 h-12 w-auto brightness-0 invert" />
            <p className="max-w-md text-slate-300">
              Trusted RCIC-licensed immigration consultants in Surrey, BC. We simplify work permits,
              visas, permanent residence pathways, and refusal concerns.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                [Linkedin, "https://ca.linkedin.com/in/loveneet-paneswar-5b2377198"],
                [Facebook, "https://www.facebook.com/brightlightimmigration"],
                [Instagram, "https://www.instagram.com/brightlightimmigration"],
                [Youtube, "https://www.youtube.com/channel/UC2NJoKhIOconAE_IFCxX7uA"],
              ].map(([Icon, href]) => (
                <a
                  key={href}
                  href={href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-secondary"
                  aria-label="Brightlight social profile"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-bold">Programs</h3>
            <ul className="space-y-3 text-slate-300">
              {services.map((service) => (
                <li key={service.id}>
                  <a href={service.path} className="hover:text-white">
                    {service.shortTitle}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-bold">Contact</h3>
            <ul className="space-y-4 text-slate-300">
              <li className="flex gap-3">
                <MapPin className="mt-1 text-accent" size={18} />
                <span>{company.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-1 text-accent" size={18} />
                <a href={company.phoneHref} className="hover:text-white">
                  {company.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-1 text-accent" size={18} />
                <a href={company.emailHref} className="hover:text-white">
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-slate-400">
          © 2026 Brightlight Immigration Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
