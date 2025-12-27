import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Plus } from "lucide-react";

const FAQ = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const faqs = [
    { q: "How long does a typical project take?", a: "Most custom web solutions are delivered within 4-8 weeks, depending on complexity and API integrations." },
    { q: "Do you offer post-launch support?", a: "Yes, we provide 24/7 technical monitoring and monthly maintenance packages to keep your system optimized." },
    { q: "Can you integrate with existing legacy systems?", a: "Our team specializes in bridging modern React/Next.js frontends with older SQL or local server architectures." },
    { q: "Is mobile responsiveness included?", a: "Every Synctech project is built mobile-first, ensuring 100% performance across all devices." }
  ];

  return (
    <section id="faq" className="py-24 bg-background relative overflow-hidden scroll-mt-24">
      <div className="container mx-auto px-6">
        
        {/* Header - Animates like the About Header */}
        <AnimatedSection className="max-w-4xl mb-16">
          <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4 font-medium">Support</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-foreground">Frequently Asked</h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, i) => (
            /* Each card is now wrapped in AnimatedSection to match the About tab's behavior */
            <AnimatedSection key={i} delay={i * 0.1} direction="up">
              <div 
                onMouseEnter={() => setHoverIndex(i)}
                onMouseLeave={() => setHoverIndex(null)}
                className={`glass-card p-8 rounded-none border border-border/50 transition-all duration-500 ease-in-out cursor-default relative overflow-hidden h-full ${
                  hoverIndex === i ? 'bg-white/95 -translate-y-2 shadow-hover border-primary/20' : 'bg-transparent'
                }`}
              >
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-lg font-semibold text-foreground transition-colors duration-300">
                    {faq.q}
                  </h3>
                  <div className="shrink-0">
                    <Plus className={`w-5 h-5 text-primary transition-transform duration-500 ${hoverIndex === i ? 'rotate-45' : 'rotate-0'}`} />
                  </div>
                </div>
                
                {/* Auto-expand logic on hover */}
                <div 
                  className={`transition-all duration-500 ease-in-out ${
                    hoverIndex === i ? 'max-h-40 opacity-100 mt-6' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-muted-foreground leading-relaxed text-sm font-normal border-l-2 border-primary/20 pl-4">
                    {faq.a}
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

export default FAQ;