import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t-2 border-primary/20 relative overflow-hidden">
      {/* Tech accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Decorative glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold font-display text-foreground mb-2">
              Divya Sharma
            </h3>
            <p className="text-muted-foreground">
              Product Manager & Tech Enthusiast
            </p>
          </div>

          {/* Right Section - Back to top */}
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="border-2 border-primary/40 hover:bg-primary/10 hover:border-primary transition-all duration-300 hover-tech group"
          >
            <ArrowUp className="h-4 w-4 mr-2 group-hover:-translate-y-1 transition-transform" />
            Back to Top
          </Button>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/30 mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Divya Sharma. All rights reserved. 
            <span className="block mt-2 flex items-center justify-center gap-2">
              <span>Crafted with</span>
              <span className="text-coral animate-pulse">♥</span>
              <span>& modern tech</span>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;