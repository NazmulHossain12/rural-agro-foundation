import { Button } from "@/components/ui/button";
import { Handshake, Heart, Users } from "lucide-react";
import { Link } from "react-router-dom";

export const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">
            Take Action
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 font-serif">
            Join Us in Creating Change
          </h2>
          <p className="text-muted-foreground text-lg">
            Whether through donation, partnership, or volunteering, your support
            transforms lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card rounded-xl p-8 text-center shadow-sm border border-border hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Donate
            </h3>
            <p className="text-muted-foreground mb-6">
              Your contribution directly supports farmer training, food security
              programs, and community development.
            </p>
            <Button variant="default" size="lg" className="w-full" asChild>
              <Link to="/get-involved">Give Now</Link>
            </Button>
          </div>

          <div className="bg-card rounded-xl p-8 text-center shadow-sm border border-border hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary/10 flex items-center justify-center">
              <Handshake className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Partner
            </h3>
            <p className="text-muted-foreground mb-6">
              Collaborate with us as an NGO, corporate partner, or development
              agency to scale our impact.
            </p>
            <Button variant="warm" size="lg" className="w-full" asChild>
              <Link to="/get-involved">Become a Partner</Link>
            </Button>
          </div>

          <div className="flex flex-col justify-between bg-card rounded-xl p-8 text-center shadow-sm border border-border hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center">
              <Users className="w-8 h-8 text-accent-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Volunteer
            </h3>
            <p className="text-muted-foreground mb-6">
              Share your skills and time to make a meaningful difference in
              rural communities.
            </p>
            <Button variant="accent" size="lg" className="w-full" asChild>
              <Link to="/get-involved">Get Involved</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
