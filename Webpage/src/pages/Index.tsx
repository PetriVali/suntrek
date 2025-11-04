import { Navbar } from "@/components/Navbar";
import { ControlPanel } from "@/components/ControlPanel";
import { SolarChart } from "@/components/SolarChart";
import { AngleChart } from "@/components/AngleChart";
import { StatusCard } from "@/components/StatusCard";
import { AboutSection } from "@/components/AboutSection";
import { DeviceSection } from "@/components/DeviceSection";
import { Sun, ThermometerSun, Gauge, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 bg-gradient-hero">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                HelioSense: Intelligent Solar Tracking
              </h1>
              <p className="text-muted-foreground mb-6">
                Real-time monitoring and control dashboard that maximizes solar energy capture with smart sun tracking.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <StatusCard icon={Zap} label="Efficiency" value="40%" unit="gain" color="success" />
                <StatusCard icon={ThermometerSun} label="Temp" value="28" unit="°C" color="warning" />
                <StatusCard icon={Gauge} label="Power" value="320" unit="W" color="tech" />
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="w-64 h-64 rounded-3xl bg-gradient-solar flex items-center justify-center shadow-glow animate-glow-pulse">
                <Sun className="w-24 h-24 text-primary-foreground" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section id="dashboard" className="py-12 px-4">
        <div className="container mx-auto grid gap-6">
          <ControlPanel />
          <div className="grid md:grid-cols-2 gap-6">
            <SolarChart />
            <AngleChart />
          </div>
        </div>
      </section>

      {/* Device Section */}
      <DeviceSection />

      {/* About Section */}
      <AboutSection />

      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
        Built for Hackathon Sibiu • HelioSense
      </footer>
    </div>
  );
};

export default Index;
