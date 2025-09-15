import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, 
  BarChart3, 
  Users, 
  Zap, 
  Database, 
  Palette,
  Cpu,
  Globe
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Technical Skills",
      color: "text-primary",
      skills: [
        "Java", "Python", "SQL", "Linux", "R", 
        "Git", "Docker", "Kubernetes", "AWS"
      ]
    },
    {
      icon: BarChart3,
      title: "Platforms & Tools",
      color: "text-accent",
      skills: [
        "Tableau", "JIRA", "Confluence", "Power BI", "Lucid Chart", "Copilot"
      ]
    },
    {
      icon: Users,
      title: "Product Management",
      color: "text-primary-glow",
      skills: [
        "Roadmapping", "User Stories", "Wireframing", "Stakeholder Management", 
        "Go-to-Market", "Feature Prioritization", "Objectives & Key Results", "SAFe"
      ]
    },
    {
      icon: Palette,
      title: "Design & UX",
      color: "text-accent",
      skills: [
        "Figma", "User Journey Mapping", "Prototyping", "Design Systems", 
        "Usability Testing"
      ]
    }
  ];

  const tools = [
    "Jira", "Confluence", "Slack", "Notion", "Figma", "Miro", 
    "Postman", "GitHub", "Linear", "Amplitude", "Intercom", "Zendesk"
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
              Skills & Expertise
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Technical & Strategic Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit spanning technical implementation, strategic planning, 
              and user experience design to deliver exceptional products.
            </p>
          </div>

          {/* Skill Categories */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="border-border/50 bg-surface hover:shadow-elegant transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-surface-elevated rounded-lg group-hover:bg-primary/10 transition-colors">
                      <category.icon className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className="bg-surface-muted hover:bg-primary/20 transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tools & Platforms */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Tools & Platforms
            </h3>
            
            <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
              {tools.map((tool, index) => (
                <Badge 
                  key={index}
                  variant="outline"
                  className="border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300 px-4 py-2 text-sm"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </div>

          {/* Proficiency Indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Cpu, label: "Technical", level: "Expert" },
              { icon: BarChart3, label: "Analytics", level: "Advanced" },
              { icon: Users, label: "Leadership", level: "Expert" },
              { icon: Globe, label: "Strategy", level: "Advanced" }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="p-4 bg-surface rounded-lg mb-3 group-hover:bg-surface-elevated transition-colors">
                  <item.icon className="h-8 w-8 text-primary mx-auto" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">{item.label}</h4>
                <p className="text-sm text-muted-foreground">{item.level}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;