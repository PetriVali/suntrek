import { Navbar } from "@/components/Navbar";
import { StatusCard } from "@/components/StatusCard";
import { ControlPanel } from "@/components/ControlPanel";
import { SolarChart } from "@/components/SolarChart";
import { AngleChart } from "@/components/AngleChart";
import { DeviceSection } from "@/components/DeviceSection";
import { AboutSection } from "@/components/AboutSection";
import { Thermometer, Sun, Gauge, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent animate-fade-in">
            HelioSense Dashboard
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            Real-time monitoring and control of your intelligent solar tracking system
          </p>
        </div>
      </section>

      {/* Dashboard Section */}
      <section id="dashboard" className="py-12 px-4">
        <div className="container mx-auto">
          {/* Status Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatusCard
              icon={Thermometer}
              label="Temperature"
              value="28"
              unit="°C"
              color="warning"
            />
            <StatusCard
              icon={Sun}
              label="Light Intensity"
              value="87"
              unit="%"
              color="solar"
            />
            <StatusCard
              icon={Gauge}
              label="Azimuth Angle"
              value="145"
              unit="°"
              color="tech"
            />
            <StatusCard
              icon={Zap}
              label="Efficiency"
              value="94"
              unit="%"
              color="success"
            />
          </div>

          {/* Control Panel */}
          <div className="mb-8">
            <ControlPanel />
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <SolarChart />
            <AngleChart />
          </div>
        </div>
      </section>

      {/* Device Section */}
      <DeviceSection />

      {/* About Section */}
      <AboutSection />

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 HelioSense - Hackathon Sibiu Project</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
