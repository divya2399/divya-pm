import { Badge } from "@/components/ui/badge";
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
  const stories = [
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

  const quickFacts = [
    { icon: Coffee, text: "There is no bad time for a good cup of coffee", color: "secondary" },
    { icon: Music, text: "Looking for good music whenever I find the chance", color: "primary" },
    { icon: Martini, text: "Visiting a good bar? Count me in for happy hour", color: "primary" },
    { icon: Sun, text: "Always up for a good time at a sea shore", color: "secondary" }
  ];

  return (
    <section id="beyond" className="py-24 bg-background relative overflow-hidden">
      {/* Softer decorative elements */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-gentle-float" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-gentle-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 animate-soft-fade-in">
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

          {/* Storytelling horizontal cards layout */}
          <div className="space-y-8 mb-16">
            {stories.map((story, index) => (
              <div 
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-6 items-center animate-slide-in-soft`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Icon side */}
                <div className={`flex-shrink-0 p-8 rounded-2xl ${
                  story.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'
                } hover:scale-105 transition-transform`}>
                  <story.icon className={`h-14 w-14 ${
                    story.color === 'primary' ? 'text-primary' : 'text-secondary'
                  }`} />
                </div>
                
                {/* Text side */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <h3 className="text-2xl font-bold font-display text-foreground mb-3">
                    {story.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {story.description}
                  </p>
                  <div className={`h-1 w-20 rounded-full mt-4 ${
                    story.color === 'primary' ? 'bg-primary' : 'bg-secondary'
                  } ${index % 2 === 0 ? '' : 'md:ml-auto'}`} />
                </div>
              </div>
            ))}
          </div>

          {/* Quick facts - Horizontal scroll style */}
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
