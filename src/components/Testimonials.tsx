import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const reviews = [
    { 
      role: "CEO, TechVibe Solutions", 
      text: "Synctechltd transformed our legacy system into a high-speed cloud platform. The performance jump was immediate and measurable." 
    },
    { 
      role: "Director of Product Engineering", 
      text: "The attention to detail in the UI architecture is unmatched. Clean, fast, and exactly what our global users needed." 
    },
    { 
      role: "Founder, ArchiBuild Infrastructure", 
      text: "Professional, efficient, and great communication. They are our go-to partner for all complex automation and scaling tasks." 
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-secondary/20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <AnimatedSection className="text-center mb-20">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">Success Stories</span>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mt-4 text-foreground">What our partners say</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <AnimatedSection key={i} delay={i * 0.1} direction="up">
              <div 
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`glass-card p-10 rounded-none border border-border/50 flex flex-col justify-between h-full transition-all duration-500 ease-out cursor-default ${
                  hoveredIndex === i ? 'bg-white/95 -translate-y-3 scale-[1.03] shadow-hover' : 'bg-white/40'
                }`}
              >
                <div className="mb-8">
                  <Quote className={`w-8 h-8 mb-6 transition-colors duration-500 ${
                    hoveredIndex === i ? 'text-primary' : 'text-primary/20'
                  }`} />
                  <p className="text-lg text-foreground/90 leading-relaxed italic font-normal">
                    "{rev.text}"
                  </p>
                </div>

                <div className="pt-6 border-t border-border/10">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-bold">
                    {rev.role}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;