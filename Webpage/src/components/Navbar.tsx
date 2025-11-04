import { Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-solar flex items-center justify-center shadow-glow">
            <Sun className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            HelioSense
          </span>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection("dashboard")}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Dashboard
          </button>
          <button
            onClick={() => scrollToSection("device")}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Device
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            About Us
          </button>
        </div>

        <Button variant="default" className="bg-gradient-solar text-primary-foreground hover:opacity-90">
          Live Demo
        </Button>
      </div>
    </nav>
  );
};
