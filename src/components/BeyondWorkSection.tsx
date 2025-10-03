import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Dog, 
  CookingPot, 
  BookOpen, 
  Palette, 
  Music, 
  Martini,
  Coffee,
  Sun
} from "lucide-react";

const BeyondWorkSection = () => {
  const interests = [
    {
      icon: Dog,
      title: "Pet Parent",
      description: "Overcame my life long fear of dogs to become a dog mom to a beautiful 2 year old Indian Pariah, named Lilly.",
      color: "primary"
    },
    {
      icon: CookingPot,
      title: "Cooking & Baking",
      description: "Passionate about experimenting with different recipes; from banana bread to thai curry.",
      color: "secondary"
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "Avid reader of product strategy, technology trends, and behavioral psychology. Always exploring new frameworks and methodologies.",
      color: "primary"
    },
    {
      icon: Palette,
      title: "Chasing Aesthetics",
      description: "Always looking for aesthetics in life, home, products and people. I pick up a brush and a paper from time to time.",
      color: "secondary"
    }
  ];

  const funFacts = [
    { icon: Coffee, title: "Coffee Enthusiast", description: "There is no bad time for a good cup of coffee", color: "secondary" },
    { icon: Music, title: "Musicophile", description: "Looking for good music whenever I find the chance", color: "primary" },
    { icon: Martini, title: "Day Drinker", description: "Visiting a good bar? Count me in for happy hour", color: "primary" },
    { icon: Sun, title: "Beach Lover", description: "Always up for a good time at a sea shore", color: "secondary" }
  ];

  return (
    <section id="beyond" className="py-24 bg-background relative overflow-hidden">
      {/* Softer, playful decorative elements */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-secondary/25 rounded-full blur-3xl animate-gentle-float" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-gentle-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-secondary/15 rounded-full blur-3xl animate-gentle-float" style={{ animationDelay: '4s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header - More playful */}
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

          {/* Main Interests - Asymmetric, softer design */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {interests.map((interest, index) => (
              <Card 
                key={index}
                className={`bg-card hover:shadow-elegant transition-all duration-500 hover-lift animate-expand-in ${
                  index === 2 ? 'md:translate-y-6' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-4 rounded-2xl group-hover:scale-110 transition-all ${
                      interest.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'
                    }`}>
                      <interest.icon className={`h-7 w-7 ${
                        interest.color === 'primary' ? 'text-primary' : 'text-secondary'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold font-display text-foreground mb-3">
                        {interest.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {interest.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Playful accent line */}
                  <div className={`h-1 w-16 rounded-full ${
                    interest.color === 'secondary' ? 'bg-gradient-accent' : 'bg-gradient-primary'
                  }`} />
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Fun Facts - Playful layout */}
          <div className="mb-16 animate-soft-fade-in">
            <h3 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-10 text-center">
              Quick Facts About Me
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {funFacts.map((fact, index) => (
                <div
                  key={index}
                  className="group animate-expand-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <Card 
                    className={`bg-card hover:shadow-soft transition-all duration-500 hover-lift h-full ${
                      fact.color === 'primary' ? 'hover:bg-primary/5' : 'hover:bg-secondary/5'
                    }`}
                  >
                    <CardContent className="p-6 text-center flex flex-col items-center h-full">
                      <div className={`p-4 rounded-2xl mb-4 group-hover:scale-110 transition-all duration-300 ${
                        fact.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'
                      }`}>
                        <fact.icon className={`h-8 w-8 ${
                          fact.color === 'primary' ? 'text-primary' : 'text-secondary'
                        }`} />
                      </div>
                      <h4 className="font-bold font-display text-foreground mb-2 text-base">
                        {fact.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {fact.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Philosophy - Softer, more human */}
          <div className="relative animate-expand-in">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-3xl blur-xl" />
            
            <Card className="relative bg-card/90 backdrop-blur-sm overflow-hidden shadow-elegant">
              {/* Decorative soft accents */}
              <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-primary opacity-10 blur-3xl" />
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-accent opacity-10 blur-3xl" />
              
              <CardContent className="p-10 md:p-12 text-center relative z-10">
                <div className="inline-flex items-center gap-2 mb-6">
                  <div className="h-1 w-12 bg-gradient-primary rounded-full" />
                  <h3 className="text-2xl md:text-3xl font-bold font-display text-foreground">
                    Personal Philosophy
                  </h3>
                  <div className="h-1 w-12 bg-gradient-accent rounded-full" />
                </div>
                
                <p className="text-xl md:text-2xl text-foreground max-w-4xl mx-auto leading-relaxed font-light italic font-accent">
                  "For me, it's always been about finding clarity in the chaos—taking something messy or complex and shaping it into something people can actually connect with and use. 
                  I lean on curiosity to uncover what really matters and empathy to make sure the outcome speaks to people, not just processes."
                </p>

                {/* Playful decorative dots */}
                <div className="flex justify-center gap-3 mt-8">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                  <div className="w-3 h-3 rounded-full bg-secondary animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.4s' }} />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeyondWorkSection;
