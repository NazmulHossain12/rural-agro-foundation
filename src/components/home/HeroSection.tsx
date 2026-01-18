import heroImage from "@/assets/hero-farmers.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Farmers working in rice paddy fields in rural Bangladesh"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto p-4 relative z-10">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-6 backdrop-blur-sm border border-primary-foreground/20">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Transforming Rural Bangladesh
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight font-serif">
            Empowering Rural Communities Through Sustainable Agriculture
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed">
            Building resilient farming communities, ensuring food security, and
            creating pathways to prosperity for millions of farmers across
            Bangladesh.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="accent" size="xl" asChild>
              <Link to="/get-involved" className="gap-2">
                <Heart className="w-5 h-5" />
                Donate Now
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/programs" className="gap-2">
                Our Programs
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/60 text-sm mb-3">
              Aligned with UN Sustainable Development Goals
            </p>
            <div className="flex items-center gap-4">
              {["SDG 1", "SDG 2", "SDG 5", "SDG 13"].map((sdg) => (
                <span
                  key={sdg}
                  className="px-3 py-1 rounded bg-primary-foreground/10 text-primary-foreground/80 text-xs font-medium backdrop-blur-sm"
                >
                  {sdg}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
