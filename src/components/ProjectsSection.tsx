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
    <section id="projects" className="py-24 bg-background-light relative overflow-hidden">
      {/* Tech decorative elements */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-coral/10 rounded-full blur-3xl glow-accent" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl glow-accent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4 border-coral/50 text-coral bg-coral/5 px-5 py-1.5 font-medium">
              Featured Projects
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground-dark mb-6 max-w-3xl tracking-tight">
              Projects That Shaped My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-coral">Product Skills</span>
            </h2>
            <p className="text-lg text-foreground-dark/70 max-w-2xl">
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
                  <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-primary/30 hover:border-primary/60 transition-all duration-500 shadow-elegant hover:shadow-tech hover-tech">
                    {/* Tech corner accent */}
                    <div className={`absolute top-0 ${index % 2 === 0 ? 'right-0' : 'left-0'} w-24 h-24 ${
                      index % 2 === 0 ? 'bg-gradient-coral' : 'bg-gradient-accent'
                    } opacity-20 blur-2xl`} />
                    
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
                  <Card className="border-2 border-primary/20 bg-surface-light hover:shadow-tech hover:border-primary/40 transition-all duration-500 hover-tech">
                    <CardContent className="p-8">
                      {/* Title with tech accent */}
                      <div className="mb-4">
                        <div className="inline-flex items-center gap-3 mb-3">
                          <div className={`h-1 w-8 ${
                            index % 2 === 0 ? 'bg-gradient-coral' : 'bg-gradient-accent'
                          } rounded-full`} />
                          <Badge variant="outline" className="border-primary/40 text-primary bg-primary/5 text-xs font-medium">
                            Case Study
                          </Badge>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold font-display text-foreground-dark group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      
                      {/* Description */}
                      <p className="text-foreground-dark/70 mb-6 leading-relaxed text-base">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-semibold font-display text-foreground-dark mb-3 flex items-center gap-2">
                          <div className="w-2 h-2 bg-accent rounded-full" />
                          Key Skills Applied
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex}
                              variant="outline"
                              className="border-accent/40 bg-accent/5 text-accent-foreground hover:bg-accent/20 hover:scale-105 transition-all font-medium"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Decorative line */}
                      <div className="mt-6 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                    </CardContent>
                  </Card>
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