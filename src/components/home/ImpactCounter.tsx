import { useEffect, useState, useRef } from "react";
import { Users, Home, Briefcase, Sprout } from "lucide-react";

const stats = [
  { icon: Users, value: 50000, suffix: "+", label: "Farmers Reached", description: "Direct beneficiaries" },
  { icon: Home, value: 250, suffix: "+", label: "Villages Covered", description: "Across Bangladesh" },
  { icon: Briefcase, value: 15, suffix: "", label: "Active Programs", description: "Ongoing initiatives" },
  { icon: Sprout, value: 10000, suffix: "+", label: "Hectares Improved", description: "Sustainable farming" },
];

const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return { count, ref };
};

export const ImpactCounter = () => {
  return (
    <section className="py-16 md:py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 font-serif">
            Our Impact in Numbers
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Measurable outcomes that demonstrate our commitment to rural development
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => {
            const { count, ref } = useCountUp(stat.value);
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                ref={ref}
                className="text-center p-6 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent flex items-center justify-center">
                  <Icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                  {count.toLocaleString()}{stat.suffix}
                </div>
                <div className="text-primary-foreground font-medium mb-1">{stat.label}</div>
                <div className="text-primary-foreground/60 text-sm">{stat.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
