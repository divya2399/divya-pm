import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, MapPin, TrendingUp, Users, Award } from "lucide-react";
const ExperienceSection = () => {
  const experiences = [{
    company: "TechFlow Solutions",
    role: "Senior Product Manager",
    period: "2022 - Present",
    location: "San Francisco, CA",
    type: "Full-time",
    achievements: ["Led product strategy for B2B SaaS platform serving 500K+ users", "Increased user engagement by 45% through data-driven feature optimization", "Managed $2M product budget and cross-functional team of 12 members", "Launched 3 major product lines resulting in 30% revenue growth"],
    skills: ["Product Strategy", "Team Leadership", "B2B SaaS", "Data Analytics"]
  }, {
    company: "InnovateLabs",
    role: "Product Manager",
    period: "2020 - 2022",
    location: "Austin, TX",
    type: "Full-time",
    achievements: ["Spearheaded mobile app redesign that improved user retention by 35%", "Collaborated with engineering teams to reduce feature delivery time by 40%", "Conducted user research with 200+ participants to inform product decisions", "Implemented agile methodologies across 3 product teams"],
    skills: ["Mobile Apps", "User Research", "Agile", "Cross-functional Leadership"]
  }, {
    company: "DataVision Corp",
    role: "Associate Product Manager",
    period: "2018 - 2020",
    location: "New York, NY",
    type: "Full-time",
    achievements: ["Launched analytics dashboard used by 100+ enterprise clients", "Reduced customer onboarding time from 30 days to 7 days", "Created product documentation and training materials for sales team", "Coordinated with UX team to improve user interface satisfaction by 50%"],
    skills: ["Enterprise Software", "Analytics", "Documentation", "UX Collaboration"]
  }, {
    company: "StartupX",
    role: "Software Engineer",
    period: "2017 - 2018",
    location: "Remote",
    type: "Full-time",
    achievements: ["Developed full-stack web applications using React and Node.js", "Built REST APIs serving millions of requests per day", "Optimized database queries reducing response time by 60%", "Mentored 2 junior developers in modern web development practices"],
    skills: ["Full-stack Development", "React", "Node.js", "Database Optimization"]
  }];
  return <section id="experience" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
              Professional Experience
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Career Journey & Achievements
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A track record of driving product success through strategic thinking, 
              technical expertise, and collaborative leadership.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => <Card key={index} className="border-border/50 bg-surface-elevated hover:shadow-elegant transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <h4 className="text-lg font-semibold text-primary mb-2">
                        {exp.company}
                      </h4>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        
                        
                        <Badge variant="secondary" className="text-xs">
                          {exp.type}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h5 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Award className="h-4 w-4 text-accent" />
                      Key Achievements
                    </h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => <li key={achIndex} className="flex items-start gap-2 text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                          {achievement}
                        </li>)}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div>
                    <h5 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      Core Skills
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => <Badge key={skillIndex} variant="outline" className="border-primary/30 text-xs hover:bg-primary/10 transition-colors">
                          {skill}
                        </Badge>)}
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>

          {/* Summary Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[{
            icon: Users,
            number: "50+",
            label: "Team Members Led"
          }, {
            icon: TrendingUp,
            number: "$5M+",
            label: "Revenue Impact"
          }, {
            icon: Award,
            number: "15+",
            label: "Product Launches"
          }, {
            icon: CalendarDays,
            number: "7",
            label: "Years Experience"
          }].map((stat, index) => <div key={index} className="text-center group">
                <div className="p-4 bg-background rounded-lg mb-3 group-hover:bg-surface-muted transition-colors">
                  <stat.icon className="h-8 w-8 text-primary mx-auto" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">
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
export default ExperienceSection;