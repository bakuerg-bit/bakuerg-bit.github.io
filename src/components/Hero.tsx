import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Hero = () => {
  // Main trigger for the repeating scroll animation
  const { ref, isVisible } = useScrollAnimation({ 
    threshold: 0.1, 
    triggerOnce: false 
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-neutral-100 to-neutral-200/50 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-neutral-50 to-neutral-100/50 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 pb-32">
        {/* HOVER WRAPPER: Added transition-transform and hover:scale */}
        <div 
          ref={ref} 
          className="max-w-4xl mx-auto text-center transition-transform duration-700 ease-out hover:scale-[1.03] group"
        >
          
          {/* 1. Badge - Smooth Reveal */}
          <div className={`inline-block glass px-5 py-2.5 mb-10 transition-all duration-1000 ease-out transform
            ${isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-12 blur-md"}`}
          >
            <span className="text-sm text-muted-foreground font-normal">Digital Services Studio</span>
          </div>

          {/* 2. Main Headline - Deep Reveal & Hover Lift */}
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] mb-8 tracking-tight text-foreground transition-all duration-[1200ms] ease-out transform delay-100
            ${isVisible ? "opacity-100 translate-y-0 blur-0 scale-100" : "opacity-0 translate-y-20 blur-xl scale-95"}`}
          >
            We craft digital
            <br />
            experiences that
            <br />
            <span className="inline-block transition-transform duration-500 group-hover:translate-x-2">inspire</span>
          </h1>

    {/* 3. Subheadline - Smooth Fade */}
    <p className={`text-lg md:text-xl text-muted-foreground max-w-lg mx-auto mb-12 leading-relaxed font-normal transition-all duration-[1200ms] ease-out transform delay-300
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
    >
      Strategy, design, and technology seamlessly integrated to transform your vision into reality.
    </p>

    {/* 4. CTA Buttons - Sequential Bounce */}
<div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 ease-out transform delay-500
  ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-90"}`}
>
  {/* Primary Button -> Jumps to Contact */}
  <a href="#contact">
    <Button variant="hero" size="lg" className="w-full sm:w-auto px-8">
      Start a Project
    </Button>
  </a>

  {/* Secondary Button -> Jumps to Services or Portfolio */}
  <a href="#services" className="w-full sm:w-auto">
    <Button variant="outline" size="lg" className="px-8 border-border/60 hover:bg-secondary/50">
      Our Work
    </Button>
  </a>
</div>
        </div>
      </div>

      {/* Bottom stats */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-border/50 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className={`grid grid-cols-3 divide-x divide-border/50 py-8 transition-opacity duration-1000 delay-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            {[
              { value: "500+", label: "Projects" },
              { value: "98%", label: "Satisfaction" },
              { value: "15yr", label: "Experience" },
            ].map((stat) => (
              <div key={stat.label} className="text-center px-4 group/stat cursor-default">
                <div className="text-2xl md:text-3xl font-semibold text-foreground mb-1 transition-all duration-500 group-hover/stat:-translate-y-2 group-hover/stat:text-primary">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest font-normal">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;