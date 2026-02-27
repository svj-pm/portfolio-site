import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const BuildingNow = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      icon: "🔍",
      name: "Job Interview Intelligence Agent",
      description:
        "Ingests 15-30 research documents and generates targeted interview preparation materials in under 30 minutes. Includes interactive gap analysis, cost-optimized API usage, and role-agnostic architecture.",
      tags: ["Python", "Claude API", "Document AI"],
      link: "https://github.com/svj-pm/interview-prep-agent",
    },
    {
      icon: "🛍️",
      name: "E-Commerce Marketing Agents",
      description:
        "Autonomous agent framework for content generation, audience targeting, and campaign optimization. Powering a real D2C brand bringing cotton essentials from Indian artisans to US families.",
      tags: ["Python", "Agent Architecture", "E-Commerce"],
      link: "https://github.com/svj-pm/ecomm-marketing-agents",
    },
    {
      icon: "🏢",
      name: "Enterprise AI Prototypes",
      description:
        "Exploring how LLMs and agent architectures transform enterprise workflows — document classification, policy-aware routing, and intelligent triage systems.",
      tags: ["Python", "Claude API", "Enterprise AI"],
      comingSoon: true,
    },
  ];

  return (
    <section id="building" className="py-16 md:py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-3">What I'm Building Now</h2>
          <p className="text-lg text-[#94a3b8]">AI agent systems that solve problems I actually have.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
              className="bg-[#1e293b] border border-[#334155] rounded-xl p-6 hover:border-[#3b82f6] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <span className="text-2xl mb-3">{project.icon}</span>
              <h3 className="text-lg font-bold text-foreground mb-2">{project.name}</h3>
              <p className="text-sm text-[#e2e8f0] mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 bg-[#334155] text-[#94a3b8] rounded-full text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              {project.comingSoon ? (
                <span className="text-sm text-[#94a3b8] opacity-50">Coming Soon</span>
              ) : (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#3b82f6] hover:underline"
                >
                  View on GitHub →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuildingNow;
