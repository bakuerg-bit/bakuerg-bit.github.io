import { Cpu, Globe, Lock, Zap, Database, Search } from "lucide-react";

const features = [
  { icon: <Globe className="w-5 h-5" />, title: "Web Core", desc: "Next.js 15 Architecture" },
  { icon: <Zap className="w-5 h-5" />, title: "Automation", desc: "Python Scalability" },
  { icon: <Lock className="w-5 h-5" />, title: "Security", desc: "End-to-end Encryption" },
  { icon: <Cpu className="w-5 h-5" />, title: "Systems", desc: "Infrastructure Design" },
  { icon: <Database className="w-5 h-5" />, title: "Data", desc: "Real-time Processing" },
  { icon: <Search className="w-5 h-5" />, title: "SEO", desc: "Global Visibility" },
];

const FeatureSlider = () => {
  return (
    <div className="py-20 bg-background overflow-hidden relative">
      <div className="container mx-auto px-6 mb-12">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary mb-2">Capabilities</h2>
        <p className="text-2xl font-bold tracking-tighter uppercase italic">Engineered to scale.</p>
      </div>

      {/* Infinite Scroll Container */}
      <div className="flex gap-6 animate-marquee whitespace-nowrap">
        {[...features, ...features].map((item, index) => (
          <div 
            key={index}
            className="glass-card min-w-[280px] p-8 flex flex-col gap-4 group hover:border-primary/50 transition-all duration-500"
          >
            <div className="text-primary group-hover:scale-110 transition-transform duration-500">
              {item.icon}
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-1">{item.title}</h3>
              <p className="text-[11px] text-muted-foreground uppercase tracking-tight">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Gradient Fades to mask the edges */}
      <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-background to-transparent z-10" />
    </div>
  );
};

export default FeatureSlider;