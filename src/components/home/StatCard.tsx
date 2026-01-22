import { useCountUp } from "@/hooks/use-count-up";

type Stat = {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  description: string;
};

export default function StatCard({
  icon: Icon,
  value,
  suffix,
  label,
  description,
}: Stat) {
  const { count, ref } = useCountUp(value);

  return (
    <div
      ref={ref}
      className="text-center p-6 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20"
    >
      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent flex items-center justify-center">
        <Icon className="w-6 h-6 text-accent-foreground" />
      </div>

      <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
        {count.toLocaleString()}
        {suffix}
      </div>

      <div className="text-primary-foreground font-medium mb-1">{label}</div>

      <div className="text-primary-foreground/60 text-sm">{description}</div>
    </div>
  );
}
