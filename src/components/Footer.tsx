import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/30 py-10">
      <div className="container mx-auto px-6">
        {/* We wrap the content inside the section to trigger the scroll animation */}
        <AnimatedSection direction="up" delay={0.1}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Brand & Copyright - Compact */}
            <div className="flex flex-col items-center md:items-start">
              <span className="text-xl font-bold tracking-tighter text-foreground hover:scale-105 transition-transform duration-300 cursor-default">
                Synctech<span className="text-primary text-[10px] uppercase ml-1">ltd</span>
              </span>
              <p className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground font-medium mt-1">
                © {currentYear} · Tirana
              </p>
            </div>

            {/* Main Navigation - Text Zoom on Hover */}
            <nav className="flex items-center gap-8">
              {["services", "about", "contact"].map((item) => (
                <a 
                  key={item}
                  href={`#${item}`} 
                  className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300 inline-block"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Legal Links - Text Zoom on Hover */}
            <div className="flex gap-6">
              <Link 
                to="/privacy" 
                className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300 inline-block"
              >
                Privacy
              </Link>
              
              <Link 
                to="/terms" 
                className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300 inline-block"
              >
                Terms
              </Link>
            </div>

          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
};

export default Footer;