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
    },
    {
      icon: CookingPot,
      title: "Cooking & Baking",
      description: "Passionate about experimenting with different recipes; from banana bread to thai curry.",
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "Avid reader of product strategy, technology trends, and behavioral psychology. Always exploring new frameworks and methodologies.",
    },
    {
      icon: Palette,
      title: "Chasing Aesthetics",
      description: "Always looking for aesthetics in life, home, products and people. I pick up a brush and a paper from time to time. ",
    }
  ];

  const funFacts = [
    {
      icon: Coffee,
      title: "Coffee Enthusiast",
      description: "There is no bad time for a good cup of coffee"
    },
    {
      icon: Music,
      title: "Musicophile",
      description: "Looking for good music whenever I find the chance"
    },
    {
      icon: Martini,
      title: "Day Drinker",
      description: "Visiting a good bar? Count me in for happy hour"
    },
    {
      icon: Sun,
      title: "Beach Lover",
      description: "Always up for a good time at a sea shore"
    }
  ];

  return (
    <section id="beyond" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
              Beyond Work
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Life Outside the Office
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The experiences and passions that shape my perspective, drive creativity, 
              and contribute to my approach to problem-solving and leadership.
            </p>
          </div>

          {/* Main Interests */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {interests.map((interest, index) => (
              <Card 
                key={index}
                className="border-border/50 bg-surface-elevated hover:shadow-elegant transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <interest.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {interest.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {interest.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Fun Facts Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
              Quick Facts About Me
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {funFacts.map((fact, index) => (
                <Card 
                  key={index}
                  className="border-border/50 bg-background hover:bg-surface-elevated transition-all duration-300 group cursor-default"
                >
                  <CardContent className="p-4 text-center">
                    <div className="p-3 bg-surface rounded-lg mb-3 group-hover:bg-primary/10 transition-colors">
                      <fact.icon className="h-6 w-6 text-primary mx-auto" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2 text-sm">
                      {fact.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {fact.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Personal Philosophy */}
          <div className="text-center bg-gradient-to-r from-surface-elevated to-surface p-8 rounded-xl border border-border/50">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Personal Philosophy
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              "For me, it’s always been about finding clarity in the chaos—taking something messy or complex and shaping it into something people can actually connect with and use. 
              I lean on curiosity to uncover what really matters and empathy to make sure the outcome speaks to people, not just processes."
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeyondWorkSection;
