import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Heart, Handshake, Users, Building, GraduationCap, Globe, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const donationTiers = [
  { amount: "৳1,000", impact: "Train 1 farmer in sustainable practices", usd: "~$10" },
  { amount: "৳5,000", impact: "Provide seeds & tools for a homestead garden", usd: "~$50" },
  { amount: "৳25,000", impact: "Support a women's farming group for a month", usd: "~$250" },
  { amount: "৳100,000", impact: "Fund a community training program", usd: "~$1,000" },
];

const partnerTypes = [
  {
    icon: Building,
    title: "Corporate Partners",
    description: "Align your CSR objectives with impactful rural development. We offer program sponsorship, employee engagement, and impact reporting.",
    benefits: ["Tax-deductible contributions", "Impact reports & visibility", "Employee volunteer programs"],
  },
  {
    icon: Globe,
    title: "Development Agencies",
    description: "Collaborate on scalable programs addressing food security, climate resilience, and sustainable livelihoods.",
    benefits: ["Program co-design", "M&E frameworks", "Knowledge sharing"],
  },
  {
    icon: GraduationCap,
    title: "Academic Institutions",
    description: "Partner on research, student internships, and knowledge exchange for evidence-based programming.",
    benefits: ["Research partnerships", "Field placement opportunities", "Data access"],
  },
];

const volunteerOpportunities = [
  "Agricultural training facilitation",
  "Program monitoring & evaluation",
  "Content creation & communications",
  "Fundraising & donor engagement",
  "Technical expertise (agronomy, nutrition, climate)",
];

const GetInvolved = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 font-serif">
              Get Involved
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Join us in transforming rural communities. Whether through donation, partnership, or volunteering—every contribution creates lasting change.
            </p>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-serif">
                Make a Donation
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Your contribution directly funds farmer training, food security programs, and community development initiatives. Every donation is used transparently and effectively.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>100% goes to program activities</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Regular impact updates</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Tax-deductible where applicable</span>
                </div>
              </div>
              <Button variant="default" size="xl" asChild>
                <Link to="/contact" className="gap-2">
                  Donate Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {donationTiers.map((tier) => (
                <div
                  key={tier.amount}
                  className="bg-card rounded-xl p-6 border border-border hover:border-primary hover:shadow-lg transition-all cursor-pointer"
                >
                  <div className="text-2xl font-bold text-primary mb-1">{tier.amount}</div>
                  <div className="text-muted-foreground text-xs mb-3">{tier.usd}</div>
                  <p className="text-foreground text-sm">{tier.impact}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="w-16 h-16 mx-auto rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
              <Handshake className="w-8 h-8 text-secondary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
              Partner With Us
            </h2>
            <p className="text-muted-foreground text-lg">
              Collaborate with Rural Agro Foundation to scale impact and achieve shared development goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerTypes.map((partner) => {
              const Icon = partner.icon;
              return (
                <div
                  key={partner.title}
                  className="bg-background rounded-xl p-8 border border-border"
                >
                  <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{partner.title}</h3>
                  <p className="text-muted-foreground mb-6">{partner.description}</p>
                  <ul className="space-y-2">
                    {partner.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-secondary" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Button variant="warm" size="lg" asChild>
              <Link to="/contact" className="gap-2">
                Discuss Partnership
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 rounded-xl bg-accent flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-accent-foreground" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-serif">
                  Volunteer With Us
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Share your skills and time to make a meaningful difference in rural communities. We welcome volunteers with diverse expertise.
                </p>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact" className="gap-2">
                    Apply to Volunteer
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>

              <div className="bg-card rounded-xl p-8 border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">Opportunities Include:</h3>
                <ul className="space-y-3">
                  {volunteerOpportunities.map((opportunity) => (
                    <li key={opportunity} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      {opportunity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GetInvolved;
