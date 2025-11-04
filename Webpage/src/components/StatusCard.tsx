import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface StatusCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  unit: string;
  color: "solar" | "tech" | "success" | "warning";
}

const colorClasses = {
  solar: "bg-primary/10 text-primary",
  tech: "bg-secondary/10 text-secondary",
  success: "bg-success/10 text-success",
  warning: "bg-warning/10 text-warning",
};

export const StatusCard = ({ icon: Icon, label, value, unit, color }: StatusCardProps) => {
  return (
    <Card className="p-6 shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in">
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl ${colorClasses[color]}`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
      <p className="text-sm text-muted-foreground mb-1">{label}</p>
      <div className="flex items-baseline gap-1">
        <span className="text-3xl font-bold text-foreground">{value}</span>
        <span className="text-sm text-muted-foreground">{unit}</span>
      </div>
    </Card>
  );
};
