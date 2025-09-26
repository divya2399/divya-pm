import { Button } from "@/components/ui/button";
import { Download, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
const HeroSection = () => {
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-surface-elevated" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float" style={{
      animationDelay: '2s'
    }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in">
            <div className="relative inline-block">
              <img src={profilePhoto} alt="Profile" className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mx-auto shadow-elegant border-4 border-primary/20" />
              <div className="absolute inset-0 rounded-full opacity-20" />
            </div>
          </div>

          {/* Name and Title */}
          <div className="mb-8 animate-slide-up" style={{
          animationDelay: '0.2s'
        }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">Divya Sharma</h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">Impact-Driven Product Manager</p>
            <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
              Transforming complex technical challenges into intuitive user experiences 
              that drive business growth and user delight.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-scale-in" style={{
          animationDelay: '0.4s'
        }}>
            <a href="/Divya_Sharma_Product_Resume.pdf" download="Divya_Sharma_Product_Resume.pdf">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group">
                <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Download Resume
              </Button>
            </a>
            
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/in/divya234/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </Button>
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce mt-12">
            <div className="w-1 h-8 bg-primary/50 mx-auto rounded-full" />
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;