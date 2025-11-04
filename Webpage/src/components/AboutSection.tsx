import { Card } from "@/components/ui/card";
import { Lightbulb, Pencil, Wrench, FlaskConical } from "lucide-react";

const timeline = [
  {
    icon: Lightbulb,
    title: "Ideation",
    description: "Identified the need for smarter solar energy solutions",
    color: "solar" as const,
  },
  {
    icon: Pencil,
    title: "Design",
    description: "Created schematics and selected optimal components",
    color: "tech" as const,
  },
  {
    icon: Wrench,
    title: "Prototyping",
    description: "Built and assembled the first working prototype",
    color: "warning" as const,
  },
  {
    icon: FlaskConical,
    title: "Testing",
    description: "Refined algorithms and validated performance",
    color: "success" as const,
  },
];

const colorClasses = {
  solar: "bg-primary/10 border-primary text-primary",
  tech: "bg-secondary/10 border-secondary text-secondary",
  success: "bg-success/10 border-success text-success",
  warning: "bg-warning/10 border-warning text-warning",
};

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            About HelioSense
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built with passion for Hackathon Sibiu - our journey from concept to reality
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {timeline.map((phase, index) => (
            <Card
              key={index}
              className="p-6 shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 rounded-2xl border-2 flex items-center justify-center mb-4 ${colorClasses[phase.color]}`}>
                <phase.icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{phase.title}</h3>
              <p className="text-sm text-muted-foreground">{phase.description}</p>
            </Card>
          ))}
        </div>

        <Card className="p-8 shadow-card">
          <h3 className="text-2xl font-bold mb-6 text-center text-foreground">Our Mission</h3>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
            HelioSense was created to address the inefficiency of static solar panels. By automatically
            tracking the sun's position, our device ensures maximum energy capture throughout the day,
            making solar power more accessible and efficient. We believe in a future where renewable
            energy is optimized through intelligent automation, and HelioSense is our contribution to
            that vision.
          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">40%</div>
              <p className="text-sm text-muted-foreground">Efficiency Increase</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
              <p className="text-sm text-muted-foreground">Monitoring</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success mb-2">100%</div>
              <p className="text-sm text-muted-foreground">Automated</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
