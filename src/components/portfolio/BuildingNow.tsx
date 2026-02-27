import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const BuildingNow = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      name: "Interview Intelligence Agent",
      description:
        "An AI system that ingests 15-30 research documents (company filings, job descriptions, interviewer profiles) and generates targeted interview preparation materials in under 30 minutes. Built with Python and the Claude API. Includes interactive gap analysis, cost-optimized API usage, and role-agnostic architecture that adapts to any company or role.",
      tags: ["Python", "Claude API", "Agent Architecture"],
      link: "https://github.com/",
    },
    {
      name: "E-Commerce Marketing Agents",
      description:
        "Autonomous agent framework handling content generation, audience targeting, and campaign optimization for a direct-to-consumer apparel brand bringing cotton essentials from Indian artisans to US families. A real business, not a side project.",
      tags: ["Python", "Claude API", "Autonomous Agents"],
      link: "https://github.com/",
    },
    {
      name: "Enterprise AI Prototypes",
      description:
        "Concept work exploring how LLMs and agent architectures can transform enterprise workflows — document classification, policy-aware automation, and intelligent routing systems. Architecture documentation and working prototypes.",
      tags: ["LLMs", "Agent Architecture", "Automation"],
      link: "https://github.com/",
    },
  ];

  return (
    <section id="building" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What I'm Building Now
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-success mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I started building AI agent systems in 2025. Not tutorials or demos — tools that solve problems I actually have.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
            >
              <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col">
                <CardHeader>
                  <CardTitle className="text-xl">{project.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      View on GitHub
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuildingNow;
