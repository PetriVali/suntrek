import { Card } from "@/components/ui/card";
import { Sun, Cpu, Battery, Wifi } from "lucide-react";

const features = [
  {
    icon: Sun,
    title: "Solar Tracking",
    description: "Automatic sun position detection and panel alignment for maximum efficiency",
  },
  {
    icon: Cpu,
    title: "Smart Control",
    description: "Advanced algorithms optimize energy capture throughout the day",
  },
  {
    icon: Battery,
    title: "High Efficiency",
    description: "Up to 40% more energy captured compared to static panels",
  },
  {
    icon: Wifi,
    title: "IoT Connected",
    description: "Real-time monitoring and remote control via cloud dashboard",
  },
];

export const DeviceSection = () => {
  return (
    <section id="device" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Meet HelioSense
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            An intelligent solar tracking system that maximizes energy capture by automatically
            following the sun's position throughout the day
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-solar flex items-center justify-center mb-4 shadow-glow">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        <Card className="p-8 shadow-card bg-gradient-to-br from-card to-muted/30">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">How It Works</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Light Detection</h4>
                    <p className="text-sm text-muted-foreground">
                      Multiple sensors detect light intensity from all directions
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Smart Processing</h4>
                    <p className="text-sm text-muted-foreground">
                      Microcontroller calculates optimal panel position
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Precise Movement</h4>
                    <p className="text-sm text-muted-foreground">
                      Servo motors adjust panel angle in real-time
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-solar rounded-2xl p-8 flex items-center justify-center min-h-[300px] shadow-glow animate-glow-pulse">
              <Sun className="w-32 h-32 text-primary-foreground" />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
