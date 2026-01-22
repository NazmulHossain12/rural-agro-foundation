import farmerCropsImage from "@/assets/farmer-crops.jpg";
import ruralVillageImage from "@/assets/rural-village.jpg";
import womenTrainingImage from "@/assets/women-training.jpg";
import { Layout } from "@/components/layout/Layout";
import {
  Apple,
  ArrowUpRight,
  Leaf,
  Quote,
  TrendingUp,
  Users,
} from "lucide-react";

const metrics = [
  { value: "25,000+", label: "Farmers Trained", change: "+25% from last year" },
  { value: "150+", label: "Villages Reached", change: "Across 15 districts" },
  {
    value: "8,000+",
    label: "Hectares Improved",
    change: "Sustainable practices",
  },
  { value: "35%", label: "Income Increase", change: "Average beneficiary" },
  { value: "40%", label: "Women Participants", change: "In our programs" },
  { value: "85%", label: "Food Secure", change: "Year-round availability" },
];

const stories = [
  {
    name: "Rashida Begum",
    location: "Rajshahi District",
    image: womenTrainingImage,
    quote:
      "The training changed everything for my family. I now grow vegetables year-round and have enough to sell at the market. My children no longer go hungry.",
    outcome: "Income increased by 40%, achieved year-round food security",
  },
  {
    name: "Mohammad Karim",
    location: "Mymensingh District",
    image: farmerCropsImage,
    quote:
      "Climate-smart techniques helped me save my crops during the floods. I learned to adapt and now help other farmers in my village do the same.",
    outcome: "Reduced crop losses by 60%, became a community trainer",
  },
];

const sdgAlignments = [
  {
    number: 1,
    title: "No Poverty",
    icon: TrendingUp,
    description: "Economic empowerment through agriculture",
  },
  {
    number: 2,
    title: "Zero Hunger",
    icon: Apple,
    description: "Food security and nutrition programs",
  },
  {
    number: 5,
    title: "Gender Equality",
    icon: Users,
    description: "Women farmer empowerment initiatives",
  },
  {
    number: 13,
    title: "Climate Action",
    icon: Leaf,
    description: "Climate-resilient farming practices",
  },
];

const Impact = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 font-serif">
              Our Impact
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Measurable, transparent outcomes that demonstrate how we're
              transforming rural communities across Bangladesh.
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">
              By The Numbers
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 font-serif">
              Impact Metrics
            </h2>
            <p className="text-muted-foreground">
              Transparent reporting on our reach and effectiveness
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="bg-card rounded-xl p-6 md:p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {metric.value}
                </div>
                <div className="text-foreground font-medium mb-1">
                  {metric.label}
                </div>
                <div className="text-muted-foreground text-sm flex items-center gap-1">
                  <ArrowUpRight className="w-4 h-4 text-primary" />
                  {metric.change}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">
              Voices from the Field
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 font-serif">
              Success Stories
            </h2>
            <p className="text-muted-foreground">
              Real stories of transformation from our beneficiaries
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {stories.map((story) => (
              <div
                key={story.name}
                className="bg-background rounded-2xl overflow-hidden shadow-md"
              >
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 md:p-8">
                  <Quote className="w-8 h-8 text-primary/30 mb-4" />
                  <p className="text-foreground text-lg italic mb-6 leading-relaxed">
                    "{story.quote}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold text-foreground">
                      {story.name}
                    </div>
                    <div className="text-muted-foreground text-sm mb-2">
                      {story.location}
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-sm font-medium text-accent-foreground">
                      <TrendingUp className="w-4 h-4" />
                      {story.outcome}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">
              In The Field
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 font-serif">
              Photo Gallery
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img
              src={womenTrainingImage}
              alt="Women training session"
              className="rounded-xl w-full h-64 object-cover shadow-md"
            />
            <img
              src={farmerCropsImage}
              alt="Farmer examining crops"
              className="rounded-xl w-full h-64 object-cover shadow-md"
            />
            <img
              src={ruralVillageImage}
              alt="Rural village aerial view"
              className="rounded-xl w-full h-64 object-cover shadow-md"
            />
          </div>
        </div>
      </section>

      {/* SDG Alignment */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">
              Global Goals
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 font-serif">
              SDG Alignment
            </h2>
            <p className="text-muted-foreground">
              Our work contributes to the United Nations Sustainable Development
              Goals
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sdgAlignments.map((sdg) => {
              const Icon = sdg.icon;
              return (
                <div
                  key={sdg.number}
                  className="bg-card rounded-xl p-6 border border-border text-center"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-xl font-bold text-primary-foreground">
                      {sdg.number}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {sdg.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {sdg.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Impact;
