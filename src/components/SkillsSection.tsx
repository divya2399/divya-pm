import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, BarChart3, Users, Palette, Cpu, Globe, Target, Sparkles } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Technical Skills",
      color: "primary",
      skills: ["Java", "Python", "SQL", "Linux", "R", "Git", "Docker", "Kubernetes", "AWS"]
    },
    {
      icon: BarChart3,
      title: "Platforms & Tools",
      color: "accent",
      skills: ["Tableau", "JIRA", "Confluence", "Power BI", "Lucid Chart", "Copilot", "Notion", "Github", "Lovable"]
    },
    {
      icon: Users,
      title: "Product Management",
      color: "coral",
      skills: ["Roadmapping", "User Stories", "Wireframing", "Stakeholder Management", "Go-to-Market", "Feature Prioritization", "Objectives & Key Results", "SAFe"]
    },
    {
      icon: Palette,
      title: "Design & UX",
      color: "primary",
      skills: ["Figma", "User Journey Mapping", "Prototyping", "Design Systems", "Usability Testing"]
    }
  ];

  const proficiencies = [
    { icon: Cpu, label: "Technical", level: "Expert", color: "primary" },
    { icon: Target, label: "Product", level: "Advanced", color: "coral" },
    { icon: Sparkles, label: "Design", level: "Intermediate", color: "accent" },
    { icon: Globe, label: "Strategy", level: "Advanced", color: "primary" }
  ];

  return (
    <section id="skills" className="py-24 bg-surface relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-coral/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4 border-primary/40 text-primary bg-primary/5 px-4 py-1">
              Skills & Expertise
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 max-w-3xl">
              Technical &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-accent">Strategic Capabilities</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A comprehensive toolkit spanning technical implementation, strategic planning, 
              and user experience design to deliver exceptional products.
            </p>
          </div>

          {/* Skill Categories - Masonry-like grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className={`border-border/50 bg-gradient-surface hover:shadow-${category.color} transition-all duration-500 hover-lift animate-scale-in ${
                  index === 0 ? 'md:row-span-1' : ''
                } ${
                  index === 2 ? 'md:translate-y-6' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 bg-${category.color}/10 rounded-2xl border-2 border-${category.color}/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <category.icon className={`h-7 w-7 text-${category.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="outline" 
                        className={`border-${category.color}/30 bg-${category.color}/5 text-foreground hover:bg-${category.color}/20 hover:scale-105 transition-all cursor-default`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {/* Decorative accent */}
                  <div className={`mt-6 h-1 w-16 bg-gradient-${category.color === 'coral' ? 'coral' : category.color === 'accent' ? 'accent' : 'primary'} rounded-full`} />
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Proficiency Indicators - Circular cards */}
          <div className="animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">
              Proficiency Levels
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {proficiencies.map((item, index) => (
                <div 
                  key={index} 
                  className="group animate-rotate-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <Card className={`border-2 border-${item.color}/30 bg-gradient-surface hover:bg-${item.color}/5 hover:border-${item.color} hover:shadow-${item.color} transition-all duration-500 hover-lift`}>
                    <CardContent className="p-8 text-center">
                      <div className={`relative inline-block mb-4`}>
                        {/* Circular background */}
                        <div className={`absolute inset-0 bg-${item.color}/10 rounded-full blur-xl group-hover:blur-2xl transition-all`} />
                        
                        <div className={`relative p-5 bg-${item.color}/10 rounded-full border-2 border-${item.color}/30 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                          <item.icon className={`h-10 w-10 text-${item.color}`} />
                        </div>
                      </div>
                      
                      <h4 className="font-bold text-foreground mb-2 text-lg">
                        {item.label}
                      </h4>
                      <p className={`text-sm font-medium text-${item.color}`}>
                        {item.level}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
