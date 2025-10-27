import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Users, Rocket, Target } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: TrendingUp, label: "$XXXM Growth", color: "text-accent" },
    { icon: Users, label: "High-Performing Teams", color: "text-primary" },
    { icon: Rocket, label: "0→1→Scale Products", color: "text-success" },
    { icon: Target, label: "D2C, B2B, B2B2C", color: "text-accent" },
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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Product Builder & Strategic Leader
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-success mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center mb-12">
            Product leader with GM‑adjacent ownership building and scaling D2C, B2B, and B2B2C products.
            Led <span className="text-accent font-semibold">$XXXM growth</span> and launched products and
            new verticals for fintech, insurtech, and large financial institutions. Built, grew, and retained
            high-performing teams across PM, Design, Analytics, & Product Operations.
          </p>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
            Skilled in building <span className="text-primary font-semibold">0→1→scale products and platforms</span>,
            setting clear strategies, conducting disciplined experiments, and driving{" "}
            <span className="text-success font-semibold">P&L impact</span> at startups, scale-ups, and large
            traditional organizations.
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
              className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              <stat.icon className={`w-12 h-12 mx-auto mb-3 ${stat.color}`} />
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
            "0→1 Products",
            "Scale & Growth",
            "P&L Ownership",
            "Team Leadership",
            "Fintech",
            "Insurtech",
            "D2C",
            "B2B2C",
            "Analytics",
            "Product Operations",
          ].map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
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
