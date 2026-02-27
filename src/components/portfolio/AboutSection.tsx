import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Users, Rocket, Target } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: TrendingUp, label: "$XXXM Growth" },
    { icon: Users, label: "High-Performing Teams" },
    { icon: Rocket, label: "0→1→Scale Products" },
    { icon: Target, label: "D2C, B2B, B2B2C" },
  ];

  return (
    <section id="about" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Product Leader Who Builds</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center mb-12">
            I've spent 15+ years building and scaling products across fintech, insurtech, and enterprise financial
            services — from consumer-facing platforms to B2B infrastructure to card issuing APIs. Led{" "}
            <span className="text-primary font-semibold">$XXXM growth</span>, launched new product verticals, and built
            cross-functional teams across PM, Design, Product Analytics, and Product Operations. Built, grew, and
            retained high-performing teams across PM, Design, Analytics, & Product Operations.
          </p>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
            Now I'm building with AI. I develop agent systems that solve real problems: automating complex research
            workflows, powering e-commerce marketing for a direct-to-consumer brand, and prototyping how AI can
            transform enterprise operations. I believe product leaders who can't work directly with AI will struggle to
            lead AI-powered teams effectively. So I build.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 text-center"
            >
              <stat.icon className="w-12 h-12 mx-auto mb-3 text-primary" />
              <p className="text-sm font-medium text-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-3 mt-12"
        >
          {[
            "Product Strategy",
            "0→1→Scale",
            "P&L Ownership",
            "Team Leadership",
            "AI Agent Systems",
            "LLM Applications",
            "Fintech",
            "Enterprise Software",
            "B2B",
            "B2B2C",
            "DTC",
            "API Platforms",
          ].map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-card text-foreground border border-border rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
