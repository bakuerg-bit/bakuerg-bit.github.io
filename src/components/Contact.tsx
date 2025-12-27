import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Inquiry sent successfully!");
    }, 2000);
  };

  const contactDetails = [
    { icon: <Mail className="w-5 h-5" />, label: "Email us", value: "tech@Synctechltd.space", href: "mailto:tech@Synctechltd.space" },
    { icon: <Phone className="w-5 h-5" />, label: "Call us", value: "+355 69 297 6930", href: "tel:+355692976930" },
    { icon: <MapPin className="w-5 h-5" />, label: "Office", value: "Tirana, Albania", href: "#" }
  ];

  return (
    <section id="contact" className="py-24 bg-background scroll-mt-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* LEFT SIDE: (KEPT AS IS) */}
          <div className="flex flex-col justify-center">
            <AnimatedSection>
              <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4 font-medium">Contact</p>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-foreground leading-tight mb-8">
                Let's work together <br /> on your next project
              </h2>
            </AnimatedSection>
            <div className="space-y-4 mt-4">
              {contactDetails.map((item, index) => (
                <AnimatedSection key={item.label} delay={0.2 + index * 0.1} direction="up">
                  <a href={item.href} className="flex items-center gap-6 group p-4 -ml-4 rounded-2xl transition-all duration-500 hover:bg-secondary/40">
                    <div className="w-14 h-14 rounded-full glass border border-border/50 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 relative">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold mb-1 opacity-70">{item.label}</p>
                      <p className="text-xl font-medium tracking-tight text-foreground group-hover:text-primary transition-colors">{item.value}</p>
                    </div>
                  </a>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: (NOW FULLY ANIMATED LIKE THE REST) */}
          <div className="relative">
            {/* Main Form Container Animation */}
            <AnimatedSection delay={0.3} direction="up">
              <div className="glass-card p-8 md:p-12 w-full rounded-none border border-border/50 bg-white/95 shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Staggered Inputs */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <AnimatedSection delay={0.4} direction="up">
                      <div className="space-y-2">
                        <label className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">Full Name</label>
                        <input required type="text" placeholder="Name" className="w-full bg-secondary/30 border border-border/50 px-5 py-4 text-sm outline-none focus:border-primary transition-colors font-sans" />
                      </div>
                    </AnimatedSection>
                    
                    <AnimatedSection delay={0.5} direction="up">
                      <div className="space-y-2">
                        <label className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">Email Address</label>
                        <input required type="email" placeholder="Email" className="w-full bg-secondary/30 border border-border/50 px-5 py-4 text-sm outline-none focus:border-primary transition-colors font-sans" />
                      </div>
                    </AnimatedSection>
                  </div>

                  <AnimatedSection delay={0.6} direction="up">
                    <div className="space-y-2">
                      <label className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">Message</label>
                      <textarea required rows={4} placeholder="Your project details..." className="w-full bg-secondary/30 border border-border/50 px-5 py-4 text-sm outline-none focus:border-primary transition-colors resize-none font-sans" />
                    </div>
                  </AnimatedSection>

                  <AnimatedSection delay={0.7} direction="up">
                    <Button disabled={loading} type="submit" variant="hero" className="w-full py-8 text-sm font-semibold uppercase tracking-widest group">
                      {loading ? <Loader2 className="animate-spin" /> : (
                        <span className="flex items-center gap-2">
                          Send Inquiry <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </span>
                      )}
                    </Button>
                  </AnimatedSection>
                  
                </form>
              </div>
            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;