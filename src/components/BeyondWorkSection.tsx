import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Camera, 
  Mountain, 
  BookOpen, 
  Heart, 
  Music, 
  Plane,
  Coffee,
  Users
} from "lucide-react";

const BeyondWorkSection = () => {
  const interests = [
    {
      icon: Camera,
      title: "Photography",
      description: "Landscape and street photography enthusiast. Love capturing moments that tell stories and showcase the beauty in everyday life.",
      highlights: ["500px Featured Artist", "Local Gallery Exhibition", "Nature Photography Award"]
    },
    {
      icon: Mountain,
      title: "Rock Climbing",
      description: "Passionate about bouldering and sport climbing. The problem-solving aspect mirrors product challenges in interesting ways.",
      highlights: ["V6 Bouldering Level", "Outdoor Climbing Trips", "Local Climbing Community Leader"]
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "Avid reader of product strategy, technology trends, and behavioral psychology. Always exploring new frameworks and methodologies.",
      highlights: ["50+ Books/Year", "Product Management Courses", "Tech Conference Speaker"]
    },
    {
      icon: Heart,
      title: "Volunteer Work",
      description: "Mentoring aspiring product managers and supporting local tech education initiatives for underrepresented communities.",
      highlights: ["20+ Mentees", "STEM Education Programs", "Product Bootcamp Instructor"]
    }
  ];

  const funFacts = [
    {
      icon: Coffee,
      title: "Coffee Enthusiast",
      description: "Third-wave coffee aficionado with a home espresso setup"
    },
    {
      icon: Music,
      title: "Vinyl Collector",
      description: "Building a collection of jazz and electronic music records"
    },
    {
      icon: Plane,
      title: "Travel Explorer",
      description: "Visited 25+ countries, always planning the next adventure"
    },
    {
      icon: Users,
      title: "Community Builder",
      description: "Organizer of monthly product management meetups"
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

                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground">Highlights:</h4>
                    {interest.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                        {highlight}
                      </div>
                    ))}
                  </div>
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
              "I believe that the best products come from teams that embrace curiosity, 
              empathy, and continuous learning. Whether I'm scaling a mountain, capturing 
              a perfect sunset, or mentoring someone new to product management, I approach 
              each challenge with the same principles: preparation, persistence, and 
              genuine care for the outcome."
            </p>
            
            <div className="flex justify-center gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Countries Visited</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">20+</div>
                <div className="text-sm text-muted-foreground">People Mentored</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-glow">500+</div>
                <div className="text-sm text-muted-foreground">Photos Taken</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeyondWorkSection;