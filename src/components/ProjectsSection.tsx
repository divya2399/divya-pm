import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Play, TrendingUp, Users, Zap } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Enterprise Analytics Platform",
      description: "Led development of a comprehensive analytics platform that processes 100M+ data points daily, serving Fortune 500 companies with real-time business insights.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["React", "Python", "AWS", "Docker", "PostgreSQL"],
      metrics: [
        { icon: Users, label: "Active Users", value: "50K+" },
        { icon: TrendingUp, label: "Revenue Impact", value: "$2M+" },
        { icon: Zap, label: "Performance", value: "99.9%" }
      ],
      links: [
        { type: "demo", label: "Live Demo", icon: Play },
        { type: "github", label: "GitHub", icon: Github }
      ],
      status: "Live"
    },
    {
      title: "Mobile Fitness Companion",
      description: "Product strategy and roadmap for a mobile fitness app that achieved 1M+ downloads. Focused on user engagement and personalized workout experiences.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      technologies: ["React Native", "Node.js", "MongoDB", "Firebase"],
      metrics: [
        { icon: Users, label: "Downloads", value: "1M+" },
        { icon: TrendingUp, label: "User Retention", value: "65%" },
        { icon: Zap, label: "App Rating", value: "4.8/5" }
      ],
      links: [
        { type: "external", label: "Case Study", icon: ExternalLink }
      ],
      status: "Launched"
    },
    {
      title: "AI-Powered Customer Support",
      description: "Designed and launched an intelligent customer support system using machine learning to automate 70% of routine inquiries while maintaining high satisfaction scores.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
      technologies: ["Python", "TensorFlow", "NLP", "React", "Redis"],
      metrics: [
        { icon: Users, label: "Tickets Resolved", value: "100K+" },
        { icon: TrendingUp, label: "Automation Rate", value: "70%" },
        { icon: Zap, label: "Response Time", value: "<30s" }
      ],
      links: [
        { type: "demo", label: "Demo", icon: Play },
        { type: "external", label: "Blog Post", icon: ExternalLink }
      ],
      status: "Live"
    },
    {
      title: "B2B SaaS Dashboard Redesign",
      description: "Complete UX overhaul of a complex enterprise dashboard, resulting in 40% faster task completion and 60% reduction in user support tickets.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["Figma", "React", "TypeScript", "D3.js", "GraphQL"],
      metrics: [
        { icon: Users, label: "Enterprise Clients", value: "200+" },
        { icon: TrendingUp, label: "Task Efficiency", value: "+40%" },
        { icon: Zap, label: "Support Reduction", value: "-60%" }
      ],
      links: [
        { type: "external", label: "Portfolio", icon: ExternalLink }
      ],
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
              Featured Projects
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Products That Drive Results
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of successful product launches, strategic initiatives, and 
              technical solutions that delivered measurable business impact.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="border-border/50 bg-surface hover:shadow-elegant transition-all duration-300 group overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent" />
                  <Badge 
                    className={`absolute top-4 right-4 ${
                      project.status === 'Live' 
                        ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                        : 'bg-primary/20 text-primary border-primary/30'
                    }`}
                  >
                    {project.status}
                  </Badge>
                </div>

                <CardContent className="p-6">
                  {/* Project Title & Description */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="secondary"
                          className="text-xs bg-surface-muted"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {project.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-center">
                        <div className="p-2 bg-surface-elevated rounded-lg mb-1">
                          <metric.icon className="h-4 w-4 text-primary mx-auto" />
                        </div>
                        <div className="text-sm font-semibold text-foreground">
                          {metric.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-2 pt-4 border-t border-border/50">
                    {project.links.map((link, linkIndex) => (
                      <Button 
                        key={linkIndex}
                        variant="outline"
                        size="sm"
                        className="border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300"
                      >
                        <link.icon className="mr-2 h-4 w-4" />
                        {link.label}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Interested in seeing more detailed case studies?
            </p>
            <Button 
              size="lg"
              variant="outline"
              className="border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              View Full Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;