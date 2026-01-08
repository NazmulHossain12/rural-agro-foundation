import { Leaf, GraduationCap, Apple, Cloud, Users } from "lucide-react";
import { Link } from "react-router-dom";

const focusAreas = [
  {
    icon: Leaf,
    title: "Sustainable Agriculture",
    description: "Promoting eco-friendly farming practices that increase yields while preserving natural resources.",
  },
  {
    icon: GraduationCap,
    title: "Farmer Training",
    description: "Equipping farmers with modern techniques and knowledge for improved productivity.",
  },
  {
    icon: Apple,
    title: "Food Security",
    description: "Ensuring access to nutritious food for vulnerable rural communities year-round.",
  },
  {
    icon: Cloud,
    title: "Climate Resilience",
    description: "Building adaptive capacity to face climate change challenges in agriculture.",
  },
  {
    icon: Users,
    title: "Women & Youth",
    description: "Empowering women and youth through agricultural entrepreneurship and leadership.",
  },
];

export const FocusAreas = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 font-serif">
            Our Focus Areas
          </h2>
          <p className="text-muted-foreground text-lg">
            Integrated approaches to rural development that create lasting change in communities across Bangladesh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {focusAreas.slice(0, 3).map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.title}
                className="group p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{area.title}</h3>
                <p className="text-muted-foreground">{area.description}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {focusAreas.slice(3).map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.title}
                className="group p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{area.title}</h3>
                <p className="text-muted-foreground">{area.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            Explore All Programs →
          </Link>
        </div>
      </div>
    </section>
  );
};
