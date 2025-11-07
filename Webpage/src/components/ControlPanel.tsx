import { Play, Hand, Pause, ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export const ControlPanel = () => {
  const [mode, setMode] = useState<"auto" | "manual" | "idle">("auto");
  const [manualOpen, setManualOpen] = useState(false);

  const handleAutoTracking = () => {
    setMode("auto");
    toast.success("Auto Tracking enabled", {
      description: "HelioSense is now tracking the sun automatically",
    });
  };

  const handleManualMode = () => {
    setMode("manual");
    setManualOpen(true);
    toast.info("Manual Mode enabled", {
      description: "You can now control the panel position manually",
    });
  };

  const handleIdleMode = () => {
    setMode("idle");
    setManualOpen(false);
    toast.message("Idle Mode enabled", {
      description: "Panel will hold its current position and await commands",
    });
  };

  // Reset removed per request

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
          onClick={handleIdleMode}
          variant={mode === "idle" ? "default" : "outline"}
          className="flex items-center gap-2"
        >
          <Pause className="w-4 h-4" />
          Idle Mode
        </Button>

      </div>

      {/* Manual Mode Joystick Popup */}
      <Dialog open={manualOpen} onOpenChange={setManualOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Manual Control</DialogTitle>
            <DialogDescription>
              Use the joystick to adjust panel position. Click Idle Mode to pause movements.
            </DialogDescription>
          </DialogHeader>
          <div className="mx-auto w-full max-w-xs">
            <div className="grid grid-cols-3 gap-3 items-center justify-items-center">
              <div />
              <Button variant="outline" size="icon" aria-label="Move up" onClick={() => toast("Move Up")}> 
                <ArrowUp className="h-5 w-5" />
              </Button>
              <div />

              <Button variant="outline" size="icon" aria-label="Move left" onClick={() => toast("Move Left")}> 
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div className="w-10 h-10 rounded-full border border-border" aria-hidden />
              <Button variant="outline" size="icon" aria-label="Move right" onClick={() => toast("Move Right")}> 
                <ArrowRight className="h-5 w-5" />
              </Button>

              <div />
              <Button variant="outline" size="icon" aria-label="Move down" onClick={() => toast("Move Down")}> 
                <ArrowDown className="h-5 w-5" />
              </Button>
              <div />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  );
};
