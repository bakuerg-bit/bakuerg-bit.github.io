import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const TechStack = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1, triggerOnce: false });

  const technologies = [
    "React", "Next.js", "TypeScript", "Python", "Node.js", 
    "PostgreSQL", "AWS", "Docker", "Tailwind CSS", "Framer Motion",
    "React Native", "GraphQL", "Redis", "Vercel"
  ];

  // We double the array to create the "infinite" loop effect
  const duplicatedTech = [...technologies, ...technologies];

  return (
    <section id="stack" className="py-24 bg-background overflow-hidden border-y border-border/50">
      <div className="container mx-auto px-6 mb-12">
        <div ref={ref} className={`opacity-0 ${isVisible ? "animate-slide-up" : ""}`}>
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">Capabilities</span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter mt-4">Our Tech Stack</h2>
        </div>
      </div>

      {/* The Infinite Slider Container */}
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee flex whitespace-nowrap gap-12 py-4">
          {duplicatedTech.map((tech, i) => (
            <span 
              key={i} 
              className="text-4xl md:text-6xl font-bold text-foreground/5 hover:text-primary/20 transition-colors duration-500 cursor-default uppercase tracking-tighter"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Gradient Overlays for "Fade" effect at edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      </div>
    </section>
  );
};

export default TechStack;