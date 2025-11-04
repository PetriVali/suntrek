import { Play, Hand, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { toast } from "sonner";

export const ControlPanel = () => {
  const [mode, setMode] = useState<"auto" | "manual">("auto");

  const handleAutoTracking = () => {
    setMode("auto");
    toast.success("Auto Tracking enabled", {
      description: "HelioSense is now tracking the sun automatically",
    });
  };

  const handleManualMode = () => {
    setMode("manual");
    toast.info("Manual Mode enabled", {
      description: "You can now control the panel position manually",
    });
  };

  const handleReset = () => {
    toast.success("Position reset", {
      description: "Panel returned to default position",
    });
  };

  return (
    <Card className="p-6 shadow-card">
      <h3 className="text-lg font-semibold mb-4 text-foreground">Control Panel</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Button
          onClick={handleAutoTracking}
          variant={mode === "auto" ? "default" : "outline"}
          className="flex items-center gap-2 bg-gradient-solar text-primary-foreground hover:opacity-90"
        >
          <Play className="w-4 h-4" />
          Auto Tracking
        </Button>
        <Button
          onClick={handleManualMode}
          variant={mode === "manual" ? "default" : "outline"}
          className="flex items-center gap-2"
        >
          <Hand className="w-4 h-4" />
          Manual Mode
        </Button>
        <Button
          onClick={handleReset}
          variant="outline"
          className="flex items-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          Reset Position
        </Button>
      </div>
    </Card>
  );
};
