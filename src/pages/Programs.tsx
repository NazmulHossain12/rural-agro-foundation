import { Layout } from "@/components/layout/Layout";
import { Leaf, GraduationCap, Apple, Cloud, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import farmerCropsImage from "@/assets/farmer-crops.jpg";

const programs = [
  {
    id: "sustainable-agriculture",
    icon: Leaf,
    title: "Sustainable Agriculture Development",
    problem: "Traditional farming practices often lead to soil degradation, water waste, and low yields, trapping farmers in cycles of poverty.",
    intervention: "We introduce integrated farming systems, organic practices, crop diversification, and efficient irrigation techniques that boost productivity while preserving natural resources.",
    beneficiaries: "Smallholder farmers, farming cooperatives, rural communities",
    outcomes: "30% increase in crop yields, reduced input costs, improved soil health, and enhanced biodiversity.",
  },
  {
    id: "farmer-training",
    icon: GraduationCap,
    title: "Farmer Training & Capacity Building",
    problem: "Many farmers lack access to modern agricultural knowledge, limiting their ability to improve practices and income.",
    intervention: "Comprehensive training programs covering improved cultivation techniques, pest management, post-harvest handling, financial literacy, and market access.",
    beneficiaries: "Farmers, agricultural extension workers, community leaders",
    outcomes: "Enhanced skills for 10,000+ farmers annually, improved farm management, and increased market participation.",
  },
  {
    id: "food-security",
    icon: Apple,
    title: "Food Security & Nutrition",
    problem: "Rural households face seasonal food shortages and nutritional deficiencies, particularly affecting women and children.",
    intervention: "Homestead gardening programs, nutritional education, food preservation training, and establishing community seed banks.",
    beneficiaries: "Rural households, women, children under 5",
    outcomes: "Year-round food availability, improved dietary diversity, and reduced malnutrition rates.",
  },
  {
    id: "climate-resilience",
    icon: Cloud,
    title: "Climate-Resilient Farming",
    problem: "Climate change threatens agriculture through unpredictable weather, flooding, drought, and new pest patterns.",
    intervention: "Climate-smart agricultural practices, drought-resistant varieties, flood-adaptive farming, early warning systems, and disaster preparedness training.",
    beneficiaries: "Farmers in climate-vulnerable areas, coastal communities",
    outcomes: "Increased adaptive capacity, reduced crop losses, and sustainable livelihoods despite climate challenges.",
  },
  {
    id: "women-youth",
    icon: Users,
    title: "Women & Youth Empowerment",
    problem: "Women and youth face barriers to agricultural leadership, land access, and economic opportunities.",
    intervention: "Women farmer groups, youth agricultural training, entrepreneurship support, leadership development, and access to resources and markets.",
    beneficiaries: "Rural women, young farmers, women-headed households",
    outcomes: "Increased women's participation in agriculture, youth engagement, and economic independence.",
  },
];

const Programs = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 font-serif">
              Our Programs
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Integrated interventions that address the root causes of rural poverty and create pathways to sustainable prosperity.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <img
              src={farmerCropsImage}
              alt="Young farmer examining crops"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {programs.map((program, index) => {
              const Icon = program.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={program.id}
                  id={program.id}
                  className={`grid grid-cols-1 lg:grid-cols-3 gap-8 items-start ${isEven ? "" : "lg:flex-row-reverse"}`}
                >
                  {/* Header */}
                  <div className="lg:col-span-1">
                    <div className="sticky top-24">
                      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-serif">
                        {program.title}
                      </h2>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="lg:col-span-2 space-y-6">
                    <div className="bg-background rounded-xl p-6 border border-border">
                      <h3 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">The Problem</h3>
                      <p className="text-muted-foreground">{program.problem}</p>
                    </div>

                    <div className="bg-background rounded-xl p-6 border border-border">
                      <h3 className="text-sm font-semibold text-secondary uppercase tracking-wide mb-2">Our Intervention</h3>
                      <p className="text-muted-foreground">{program.intervention}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-accent/30 rounded-xl p-6">
                        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-2">Beneficiaries</h3>
                        <p className="text-muted-foreground text-sm">{program.beneficiaries}</p>
                      </div>

                      <div className="bg-primary/10 rounded-xl p-6">
                        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-2">Expected Outcomes</h3>
                        <p className="text-muted-foreground text-sm">{program.outcomes}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-serif">
              Support Our Programs
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Your contribution helps us expand these life-changing programs to more communities across Bangladesh.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="xl" asChild>
                <Link to="/get-involved" className="gap-2">
                  Donate Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Programs;
