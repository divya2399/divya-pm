import { Button } from "@/components/ui/button";
import { Download, Linkedin, ArrowRight } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dynamic background with gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Floating geometric elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-primary/15 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-coral/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Split-screen layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left side - Content */}
            <div className="space-y-8 animate-slide-in-left">
              {/* Profile badge */}
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-surface/80 backdrop-blur-sm rounded-full border border-primary/30">
                <div className="w-2 h-2 bg-coral rounded-full animate-pulse" />
                <span className="text-sm text-muted-foreground">Available for opportunities</span>
              </div>

              {/* Main heading */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight">
                  Divya
                  <span className="block text-transparent bg-clip-text bg-gradient-primary mt-2">
                    Sharma
                  </span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-accent font-semibold">
                  Impact-Driven Product Manager
                </h2>
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Transforming complex technical challenges into intuitive user experiences 
                that drive business growth and user delight.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="/Divya_Sharma_Product_Resume.pdf" download="Divya_Sharma_Product_Resume.pdf">
                  <Button size="lg" variant="coral" className="group text-base font-semibold">
                    <Download className="h-5 w-5 group-hover:animate-bounce" />
                    Download Resume
                  </Button>
                </a>
                
                <a href="https://www.linkedin.com/in/divya234/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="group text-base font-semibold">
                    <Linkedin className="h-5 w-5" />
                    Let's Connect
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Right side - Visual element with profile */}
            <div className="relative animate-slide-in-right lg:pl-12">
              {/* Decorative frame */}
              <div className="relative">
                {/* Background geometric shapes */}
                <div className="absolute -top-8 -right-8 w-72 h-72 bg-gradient-primary opacity-20 rounded-3xl rotate-12 blur-2xl" />
                <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-accent opacity-20 rounded-3xl -rotate-12 blur-2xl" />
                
                {/* Profile image container */}
                <div className="relative z-10 aspect-square max-w-md mx-auto">
                  <div className="absolute inset-0 bg-gradient-coral rounded-3xl rotate-6 opacity-30 animate-float" />
                  <div className="absolute inset-0 bg-gradient-primary rounded-3xl -rotate-3 opacity-20 animate-float" style={{ animationDelay: '1s' }} />
                  
                  <div className="relative bg-surface/50 backdrop-blur-sm rounded-3xl p-2 border-2 border-primary/30 hover:border-coral/50 transition-all duration-500 hover:scale-105">
                    <img 
                      src={profilePhoto} 
                      alt="Divya Sharma - Product Manager" 
                      className="w-full h-full object-cover rounded-2xl shadow-elegant"
                    />
                  </div>
                </div>

                {/* Floating stat badges */}
                <div className="absolute -left-4 top-1/4 bg-surface/90 backdrop-blur-md rounded-2xl p-4 border border-accent/30 shadow-accent animate-float">
                  <div className="text-3xl font-bold text-accent">4+</div>
                  <div className="text-xs text-muted-foreground whitespace-nowrap">Years Experience</div>
                </div>

                <div className="absolute -right-4 bottom-1/4 bg-surface/90 backdrop-blur-md rounded-2xl p-4 border border-coral/30 shadow-coral animate-float" style={{ animationDelay: '1.5s' }}>
                  <div className="text-3xl font-bold text-coral">20+</div>
                  <div className="text-xs text-muted-foreground whitespace-nowrap">Features Launched</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full p-1">
            <div className="w-1 h-3 bg-coral rounded-full mx-auto animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;