import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface LegalProps {
  title: string;
  content: React.ReactNode;
}

const Legal = ({ title, content }: LegalProps) => {
  return (
    <div className="min-h-screen bg-background py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-8 hover:bg-secondary/50 -ml-4">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Button>
        </Link>
        
        <div className="glass-card p-10 md:p-16 rounded-none border border-border/50 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-10 text-foreground">
            {title}
          </h1>
          <div className="prose prose-slate max-w-none text-muted-foreground leading-relaxed space-y-6">
            {content}
          </div>
        </div>
        
        <p className="mt-12 text-center text-[10px] uppercase tracking-widest text-muted-foreground">
          © {new Date().getFullYear()} Synctech Ltd · Tirana, Albania
        </p>
      </div>
    </div>
  );
};

export default Legal;