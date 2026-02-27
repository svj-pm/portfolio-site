import { Mail, Linkedin, Github, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="h-screen relative bg-background">
      <div className="container mx-auto px-6 md:px-8 pt-[30vh]">
        {/* Category label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-10 h-[2px] bg-[#3b82f6]" />
          <span className="text-[#94a3b8] text-xs tracking-[0.2em] uppercase font-sans">
            VP OF PRODUCT
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold text-white font-heading mb-4"
        >
          Santiago Vinoth Jeyaseelan
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="text-xl md:text-2xl text-[#94a3b8] mb-8"
        >
          AI Builder. Enterprise & Consumer Products.
        </motion.p>

        {/* Positioning text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="text-base md:text-lg text-[#e2e8f0] leading-relaxed max-w-[600px] mb-10"
        >
          I build AI agent systems that solve real problems — not demos. 15+ years leading product at Gainbridge, Marqeta, and Bank of the West. Now building directly with AI because product leaders who can't work with the technology will struggle to lead teams that build with it.
        </motion.p>

        {/* Icon links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="flex items-center gap-5"
        >
          <a
            href="https://www.linkedin.com/in/santiago-v-jeyaseelan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#94a3b8] hover:text-[#3b82f6] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#94a3b8] hover:text-[#3b82f6] transition-colors"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href="mailto:san.vinodh@gmail.com"
            className="text-[#94a3b8] hover:text-[#3b82f6] transition-colors"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.6 },
          y: { delay: 1, duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
        onClick={() => scrollToSection("about")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#94a3b8] hover:text-[#3b82f6] transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </motion.button>
    </section>
  );
};

export default HeroSection;
