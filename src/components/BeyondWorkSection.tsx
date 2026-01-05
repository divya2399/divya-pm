import { Badge } from "@/components/ui/badge";
import { 
  Coffee,
  Music, 
  Martini,
  Sun,
  Dumbbell,
  BookOpen,
  CookingPot,
  Music2
} from "lucide-react";

const BeyondWorkSection = () => {
  const hobbies = [
    { icon: Dumbbell, title: "Working Out", description: "Placeholder text for working out hobby" },
    { icon: BookOpen, title: "Reading", description: "Placeholder text for reading hobby" },
    { icon: CookingPot, title: "Cooking", description: "Placeholder text for cooking hobby" },
    { icon: Music2, title: "Dancing", description: "Placeholder text for dancing hobby" }
  ];

  const quickFacts = [
    { icon: Coffee, text: "There is no bad time for a good cup of coffee", color: "secondary" },
    { icon: Music, text: "Looking for good music whenever I find the chance", color: "primary" },
    { icon: Martini, text: "Visiting a good bar? Count me in for happy hour", color: "primary" },
    { icon: Sun, text: "Always up for a good time at a sea shore", color: "secondary" }
  ];

  return (
    <section id="beyond" className="py-12 bg-background relative overflow-hidden">
      {/* Softer decorative elements */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-gentle-float" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-gentle-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-soft-fade-in">
            <Badge variant="outline" className="mb-4 border-secondary/40 text-secondary-foreground px-4 py-1.5">
              Beyond Work
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-6">
              Life Outside{" "}
              <span className="text-secondary">the Office</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The experiences and passions that shape my perspective, drive creativity, 
              and contribute to my approach to problem-solving and leadership.
            </p>
          </div>

          {/* Hobbies & Interests */}
          <div className="mb-14 animate-soft-fade-in">
            <h3 className="text-2xl font-bold font-display text-foreground mb-8">
              Hobbies & Interests
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {hobbies.map((hobby, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center gap-3 group animate-expand-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:scale-110 transition-transform">
                    <hobby.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground">{hobby.title}</h4>
                  <p className="text-sm text-muted-foreground">{hobby.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick facts */}
          <div className="mb-14 animate-soft-fade-in">
            <h3 className="text-2xl font-bold font-display text-foreground mb-8">
              Quick Facts About Me
            </h3>
            
            <div className="flex flex-col md:flex-row gap-6">
              {quickFacts.map((fact, index) => (
                <div
                  key={index}
                  className="flex-1 flex items-start gap-3 group animate-expand-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`p-2.5 rounded-lg group-hover:scale-110 transition-transform ${
                    fact.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'
                  }`}>
                    <fact.icon className={`h-5 w-5 ${
                      fact.color === 'primary' ? 'text-primary' : 'text-secondary'
                    }`} />
                  </div>
                  <p className="text-sm text-foreground leading-relaxed flex-1">
                    {fact.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Philosophy */}
          <div className="relative animate-expand-in max-w-4xl mx-auto">
            <div className="py-8 px-6 md:px-12 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-1 w-10 bg-primary rounded-full" />
                <h3 className="text-lg font-bold font-display text-foreground">
                  Personal Philosophy
                </h3>
              </div>
              
              <p className="text-lg md:text-xl text-foreground leading-relaxed font-light italic">
                "For me, it's always been about finding clarity in the chaos—taking something messy or complex and shaping it into something people can actually connect with and use. 
                I lean on curiosity to uncover what really matters and empathy to make sure the outcome speaks to people, not just processes."
              </p>

              {/* Decorative accent */}
              <div className="flex gap-2 mt-6">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <div className="w-2 h-2 rounded-full bg-secondary" />
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeyondWorkSection;
