import { Badge } from "@/components/ui/badge";
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
      color: "secondary",
      skills: ["Tableau", "JIRA", "Confluence", "Power BI", "Lucid Chart", "Copilot", "Notion", "Github", "Lovable"]
    },
    {
      icon: Users,
      title: "Product Management",
      color: "primary",
      skills: ["Roadmapping", "User Stories", "Wireframing", "Stakeholder Management", "Go-to-Market", "Feature Prioritization", "Objectives & Key Results", "SAFe"]
    },
    {
      icon: Palette,
      title: "Design & UX",
      color: "secondary",
      skills: ["Figma", "User Journey Mapping", "Prototyping", "Design Systems", "Usability Testing"]
    }
  ];

  const proficiencies = [
    { icon: Cpu, label: "Technical", level: "Expert", color: "primary" },
    { icon: Target, label: "Product", level: "Advanced", color: "primary" },
    { icon: Sparkles, label: "Design", level: "Intermediate", color: "secondary" },
    { icon: Globe, label: "Strategy", level: "Advanced", color: "secondary" }
  ];

  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
      {/* Soft decorative elements */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 animate-soft-fade-in">
            <Badge variant="outline" className="mb-4 border-primary/40 text-primary px-4 py-1.5">
              Skills & Expertise
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-6 max-w-3xl">
              Technical &{" "}
              <span className="text-secondary">Strategic Capabilities</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A comprehensive toolkit spanning technical implementation, strategic planning, 
              and user experience design to deliver exceptional products.
            </p>
          </div>

          {/* Skill Categories - Open layout */}
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-12 mb-20">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className={`animate-expand-in group ${
                  index === 2 ? 'md:translate-y-8' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-4 rounded-2xl transition-all duration-300 group-hover:scale-110 ${
                      category.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'
                    }`}>
                      <category.icon className={`h-7 w-7 ${
                        category.color === 'primary' ? 'text-primary' : 'text-secondary'
                      }`} />
                    </div>
                    <h3 className="text-xl font-bold font-display text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 pl-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="outline" 
                        className={`hover:scale-105 transition-all ${
                          category.color === 'primary' 
                            ? 'border-primary/40 hover:bg-primary/10' 
                            : 'border-secondary/40 hover:bg-secondary/10'
                        }`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {/* Accent line */}
                  <div className={`h-1 w-16 rounded-full ${
                    category.color === 'secondary' ? 'bg-gradient-accent' : 'bg-gradient-primary'
                  }`} />
                </div>
              </div>
            ))}
          </div>

          {/* Proficiency Indicators - Simple layout */}
          <div className="animate-soft-fade-in">
            <h3 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-12 text-center">
              Proficiency Levels
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              {proficiencies.map((item, index) => (
                <div 
                  key={index} 
                  className="group animate-expand-in text-center"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="inline-block mb-4">
                    <div className={`p-5 rounded-full group-hover:scale-110 transition-all duration-300 ${
                      item.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'
                    }`}>
                      <item.icon className={`h-10 w-10 ${
                        item.color === 'primary' ? 'text-primary' : 'text-secondary'
                      }`} />
                    </div>
                  </div>
                  
                  <h4 className="font-bold font-display text-foreground mb-2 text-lg">
                    {item.label}
                  </h4>
                  <p className={`text-sm font-medium ${
                    item.color === 'primary' ? 'text-primary' : 'text-secondary'
                  }`}>
                    {item.level}
                  </p>
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
