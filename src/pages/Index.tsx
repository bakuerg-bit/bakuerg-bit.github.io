import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import TechStack from "@/components/TechStack";
import AnimatedSection from "@/components/AnimatedSection";
import FeatureSlider from "@/components/FeatureSlider";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Synctech Ltd | Digital Services & Solutions</title>
        <meta 
          name="description" 
          content="Transform your business with Synctech Ltd's innovative digital solutions. Web development, mobile apps, UI/UX design, and cloud services." 
        />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          {/* Main Landing Flow */}
          <Hero />
          
          {/* The interactive sliding section we added */}
          <FeatureSlider /> 
          
          <Services />
          <About />
          <Testimonials />
          <TechStack />
          <FAQ />
          <Contact />

          {/* PRIVACY SECTION - Blended & Balanced */}
          <section id="privacy" className="py-24 bg-background scroll-mt-24 border-t border-border/50">
            <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <AnimatedSection direction="up">
                  <span className="text-[11px] font-semibold text-primary uppercase tracking-[0.3em] mb-4 block">Security</span>
                  <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-8 text-foreground">Privacy Policy</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed font-normal">
                    At Synctech, we prioritize your data security. Information collected through 
                    our infrastructure is used exclusively for project coordination. 
                    We do not distribute your data to third-party entities.
                  </p>
                </AnimatedSection>
                
                <AnimatedSection direction="left" delay={0.2}>
                  <div className="glass-card p-8 border border-border/50 rounded-none hover:scale-[1.02] transition-all duration-500">
                    <ul className="space-y-4">
                      {["End-to-End Encryption", "No Third-Party Sharing", "GDPR Standards", "Secure Architecture"].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[11px] uppercase tracking-widest font-bold text-foreground/70">
                          <div className="w-1.5 h-1.5 bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>

          {/* TERMS SECTION - Blended & Balanced */}
          <section id="terms" className="py-24 bg-secondary/10 scroll-mt-24 border-y border-border/50">
            <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <AnimatedSection direction="right" delay={0.2}>
                    <div className="glass-card p-12 border border-border/50 rounded-none bg-white/40 text-center">
                      <p className="text-sm font-medium italic text-foreground/80">
                        "Engineering excellence and professional integrity in every line of code."
                      </p>
                    </div>
                  </AnimatedSection>
                </div>

                <div className="order-1 lg:order-2">
                  <AnimatedSection direction="up">
                    <span className="text-[11px] font-semibold text-primary uppercase tracking-[0.3em] mb-4 block">Agreement</span>
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-8 text-foreground">Terms of Service</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed font-normal">
                      By engaging with Synctech Ltd, you agree to our engineering standards. 
                      All custom architectures developed remain the intellectual property 
                      of Synctech until final project delivery and hand-off.
                    </p>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;