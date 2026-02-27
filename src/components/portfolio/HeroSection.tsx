import { Mail, Linkedin, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-background pt-20">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mb-6"
          >
            <div className="relative inline-block">
              <div className="w-40 h-40 rounded-full p-1 border-2 border-primary overflow-hidden">
                <img
                  src="/headshot-ai-v2.png"
                  alt="Santiago Vinoth Jeyaseelan - Professional Headshot"
                  className="w-full h-full rounded-full object-cover scale-[1.6] translate-y-[30px]"
                />
              </div>
            </div>
          </motion.div>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-heading"
          >
            Santiago Vinoth Jeyaseelan
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 text-primary font-heading"
          >
            VP of Product | AI Builder | Enterprise & Consumer Products
          </motion.p>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-card border border-border rounded-2xl p-8 mb-10 max-w-4xl mx-auto"
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Product leader with <span className="text-foreground font-semibold">GM‑adjacent ownership</span> building
              and scaling D2C, B2B, and B2B2C products. Led{" "}
              <span className="text-primary font-semibold">$XXXM growth</span> and launched products and new verticals
              for fintech, insurtech, and large financial institutions.
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {["Fintechs", "Insurtechs", "Large Financial Institutions"].map((tag) => (
              <span
                key={tag}
                className="px-8 py-3 bg-card border border-border rounded-lg text-sm md:text-base font-medium text-foreground"
              >
                {tag}
              </span>
            ))}
          </motion.div>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <button
              onClick={() => scrollToSection("work")}
              className="px-10 py-5 rounded-lg font-semibold text-lg bg-primary text-primary-foreground hover:bg-primary-hover transition-colors"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-10 py-5 rounded-lg font-semibold text-lg border border-border bg-card text-foreground hover:border-primary transition-colors"
            >
              Let's Connect
            </button>
          </motion.div>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex justify-center gap-6"
          >
            <a
              href="mailto:san.vinodh@gmail.com"
              className="w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={22} className="text-foreground" />
            </a>
            <a
              href="https://www.linkedin.com/in/santiago-v-jeyaseelan/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} className="text-foreground" />
            </a>
          </motion.div>
        </div>
      </div>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5 }}
        onClick={() => scrollToSection("about")}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
        aria-label="Scroll to about section"
      >
        <ChevronDown size={40} />
      </motion.button>
    </section>
  );
};

export default HeroSection;
