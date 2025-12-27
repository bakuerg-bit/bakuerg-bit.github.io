import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Auto-close expanded menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const menus = {
    services: [
      { title: "Web Solutions", desc: "High-performance React and Next.js applications.", href: "#web-dev" },
      { title: "Automation", desc: "Python-driven workflows to scale your business.", href: "#automation" },
      { title: "Cloud Systems", desc: "Secure server architecture and management.", href: "#cloud" },
      { title: "UI Architecture", desc: "Sharp, functional design systems for the web.", href: "#design" },
    ],
    solutions: [
      { title: "E-Commerce", desc: "Custom storefronts with global payment logic.", href: "#ecommerce" },
      { title: "Custom SaaS", desc: "End-to-end software as a service builds.", href: "#saas" },
      { title: "Data Engines", desc: "Advanced data processing and visualization.", href: "#data" },
      { title: "Mobile Core", desc: "React Native cross-platform infrastructure.", href: "#mobile" },
    ], 
    developers: [
      { title: "API Portal", desc: "Request technical integration credentials.", href: "mailto:info@synctech.al?subject=API Access Request" },
      { title: "OSS Tools", desc: "View our public repositories and contributions.", href: "https://github.com/bakuerg-bit" },
      { title: "System Status", desc: "Live monitoring of SyncTech infrastructure.", href: "#status" },
      { title: "Tech Stack", desc: "The frameworks powering our digital future.", href: "#stack"},
    ],
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-0 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 relative">
          
          {/* Logo */}
          <a href="#" className="text-lg font-bold tracking-tighter text-foreground shrink-0 uppercase">
            SyncTech<span className="text-primary">ltd</span>
          </a>

          {/* Desktop Navigation - CENTERED */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 lg:gap-8">
            {Object.entries(menus).map(([key, options]) => (
              <div 
                key={key}
                className="relative py-4"
                onMouseEnter={() => setActiveMenu(key)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-all duration-300 text-[11px] font-semibold uppercase tracking-widest">
                  {key} <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeMenu === key ? 'rotate-180' : ''}`} />
                </button>

                {/* Desktop Dropdown Panel */}
                <div className={`absolute top-full -left-32 w-[520px] pt-4 transition-all duration-300 ${activeMenu === key ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                  <div className="glass-card p-8 rounded-none border border-border/40 bg-background/95 dark:bg-black/80 shadow-2xl backdrop-blur-2xl">
                    <div className="grid grid-cols-2 gap-x-10 gap-y-8">
                      {options.map((option) => (
                        <a 
                          key={option.title} 
                          href={option.href} 
                          className="group/item block transition-all hover:translate-x-1"
                          onMouseEnter={() => setHoveredItem(option.title)}
                          onMouseLeave={() => setHoveredItem(null)}
                          onClick={() => setActiveMenu(null)}
                        >
                          <div 
                            className="text-xs font-bold uppercase tracking-wider mb-1 transition-colors"
                            style={{ color: hoveredItem === option.title ? 'hsl(var(--primary))' : 'inherit' }}
                          >
                            {option.title}
                          </div>
                          <div className="text-[12px] text-muted-foreground leading-relaxed font-normal">
                            {option.desc}
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <a href="#about" className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#contact" className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>

          {/* RIGHT SIDE: Toggle + Button */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <ModeToggle />
            <a href="#contact">
              <Button variant="hero" size="sm" className="rounded-none text-[11px] uppercase tracking-[0.2em]">
                Get Started
              </Button>
            </a>
          </div>

          {/* Mobile Side Button + Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <ModeToggle />
            <button className="text-foreground p-2" onClick={() => setIsOpen(!isOpen)}>
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`w-full h-px bg-foreground transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <span className={`w-full h-px bg-foreground transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`w-full h-px bg-foreground transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        {isOpen && (
          <div className="fixed inset-0 top-16 z-40 md:hidden animate-fade-in bg-background dark:bg-black/95 backdrop-blur-2xl px-6 py-10 border-t border-border/50 overflow-y-auto h-[calc(100vh-64px)]">
            <div className="flex flex-col gap-8">
              {Object.entries(menus).map(([key, options]) => (
                <div key={key} className="space-y-4">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">{key}</h4>
                  <div className="grid gap-4">
                    {options.map((option) => (
                      <a 
                        key={option.title} 
                        href={option.href} 
                        className="block group"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="text-lg font-semibold text-foreground">{option.title}</div>
                        <div className="text-sm text-muted-foreground">{option.desc}</div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}

              {/* Main Section Links */}
              <div className="space-y-4 pt-4 border-t border-border/30">
                <a href="#about" className="block text-2xl font-bold tracking-tighter text-foreground" onClick={() => setIsOpen(false)}>About</a>
                <a href="#contact" className="block text-2xl font-bold tracking-tighter text-foreground" onClick={() => setIsOpen(false)}>Contact</a>
              </div>

              <a href="#contact" onClick={() => setIsOpen(false)} className="mt-4 pb-20">
                <Button variant="hero" className="w-full rounded-none h-14 text-sm uppercase tracking-widest">
                  Get Started
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;