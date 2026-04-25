import { BadgeCheck, Linkedin, ShieldCheck, Shield, Users, FileText, Star } from "lucide-react";
import { loveneetProfile } from "../data/sharedContent.js";

export default function MeetLoveneet() {
  return (
    <section className="section-shell bg-light" id="expert">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-soft">
            <img
              src={loveneetProfile.image}
              alt="Loveneet Paneswar, Regulated Canadian Immigration Consultant"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="space-y-6">
            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
              <p className="eyebrow">Brightlight RCIC leadership</p>
              <h2 className="section-title mt-3">A licensed consultant for confident Canadian immigration decisions</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Loveneet Paneswar is a licensed RCIC and member in good standing with the College of Immigration and Citizenship Consultants.
                She provides accountable, document-first guidance for work permit and immigration pathways, so your next step is built on real eligibility.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="feature-card">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                    <Users size={20} />
                  </div>
                  <h3 className="font-semibold text-primary">Client-first RCIC support</h3>
                  <p className="mt-2 text-slate-600">Regulated immigration advice that keeps your case compliant and easy to follow.</p>
                </div>
                <div className="feature-card">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                    <FileText size={20} />
                  </div>
                  <h3 className="font-semibold text-primary">Document-led review</h3>
                  <p className="mt-2 text-slate-600">Every consultation begins with real documents, not guesswork, for a stronger recommendation.</p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="stat-card">
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                  <Star size={20} />
                </div>
                <p className="font-semibold text-primary">12+ years of Canadian immigration experience</p>
              </div>
              <div className="stat-card">
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                  <Users size={20} />
                </div>
                <p className="font-semibold text-primary">5,000+ applicants supported with clear advice</p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={loveneetProfile.booking} className="btn-primary flex-1 justify-center">
                Book an RCIC consultation
              </a>
              <a href={loveneetProfile.linkedin} className="btn-secondary flex-1 justify-center" target="_blank" rel="noreferrer">
                View LinkedIn profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
