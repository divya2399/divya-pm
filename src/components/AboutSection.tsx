import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Lightbulb, TrendingUp } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Users,
      title: "Product Strategy",
      description: "Owned the lifecycle of internal tools, from identifying user needs to delivering solutions, streamlining decision-making"
    },
    {
      icon: Target,
      title: "User Research",
      description: "Led product discovery through design thinking to validate pain points and drive impactful product recommendations"
    },
    {
      icon: Lightbulb,
      title: "Cross-Functional Leadership",
      description: "Coordinated with diverse partners to deliver workflow solutions that improved team efficiency and stakeholder alignment"
    },
    {
      icon: TrendingUp,
      title: "Agile Delivery",
      description: "Managed Agile development cycles for multiple feature upgrades, using user feedback to boost adoption and efficiency"
    }
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Soft decorative elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-primary/15 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 animate-soft-fade-in">
            <Badge variant="outline" className="mb-4 border-primary/40 text-primary px-4 py-1.5">
              About Me
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-6 max-w-2xl">
              Building Products That{" "}
              <span className="text-primary">Matter</span>
            </h2>
          </div>

          {/* Asymmetric Layout */}
          <div className="grid lg:grid-cols-12 gap-10 mb-16">
            {/* Bio - Takes more space */}
            <div className="lg:col-span-7 space-y-6 animate-slide-in-soft">
              <div className="bg-card rounded-3xl p-8 shadow-soft hover:shadow-elegant transition-all duration-500 hover-lift">
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  Drawing on over 4 years of experience across SaaS and BioTech industries, I bridge business challenges and technology to deliver results. I work consistently towards efficiency and driving value for users and organizations alike.
                </p>
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  I started my career curious about how technology could transform the way we work, gaining experience in both BioTech and SaaS. Along the way, I saw how the right solutions can simplify complexity and deliver real impact.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  Working across teams, I naturally gravitated toward product management—where ideas become tangible outcomes. From streamlining processes to building dashboards and automations, I found my strength in turning vision into action.
                </p>
              </div>

              <p className="text-xl text-muted-foreground leading-relaxed pl-8 border-l-4 border-secondary italic font-accent">
                Today, I bring a data-driven, agile, and collaborative approach to product management, always focused on uncovering user pain points and shaping them into scalable solutions that spark innovation.
              </p>
            </div>

            {/* Highlights - Staggered cards */}
            <div className="lg:col-span-5 space-y-4 animate-slide-in-soft">
              {highlights.map((highlight, index) => (
                <Card 
                  key={index}
                  className={`bg-card hover:shadow-soft transition-all duration-500 hover-lift ${
                    index % 2 === 0 ? 'lg:ml-0' : 'lg:ml-6'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-xl hover:scale-110 transition-transform">
                        <highlight.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold font-display text-foreground mb-2 text-base">
                          {highlight.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats - Clean grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-expand-in">
            {[
              { number: "4", label: "Years Experience", color: "primary" },
              { number: "2", label: "Degrees", color: "secondary" },
              { number: "20+", label: "Features Launched", color: "primary" },
              { number: "3+", label: "Organizations Served", color: "secondary" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-6 bg-card rounded-2xl hover:shadow-soft transition-all duration-500 hover-lift group"
              >
                <div className={`text-4xl md:text-5xl font-bold font-display ${
                  stat.color === 'primary' ? 'text-primary' : 'text-secondary'
                } mb-2 group-hover:scale-110 transition-transform`}>
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
