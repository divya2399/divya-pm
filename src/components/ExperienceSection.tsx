import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, Award, TrendingUp } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Regeneron Pharmaceuticals",
      role: "Data Product manager",
      period: "June 2025 - Present",
      type: "Internship",
      achievements: [
        "Launched real-time dashboard, reducing manual effort from 16+ hours to zero",
        "Drove OKR adoption across 7 teams, improving analytics delivery and alignment",
        "Delivered 20+ upgrades, cut user effort by 37%, sped results by 12%",
        "Streamlined onboarding for 10+ tools, reduced time 33%, increased adoption 18%"
      ],
      skills: ["Product Strategy", "Roadmapping", "Product Lifecycle", "Change Management"]
    },
    {
      company: "Eli Lilly Pvt Ltd",
      role: "Technical Product Analyst",
      period: "October 2023 - June 2024",
      type: "Full-time",
      achievements: [
        "Deployed BioTuring on AWS, improving research workflow efficiency by 30%",
        "Automated ML workflows with Kubeflow on AWS, reduced deployment time by 60%",
        "Standardized dev environments with Coder on AWS, boosted adoption by 40%"
      ],
      skills: ["Amazon Web Services", "User Engagement", "Agile", "Cross-functional Collaboration"]
    },
    {
      company: "Nutanix",
      role: "System Reliablity Engineer",
      period: "January 2021 - October 2023",
      type: "Full-time",
      achievements: [
        "Increased Prism Central adoption by 22% in six months through new features",
        "Identified and resolved 600+ customer issues, improving customer retention by 5%",
        "Collaborated with product team on 20+ critical bugs, reducing incidents by 16% and boosting reliability"
      ],
      skills: ["B2C SaaS", "Prioritization", "Documentation", "Customer Relationship Management"]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-background relative overflow-hidden">
      {/* Soft decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/15 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 animate-soft-fade-in">
            <Badge variant="outline" className="mb-4 border-secondary/40 text-secondary-foreground px-4 py-1.5">
              Professional Experience
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-6 max-w-2xl">
              Career Journey &{" "}
              <span className="text-secondary">Achievements</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A track record of driving product success through strategic thinking, 
              technical expertise, and collaborative leadership.
            </p>
          </div>

          {/* Timeline with alternating layout */}
          <div className="relative">
            {/* Delicate timeline line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary/30 transform -translate-x-1/2 opacity-40" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className={`relative animate-soft-fade-in ${
                    index % 2 === 0 ? 'lg:pr-1/2 lg:text-right' : 'lg:pl-1/2 lg:ml-auto'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline node */}
                  <div className="hidden lg:block absolute top-8 left-1/2 w-5 h-5 rounded-full border-4 border-background bg-primary transform -translate-x-1/2 shadow-soft z-10" />

                  <Card className={`bg-card hover:shadow-elegant transition-all duration-500 hover-lift lg:w-11/12 group ${
                    index % 2 === 0 ? 'lg:ml-0' : 'lg:ml-auto'
                  }`}>
                    <CardContent className="p-8">
                      {/* Header */}
                      <div className="mb-6">
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                          <h3 className="text-2xl font-bold font-display text-foreground">
                            {exp.role}
                          </h3>
                          <Badge variant="secondary" className="font-medium">
                            {exp.type}
                          </Badge>
                        </div>
                        
                        <h4 className="text-xl font-semibold text-primary mb-3">
                          {exp.company}
                        </h4>
                        
                        <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                          <CalendarDays className="h-4 w-4" />
                          {exp.period}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h5 className="font-bold text-foreground mb-4 flex items-center gap-2 text-base font-display">
                          <Award className="h-5 w-5 text-secondary" />
                          Key Achievements
                        </h5>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-3 text-muted-foreground">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills */}
                      <div>
                        <h5 className="font-bold text-foreground mb-3 flex items-center gap-2 text-base font-display">
                          <TrendingUp className="h-5 w-5 text-primary" />
                          Core Skills
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <Badge 
                              key={skillIndex} 
                              variant="outline" 
                              className="border-primary/40 text-xs hover:bg-primary/10 hover:scale-105 transition-all"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
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

export default ExperienceSection;