import { Button } from "@/components/ui/button";
import { Download, Linkedin, ArrowRight } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Tech-inspired gradient background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 grid-pattern opacity-40" />
      
      {/* Geometric tech elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-primary/15 rounded-full blur-3xl animate-float glow-primary" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-coral/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-float glow-accent" style={{ animationDelay: '4s' }} />
      
      {/* Tech accent lines */}
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Split-screen layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left side - Content */}
            <div className="space-y-8 animate-slide-in-left">
              {/* Tech status badge */}
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-surface/90 backdrop-blur-md rounded-full border border-primary/40 hover:border-primary/60 transition-all duration-300 glow-primary">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-coral opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-coral"></span>
                </div>
                <span className="text-sm font-medium text-foreground">Available for opportunities</span>
              </div>

              {/* Main heading with tech styling */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display text-foreground leading-[1.1] tracking-tight">
                  Divya
                  <span className="block text-transparent bg-clip-text bg-gradient-primary mt-2 animate-pulse-glow">
                    Sharma
                  </span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-accent font-semibold font-display tracking-wide">
                  Impact-Driven Product Manager
                </h2>
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Transforming complex technical challenges into intuitive user experiences 
                that drive business growth and user delight.
              </p>

              {/* Tech-styled CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a href="/Divya_Sharma_Product_Resume.pdf" download="Divya_Sharma_Product_Resume.pdf">
                  <Button size="lg" variant="coral" className="group text-base font-semibold hover-tech">
                    <Download className="h-5 w-5 group-hover:animate-bounce" />
                    Download Resume
                  </Button>
                </a>
                
                <a href="https://www.linkedin.com/in/divya234/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="group text-base font-semibold border-2 hover-tech">
                    <Linkedin className="h-5 w-5" />
                    Let's Connect
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Right side - Tech-inspired visual with profile */}
            <div className="relative animate-slide-in-right lg:pl-12">
              {/* Tech decorative frame */}
              <div className="relative">
                {/* Tech geometric shapes */}
                <div className="absolute -top-8 -right-8 w-72 h-72 bg-gradient-primary opacity-20 rounded-3xl rotate-12 blur-2xl glow-primary" />
                <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-accent opacity-20 rounded-3xl -rotate-12 blur-2xl glow-accent" />
                
                {/* Grid overlay for tech feel */}
                <div className="absolute inset-0 grid-pattern-dense opacity-20" />
                
                {/* Profile image container with tech accents */}
                <div className="relative z-10 aspect-square max-w-md mx-auto">
                  <div className="absolute inset-0 bg-gradient-coral rounded-3xl rotate-6 opacity-30 animate-float" />
                  <div className="absolute inset-0 bg-gradient-primary rounded-3xl -rotate-3 opacity-20 animate-float glow-primary" style={{ animationDelay: '1s' }} />
                  
                  {/* Tech corner accents */}
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary rounded-tl-3xl" />
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-accent rounded-br-3xl" />
                  
                  <div className="relative bg-surface/60 backdrop-blur-md rounded-3xl p-2 border-2 border-primary/40 hover:border-primary/70 transition-all duration-500 hover:scale-105 hover-lift">
                    <img 
                      src={profilePhoto} 
                      alt="Divya Sharma - Product Manager" 
                      className="w-full h-full object-cover rounded-2xl shadow-elegant"
                    />
                  </div>
                </div>

                {/* Tech-styled floating stat badges */}
                <div className="absolute -left-4 top-1/4 bg-surface/95 backdrop-blur-md rounded-2xl p-5 border-2 border-accent/40 shadow-accent animate-float hover-tech glow-accent">
                  <div className="text-3xl font-bold font-display text-accent">4+</div>
                  <div className="text-xs text-muted-foreground font-medium whitespace-nowrap">Years Experience</div>
                </div>

                <div className="absolute -right-4 bottom-1/4 bg-surface/95 backdrop-blur-md rounded-2xl p-5 border-2 border-coral/40 shadow-coral animate-float hover-tech" style={{ animationDelay: '1.5s' }}>
                  <div className="text-3xl font-bold font-display text-coral">20+</div>
                  <div className="text-xs text-muted-foreground font-medium whitespace-nowrap">Features Launched</div>
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