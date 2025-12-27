import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const services = [
  // --- SERVICES TAB ---
  { id: "web-dev", number: "01", title: "Web Solutions", description: "High-performance React and Next.js applications built for scale." },
  { id: "automation", number: "02", title: "Automation", description: "Python-driven workflows to automate your business operations." },
  { id: "cloud", number: "03", title: "Cloud Systems", description: "Secure server architecture and automated cloud management." },
  { id: "design", number: "04", title: "UI Architecture", description: "Modern design systems that balance aesthetics with usability." },

  // --- SOLUTIONS TAB ---
  { id: "ecommerce", number: "05", title: "E-Commerce", description: "Scalable storefronts with custom payment logic and global reach." },
  { id: "saas", number: "06", title: "Custom SaaS", description: "Full-cycle software-as-a-service development and deployment." },
  { id: "data", number: "07", title: "Data Engines", description: "Advanced processing systems to visualize and act on your data." },
  { id: "mobile", number: "08", title: "Mobile Core", description: "Cross-platform mobile infrastructure built with React Native." },

  // --- DEVELOPERS TAB ---
  { id: "status", number: "09", title: "System Status", description: "Real-time monitoring and reliability metrics for all systems." },
  { id: "stack", number: "10", title: "Tech Stack", description: "The modern frameworks and languages powering our solutions." },
];


const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-32 relative bg-background">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <AnimatedSection className="max-w-2xl mb-20">
          <p className="text-[11px] font-semibold text-primary uppercase tracking-[0.2em] mb-4">
            Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
            What we do
          </h2>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedSection key={service.id} delay={index * 0.1}>
              <div
                id={service.id} // This is the anchor target
                className="interactive-card p-8 h-full scroll-mt-24 group transition-all duration-500 ease-out"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ 
                  opacity: hoveredIndex !== null && hoveredIndex !== index ? 0.6 : 1,
                  transform: hoveredIndex === index ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                }}
              >
                <div className="flex justify-between items-start mb-8">
                  <span className="text-[10px] font-bold text-muted-foreground/40 tracking-[0.3em] uppercase">
                    {service.number}
                  </span>
                  {/* Subtle corner accent that appears on hover */}
                  <div className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;