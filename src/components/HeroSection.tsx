import { Button } from "@/components/ui/button";
import { Download, Linkedin, ArrowRight } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Large organic blob shapes inspired by reference */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-[60%_40%_30%_70%/40%_60%_30%_70%] blur-2xl animate-gentle-float" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/25 rounded-[40%_60%_70%_30%/60%_30%_70%_40%] blur-2xl animate-gentle-float" style={{ animationDelay: '3s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Left side - Bold typography and content */}
            <div className="space-y-10 animate-soft-fade-in order-2 lg:order-1">
              {/* Main heading - Bold and creative */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display text-foreground leading-[1.1] tracking-tight">
                  I AM A CREATIVE
                </h1>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display text-foreground leading-[1.1] tracking-tight">
                  PRODUCT MANAGER
                </h1>
                
                <div className="pt-4 max-w-lg">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Hi there! I'm Divya Sharma. As a product manager, I understand the importance of 
                    creating user-friendly solutions that drive real impact for businesses and their users.
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a href="#contact">
                  <Button size="lg" className="group text-base font-semibold shadow-soft hover:shadow-elegant transition-all">
                    Hire Me
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
                
                <a href="/Divya_Sharma_Product_Resume.pdf" download="Divya_Sharma_Product_Resume.pdf">
                  <Button variant="outline" size="lg" className="group text-base font-semibold border-2 border-primary/30 hover:border-primary hover:bg-primary/5 transition-all">
                    <Download className="h-5 w-5" />
                    Portfolio
                  </Button>
                </a>
              </div>
            </div>

            {/* Right side - Profile with organic shape background */}
            <div className="relative animate-soft-fade-in order-1 lg:order-2" style={{ animationDelay: '0.2s' }}>
              <div className="relative max-w-lg mx-auto">
                {/* Large organic blob behind image - inspired by reference */}
                <div className="absolute inset-0 -top-20 -right-20 -bottom-20 -left-20">
                  <div className="w-full h-full bg-primary/30 rounded-[60%_40%_30%_70%/40%_60%_30%_70%] animate-gentle-float" />
                </div>
                
                {/* Profile image with subtle border */}
                <div className="relative z-10 rounded-[40px] overflow-hidden border-4 border-card shadow-elegant hover:shadow-lift transition-all duration-500">
                  <img 
                    src={profilePhoto} 
                    alt="Divya Sharma - Product Manager" 
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Social icons - simple and clean */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20">
                  <div className="flex items-center gap-4 bg-card px-8 py-4 rounded-full shadow-elegant border-2 border-primary/20">
                    <a 
                      href="https://www.linkedin.com/in/divya234/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-primary/10 rounded-full transition-colors"
                    >
                      <Linkedin className="h-5 w-5 text-foreground hover:text-primary transition-colors" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs text-muted-foreground font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-primary/40 rounded-full p-1">
            <div className="w-1 h-3 bg-primary rounded-full mx-auto animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
