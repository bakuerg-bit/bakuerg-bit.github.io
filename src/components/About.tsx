import AnimatedSection from "./AnimatedSection";

const features = [
  "Modern technology stack",
  "Agile methodology",
  "Dedicated support",
  "Transparent process",
  "Scalable solutions",
  "Data-driven decisions",
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* Content Column */}
          <div className="flex flex-col justify-center">
            <AnimatedSection>
              {/* Using your exact Inter font and tracking from base CSS */}
              <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4 font-medium">
                About
              </p>
              <h2 className="text-4xl font-semibold tracking-tight text-foreground leading-tight">
                About Synctech
                <br />
                Fifteen years of
                <br />
                digital excellence
              </h2>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1}>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10 mt-6 font-normal">
                We combine technical expertise with creative thinking to deliver 
                solutions that transform businesses. Our approach is simple: 
                understand deeply, execute precisely, and iterate continuously.
              </p>
            </AnimatedSection>

            {/* Features Grid - Restored Original Look */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <AnimatedSection key={feature} delay={0.15 + index * 0.05}>
                  <div className="glass-card p-4 rounded-none border border-border/50">
                    <span className="text-sm text-foreground font-medium">{feature}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Stats Card - Restored Original Direction and Style */}
          <AnimatedSection delay={0.2} direction="left" className="flex items-center">
            <div className="glass-card p-10 w-full rounded-none border border-border/50 bg-white/95 shadow-sm">
              <div className="space-y-10">
                {[
                  { value: "98%", label: "Client satisfaction rate" },
                  { value: "500+", label: "Projects delivered" },
                  { value: "15", label: "Years in business" },
                ].map((stat, index) => (
                  <div key={stat.label} className={index !== 0 ? "border-t border-border/50 pt-10" : ""}>
                    <div className="text-5xl md:text-6xl font-semibold text-foreground tracking-tighter mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium uppercase tracking-widest">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
          
        </div>
      </div>
    </section>
  );
};

export default About;