import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider"; // Ensure this path is correct

const Maintenance = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    // This creates the "Cycle"
    const interval = setInterval(() => {
      setTheme(theme === "dark" ? "light" : "dark");
    }, 8000); // 8000ms = 8 seconds per cycle for a slow, premium feel

    return () => clearInterval(interval); // Clean up when the user leaves the page
  }, [theme, setTheme]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-6 relative overflow-hidden transition-colors duration-[2000ms]">
      
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      
      <div className="glass-card p-12 text-center max-w-lg animate-fade-in relative z-10 border-primary/20">
        <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary mb-6">
          System Status: Auto-Synchronizing
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 uppercase">
          SyncTech<span className="text-primary">ltd</span>
        </h1>
        
        <div className="h-px w-12 bg-primary mx-auto mb-8" />
        
        <p className="text-muted-foreground mb-10 text-sm tracking-wide leading-relaxed">
          Our infrastructure is currently cycling through final calibrations. 
          Experience the full technical architecture shortly.
        </p>
        
        {/* Updated professional contact email */}
        <a href="mailto:info@synctech.al?subject=Inquiry: SyncTech Infrastructure Calibration">
          <Button variant="hero" className="rounded-none px-10 h-12 uppercase tracking-[0.2em] text-[10px]">
            Contact Engineering
          </Button>
        </a>
      </div>

      {/* Subtle indicator that the site is alive */}
      <div className="absolute bottom-10 flex items-center gap-2">
        <span className="w-2 h-2 bg-primary rounded-full animate-ping" />
        <span className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground">Live Calibration Active</span>
      </div>
    </div>
  );
};

export default Maintenance;