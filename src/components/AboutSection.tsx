import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Lightbulb, TrendingUp } from "lucide-react";
const AboutSection = () => {
  const highlights = [{
    icon: Users,
    title: "Product Strategy",
    description: "Owned the lifecycle of internal tools, from identifying user needs to delivering solutions, streamlining decision-making"
  }, {
    icon: Target,
    title: "User Research",
    description: "Led product discovery through design thinking to validate pain points and drive impactful product recommendations"
  }, {
    icon: Lightbulb,
    title: "Cross-Functional Leadership",
    description: "Coordinated with diverse partners to deliver workflow solutions that improved team efficiency and stakeholder alignment"
  }, {
    icon: TrendingUp,
    title: "Agile Delivery",
    description: "Managed Agile development cycles for multiple feature upgrades, using user feedback to boost adoption and efficiency"
  }];
  return <section id="about" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
              About Me
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Building Products That Matter
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Drawing on over 4 years of experience across SaaS and BioTech industries, I bridge business challenges and technology to deliver results. I work consistently towards efficiency and driving value for users and organizations alike</p>
          </div>

          {/* Bio Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-foreground leading-relaxed">I started my career curious about how technology could transform the way we work, gaining experience in both BioTech and SaaS. Along the way, I saw how the right solutions can simplify complexity and deliver real impact.</p>
              <p className="text-foreground leading-relaxed">Working across teams, I naturally gravitated toward product management—where ideas become tangible outcomes. From streamlining processes to building dashboards and automations, I found my strength in turning vision into action.</p>
              <p className="text-foreground leading-relaxed">
                Today, I bring a data-driven, agile, and collaborative approach to product management, always focused on uncovering user pain points and shaping them into scalable solutions that spark innovation.
              </p>
            </div>

            <div className="space-y-4">
              {highlights.map((highlight, index) => <Card key={index} className="border-border/50 bg-surface-elevated hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <highlight.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {highlight.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[{
            number: "4",
            label: "Years Experience"
          }, {
            number: "2",
            label: "Degrees"
          }, {
            number: "20+",
            label: "Features Launched"
          }, {
            number: "3+",
            label: "Organizations Served"
          }].map((stat, index) => <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;