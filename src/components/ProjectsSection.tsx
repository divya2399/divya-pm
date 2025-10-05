import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "AutoCook : A Product Roadmap",
      description: "Spearheaded product strategy for an AI-powered cooking appliance, leveraging market research, competitor analysis, and user profiling to define unique differentiators to enhance product-market fit.",
      technologies: ["Product Development", "Data Analysis", "Roadmapping", "Pricing"],
      embedUrl: "https://www.canva.com/design/DAGdblLSqOc/fsivy_Yly4cFkX5oGjGJkg/view?embed"
    },
    {
      title: "Naitiv AI - Interpretation Platform",
      description: "Conducted market research and competitive analysis for an interpretation platform, focusing on developing GTM strategy and identifying MVP, to strengthen platform's market positioning.",
      technologies: ["Design Thinking", "User Research", "Empathy", "Communication"],
      embedUrl: "https://www.canva.com/design/DAGdbleNLpA/IM4KfObdzl5sVOda1lGbwQ/view?embed"
    },
    {
      title: "A 21Seeds Story",
      description: "Built a data-driven growth plan for 21Seeds—aligning distribution, brand, and product bets into a phased roadmap that preserves authenticity while driving 1.75L launch and double-digit expansion",
      technologies: ["GTM", "Pricing Strategy", "Market Expansion", "Collaboration"],
      embedUrl: "https://www.canva.com/design/DAGlMoHTKhk/mMGwX968CPCv0Vj_G8Ya2A/view?embed"
    },
    {
      title: "Future Pathway for Netflix",
      description: "Synthesized Netflix's competitive landscape using market, and scenario analyses to translate insights into a phased strategy and learnings in user research, prioritization, and outcome-focused roadmapping",
      technologies: ["Strategy", "Critical Thinking", "Market Analysis", "Prioritization"],
      embedUrl: "https://www.canva.com/design/DAGkk1fsUGo/L6g1dhieB6Z5bSWmfqwZBg/view?embed"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden grid-pattern">
      {/* Soft decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 animate-soft-fade-in">
            <Badge variant="outline" className="mb-4 border-primary/40 text-primary px-4 py-1.5">
              Featured Projects
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-6 max-w-3xl">
              Projects That Shaped My{" "}
              <span className="text-secondary">Product Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A showcase of successful product launches, strategic initiatives, and 
              technical solutions that delivered measurable business impact.
            </p>
          </div>

          {/* Staggered Project Grid - Behance style */}
          <div className="space-y-20">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`grid lg:grid-cols-2 gap-10 items-center animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Preview - Alternates sides */}
                <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} relative group`}>
                  <div className="relative aspect-video rounded-3xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 hover-lift">
                    {/* Soft corner accent */}
                    <div className={`absolute top-0 ${index % 2 === 0 ? 'right-0' : 'left-0'} w-32 h-32 ${
                      index % 2 === 0 ? 'bg-primary/20' : 'bg-secondary/20'
                    } blur-3xl`} />
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                      <div className="flex items-center gap-2 text-primary font-semibold">
                        <ExternalLink className="h-4 w-4" />
                        <span className="text-sm">View Project</span>
                      </div>
                    </div>
                    
                    <iframe 
                      loading="lazy" 
                      className="w-full h-full"
                      src={project.embedUrl}
                      allowFullScreen 
                      allow="fullscreen"
                    />
                  </div>
                </div>

                {/* Project Details - Alternates sides */}
                <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} space-y-6`}>
                  <div className="space-y-6">
                    <div>
                      <div className="inline-flex items-center gap-3 mb-3">
                        <div className={`h-1 w-12 ${
                          index % 2 === 0 ? 'bg-gradient-primary' : 'bg-gradient-accent'
                        } rounded-full`} />
                        <Badge variant="outline" className="border-primary/40 text-primary text-xs">
                          Case Study
                        </Badge>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-4 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    
                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed text-base">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold font-display text-foreground mb-3 flex items-center gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full" />
                        Key Skills Applied
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex}
                            variant="outline"
                            className="border-secondary/40 hover:bg-secondary/10 hover:scale-105 transition-all"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;