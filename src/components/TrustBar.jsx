import { Award, BadgeCheck, Star, Users } from "lucide-react";

const items = [
  [Users, "5,000+ applicants"],
  [BadgeCheck, "RCIC Licensed"],
  [Award, "5,000+ Visas"],
  [Star, "12+ Years Experience"],
];

export default function TrustBar() {
  return (
    <section className="border-y border-slate-200 bg-white py-8">
      <div className="container-page flex flex-wrap justify-center gap-6 md:gap-12">
        {items.map(([Icon, label]) => (
          <div key={label} className="flex items-center gap-3 font-bold text-primary">
            <Icon className="text-secondary" size={28} />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
