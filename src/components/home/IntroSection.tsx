import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import womenTrainingImage from "@/assets/women-training.jpg";

export const IntroSection = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6 font-serif">
              Transforming Lives Through Agriculture
            </h2>
            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                Rural Agro Foundation is a Bangladesh-based non-profit organization dedicated to improving the lives of rural farming communities through sustainable agricultural practices and holistic development programs.
              </p>
              <p>
                Since our founding, we have worked tirelessly to address the challenges facing smallholder farmers—from limited access to modern techniques and resources to the growing threats of climate change.
              </p>
              <p>
                Our approach combines technical training, community mobilization, and partnerships with government and international organizations to create lasting, measurable impact.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" size="lg" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/impact">See Our Impact</Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={womenTrainingImage}
                alt="Women farmers receiving agricultural training"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent rounded-lg -z-10" />
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
