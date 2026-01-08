import { Layout } from "@/components/layout/Layout";
import { Target, Eye, Heart, Shield, Users, Lightbulb } from "lucide-react";
import ruralVillageImage from "@/assets/rural-village.jpg";

const values = [
  { icon: Heart, title: "Compassion", description: "We deeply care about the communities we serve" },
  { icon: Shield, title: "Integrity", description: "Transparent and accountable in all our actions" },
  { icon: Users, title: "Inclusivity", description: "Empowering marginalized and vulnerable groups" },
  { icon: Lightbulb, title: "Innovation", description: "Embracing modern solutions for traditional challenges" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 font-serif">
              About Rural Agro Foundation
            </h1>
            <p className="text-xl text-primary-foreground/80">
              A Bangladesh-based non-profit committed to transforming rural communities through sustainable agriculture and holistic development.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wide">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6 font-serif">
                Building a Foundation for Rural Prosperity
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Rural Agro Foundation was established with a clear purpose: to bridge the gap between traditional farming practices and modern agricultural innovations that can transform livelihoods.
                </p>
                <p>
                  Bangladesh's rural economy depends heavily on agriculture, yet millions of smallholder farmers face challenges including limited access to training, climate vulnerability, market access issues, and food insecurity.
                </p>
                <p>
                  We believe that by empowering farmers with knowledge, resources, and sustainable practices, we can create a ripple effect of positive change—improving food security, increasing incomes, and building resilient communities that can thrive for generations.
                </p>
                <p>
                  Our work is guided by a commitment to transparency, measurable impact, and partnerships that amplify our reach and effectiveness.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={ruralVillageImage}
                alt="Aerial view of rural Bangladesh village"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary rounded-2xl p-8 md:p-10">
              <div className="w-14 h-14 rounded-lg bg-primary-foreground/20 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-primary-foreground mb-4 font-serif">Our Vision</h3>
              <p className="text-primary-foreground/80 text-lg leading-relaxed">
                A Bangladesh where every rural community thrives through sustainable agriculture, food security, and economic empowerment—where farmers are agents of change and stewards of the environment.
              </p>
            </div>

            <div className="bg-secondary rounded-2xl p-8 md:p-10">
              <div className="w-14 h-14 rounded-lg bg-secondary-foreground/20 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-foreground mb-4 font-serif">Our Mission</h3>
              <p className="text-secondary-foreground/80 text-lg leading-relaxed">
                To empower rural farming communities through capacity building, sustainable agricultural practices, and integrated development programs that improve livelihoods, enhance food security, and build climate resilience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 font-serif">
              What Guides Our Work
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="text-center p-6 rounded-xl bg-card border border-border">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">Governance</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6 font-serif">
              Committed to Transparency & Accountability
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Rural Agro Foundation operates with the highest standards of governance, ensuring that every contribution is used effectively and transparently to serve our beneficiaries.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <div className="text-3xl font-bold text-primary mb-2">90%</div>
                <p className="text-muted-foreground text-sm">Program Spending Ratio</p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <div className="text-3xl font-bold text-primary mb-2">Annual</div>
                <p className="text-muted-foreground text-sm">Financial Audits</p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <div className="text-3xl font-bold text-primary mb-2">Open</div>
                <p className="text-muted-foreground text-sm">Impact Reporting</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
