import { Briefcase, Home, Sprout, Users } from "lucide-react";
import StatCard from "./StatCard";

const stats = [
  {
    icon: Users,
    value: 25000,
    suffix: "+",
    label: "Farmers Reached",
    description: "Direct beneficiaries",
  },
  {
    icon: Home,
    value: 150,
    suffix: "+",
    label: "Villages Covered",
    description: "Across Bangladesh",
  },
  {
    icon: Briefcase,
    value: 7,
    suffix: "",
    label: "Active Programs",
    description: "Ongoing initiatives",
  },
  {
    icon: Sprout,
    value: 8000,
    suffix: "+",
    label: "Hectares Improved",
    description: "Sustainable farming",
  },
];

export const ImpactCounter = () => {
  return (
    <section className="py-16 md:py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 font-serif">
            Our Impact in Numbers
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Measurable outcomes that demonstrate our commitment to rural
            development
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};
