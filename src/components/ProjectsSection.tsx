import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Play, TrendingUp, Users, Zap } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "AutoCook : A Product Roadmap",
      description: "Led development of a comprehensive analytics platform that processes 100M+ data points daily, serving Fortune 500 companies with real-time business insights.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Product Development", "Data Analysis", "Roadmapping", "Pricing"],
      metrics: [
        { icon: Users, label: "Market Research", value: "500+" },
        { icon: TrendingUp, label: "Growth Strategy", value: "3x" },
        { icon: Zap, label: "Time to Market", value: "6mo" }
      ],
      links: [
        { type: "external", label: "View Project", icon: ExternalLink }
      ],
    },
    {
      title: "Naitiv AI - Interpretation Platform",
      description: "Conducted market research and competitive analysis for an interpretation platform, focusing on developing GTM strategy and identifying MVP, to strengthen platform's market positioning.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      technologies: ["Design Thinking", "User Research", "Empathy", "Communication"],
      metrics: [
        { icon: Users, label: "Downloads", value: "1M+" },
        { icon: TrendingUp, label: "User Retention", value: "65%" },
        { icon: Zap, label: "App Rating", value: "4.8/5" }
      ],
      links: [
        { type: "external", label: "Case Study", icon: ExternalLink }
      ],
    },
    {
      title: "A 21Seeds Story",
      description: "Designed and launched an intelligent customer support system using machine learning to automate 70% of routine inquiries while maintaining high satisfaction scores.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
      technologies: ["GTM", "Pricing Strategy", "Market Expansion", "Collaboration"],
      metrics: [
        { icon: Users, label: "Tickets Resolved", value: "100K+" },
        { icon: TrendingUp, label: "Automation Rate", value: "70%" },
        { icon: Zap, label: "Response Time", value: "<30s" }
      ],
      links: [
        { type: "demo", label: "Demo", icon: Play },
        { type: "external", label: "Blog Post", icon: ExternalLink }
      ],
    },
    {
      title: "Future Pathway for Netflix",
      description: "Synthesized Netflix’s competitive landscape using market, and scenario analyses to translate insights into a phased strategy and learnings in user research, prioritization, and outcome-focused roadmapping",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["Strategy", "Critical Thinking", "Market Analysis", "Prioritization"],
      metrics: [
        { icon: Users, label: "Enterprise Clients", value: "200+" },
        { icon: TrendingUp, label: "Task Efficiency", value: "+40%" },
        { icon: Zap, label: "Support Reduction", value: "-60%" }
      ],
      links: [
        { type: "external", label: "Portfolio", icon: ExternalLink }
      ],
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
              Projects That Shaped My Product Skills
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
                <div className="relative h-64 overflow-hidden">
                  <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    paddingTop: '0',
                    paddingBottom: '0',
                    overflow: 'hidden',
                    borderRadius: '8px'
                  }}>
                    <iframe 
                      loading="lazy" 
                      style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        top: '0',
                        left: '0',
                        border: 'none',
                        padding: '0',
                        margin: '0'
                      }}
                      src={
                        index === 0 ? "https://www.canva.com/design/DAGdblLSqOc/fsivy_Yly4cFkX5oGjGJkg/view?embed" :
                        index === 1 ? "https://www.canva.com/design/DAGdbleNLpA/IM4KfObdzl5sVOda1lGbwQ/view?embed" :
                        index === 2 ? "https://www.canva.com/design/DAGlMoHTKhk/mMGwX968CPCv0Vj_G8Ya2A/view?embed" :
                        "https://www.canva.com/design/DAGkk1fsUGo/L6g1dhieB6Z5bSWmfqwZBg/view?embed"
                      }
                      allowFullScreen 
                      allow="fullscreen"
                    />
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Project Title & Description */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {index === 0 ? "Spearheaded product strategy for an AI-powered cooking appliance, leveraging market research, competitor analysis, and user profiling to define unique differentiators to enhance product-market fit." : 
                     index === 1 ? "Conducted market research and competitive analysis for an interpretation platform, focusing on developing GTM strategy and identifying MVP, to strengthen platform's market positioning." : 
                     index === 2 ? "Built a data-driven growth plan for 21Seeds—aligning distribution, brand, and product bets into a phased roadmap that preserves authenticity while driving 1.75L launch and double-digit expansion" :
                     project.description}
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
                </CardContent>
              </Card>
            ))}
          </div>


        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;