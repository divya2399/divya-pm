import { Button } from "@/components/ui/button";
import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-surface border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Alex Johnson
            </h3>
            <p className="text-muted-foreground">
              Senior Product Manager & Tech Strategist
            </p>
          </div>

          {/* Center Section */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>using React & Tailwind CSS</span>
          </div>

          {/* Right Section */}
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300"
          >
            <ArrowUp className="h-4 w-4 mr-2" />
            Back to Top
          </Button>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Alex Johnson. All rights reserved. 
            <span className="block mt-1">
              This portfolio template is customizable for your own professional use.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;