import { Button } from "@/components/ui/button";
import { Download, Linkedin, ArrowRight } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-ivory via-background to-muted/30">
      {/* Organic decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-gentle-float" />
      <div className="absolute bottom-32 left-10 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-gentle-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Split-screen creative layout */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left side - Content with asymmetric design */}
            <div className="space-y-10 animate-soft-fade-in order-2 lg:order-1">
              {/* Elegant availability badge */}
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-card rounded-full border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover-soft shadow-soft">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </div>
                <span className="text-sm font-medium text-foreground">Available for opportunities</span>
              </div>

              {/* Main heading with creative typography */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold font-display text-foreground leading-[1.05] tracking-tight">
                    Divya
                  </h1>
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold font-display text-primary leading-[1.05] tracking-tight mt-1">
                    Sharma
                  </h1>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-1 w-16 bg-gradient-primary rounded-full" />
                  <h2 className="text-2xl md:text-3xl font-display font-medium text-foreground/80">
                    Impact-Driven Product Manager
                  </h2>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Transforming complex technical challenges into intuitive user experiences 
                that drive business growth and user delight.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="/Divya_Sharma_Product_Resume.pdf" download="Divya_Sharma_Product_Resume.pdf">
                  <Button size="lg" className="group text-base font-semibold shadow-soft hover:shadow-elegant transition-all">
                    <Download className="h-5 w-5 group-hover:animate-bounce" />
                    Download Resume
                  </Button>
                </a>
                
                <a href="https://www.linkedin.com/in/divya234/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="group text-base font-semibold border-2 border-primary/30 hover:border-primary hover:bg-primary/5 transition-all">
                    <Linkedin className="h-5 w-5" />
                    Let's Connect
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Right side - Creative asymmetric visual */}
            <div className="relative animate-soft-fade-in order-1 lg:order-2" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                {/* Decorative organic shapes */}
                <div className="absolute -top-12 -right-12 w-80 h-80 bg-gradient-primary opacity-15 rounded-[40%_60%_70%_30%/60%_30%_70%_40%] blur-2xl animate-gentle-float" />
                <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-gradient-accent opacity-20 rounded-[60%_40%_30%_70%/40%_60%_30%_70%] blur-2xl animate-gentle-float" style={{ animationDelay: '1.5s' }} />
                
                {/* Profile image with creative framing */}
                <div className="relative z-10 aspect-square max-w-lg mx-auto">
                  <div className="absolute -top-6 -left-6 w-full h-full border-2 border-primary/30 rounded-[30px]" />
                  <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-secondary/30 rounded-[30px]" />
                  
                  <div className="relative bg-card rounded-[30px] p-3 shadow-elegant hover:shadow-lift transition-all duration-500 hover-lift">
                    <img 
                      src={profilePhoto} 
                      alt="Divya Sharma - Product Manager" 
                      className="w-full h-full object-cover rounded-[24px]"
                    />
                  </div>
                </div>

                {/* Floating stat cards with asymmetric placement */}
                <div className="absolute -left-8 top-1/4 bg-card rounded-2xl p-6 border-2 border-primary/20 shadow-soft hover:shadow-elegant animate-gentle-float hover-lift">
                  <div className="text-4xl font-bold font-display text-primary mb-1">4+</div>
                  <div className="text-xs text-muted-foreground font-medium whitespace-nowrap">Years Experience</div>
                </div>

                <div className="absolute -right-8 bottom-1/3 bg-card rounded-2xl p-6 border-2 border-secondary/20 shadow-blush hover:shadow-elegant animate-gentle-float hover-lift" style={{ animationDelay: '1s' }}>
                  <div className="text-4xl font-bold font-display text-secondary mb-1">20+</div>
                  <div className="text-xs text-muted-foreground font-medium whitespace-nowrap">Features Launched</div>
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
