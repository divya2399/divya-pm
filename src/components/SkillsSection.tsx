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
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
      {/* Tech background elements */}
      <div className="absolute inset-0 grid-pattern-dense opacity-15" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl glow-primary" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-coral/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4 border-primary/50 text-primary bg-primary/5 px-5 py-1.5 font-medium">
              Skills & Expertise
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-6 max-w-3xl tracking-tight">
              Technical &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-accent">Strategic Capabilities</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A comprehensive toolkit spanning technical implementation, strategic planning, 
              and user experience design to deliver exceptional products.
            </p>
          </div>

          {/* Skill Categories - Modular tech cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className={`border-2 ${
                  category.color === 'primary' ? 'border-primary/30 hover:border-primary/60' :
                  category.color === 'accent' ? 'border-accent/30 hover:border-accent/60' :
                  'border-coral/30 hover:border-coral/60'
                } bg-surface hover:shadow-tech transition-all duration-500 hover-tech animate-scale-in group ${
                  index === 2 ? 'md:translate-y-6' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 rounded-2xl border-2 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${
                      category.color === 'primary' ? 'bg-primary/10 border-primary/40' :
                      category.color === 'accent' ? 'bg-accent/10 border-accent/40' :
                      'bg-coral/10 border-coral/40'
                    }`}>
                      <category.icon className={`h-7 w-7 ${
                        category.color === 'primary' ? 'text-primary' :
                        category.color === 'accent' ? 'text-accent' :
                        'text-coral'
                      }`} />
                    </div>
                    <h3 className="text-xl font-bold font-display text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="outline" 
                        className={`text-foreground hover:scale-105 transition-all cursor-default font-medium ${
                          category.color === 'primary' ? 'border-primary/40 bg-primary/5 hover:bg-primary/20' :
                          category.color === 'accent' ? 'border-accent/40 bg-accent/5 hover:bg-accent/20' :
                          'border-coral/40 bg-coral/5 hover:bg-coral/20'
                        }`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {/* Tech accent line */}
                  <div className={`mt-6 h-1 w-16 rounded-full ${
                    category.color === 'coral' ? 'bg-gradient-coral' :
                    category.color === 'accent' ? 'bg-gradient-accent' :
                    'bg-gradient-primary'
                  }`} />
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Proficiency Indicators - Clean circular tech cards */}
          <div className="animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-10 text-center">
              Proficiency Levels
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {proficiencies.map((item, index) => (
                <div 
                  key={index} 
                  className="group animate-rotate-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <Card className={`border-2 bg-surface hover:shadow-tech transition-all duration-500 hover-tech ${
                    item.color === 'primary' ? 'border-primary/40 hover:border-primary/70 hover:bg-primary/5' :
                    item.color === 'coral' ? 'border-coral/40 hover:border-coral/70 hover:bg-coral/5' :
                    'border-accent/40 hover:border-accent/70 hover:bg-accent/5'
                  }`}>
                    <CardContent className="p-8 text-center">
                      <div className="relative inline-block mb-4">
                        {/* Glow effect */}
                        <div className={`absolute inset-0 rounded-full blur-xl group-hover:blur-2xl transition-all ${
                          item.color === 'primary' ? 'bg-primary/20' :
                          item.color === 'coral' ? 'bg-coral/20' :
                          'bg-accent/20'
                        }`} />
                        
                        <div className={`relative p-5 rounded-full border-2 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 ${
                          item.color === 'primary' ? 'bg-primary/10 border-primary/40' :
                          item.color === 'coral' ? 'bg-coral/10 border-coral/40' :
                          'bg-accent/10 border-accent/40'
                        }`}>
                          <item.icon className={`h-10 w-10 ${
                            item.color === 'primary' ? 'text-primary' :
                            item.color === 'coral' ? 'text-coral' :
                            'text-accent'
                          }`} />
                        </div>
                      </div>
                      
                      <h4 className="font-bold font-display text-foreground mb-2 text-lg">
                        {item.label}
                      </h4>
                      <p className={`text-sm font-medium ${
                        item.color === 'primary' ? 'text-primary' :
                        item.color === 'coral' ? 'text-coral' :
                        'text-accent'
                      }`}>
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