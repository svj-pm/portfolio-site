import { Mail, Linkedin, ChevronDown, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0F] via-[#1a1a2e] to-[#0A0A0F]">
        <div className="absolute inset-0 bg-gradient-mesh opacity-50 animate-pulse"></div>
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-glow/10 rounded-full blur-[150px]"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8, type: "spring" }} className="mb-12">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] rounded-full blur-xl opacity-60 animate-gradient-shift"></div>
              <div className="relative w-36 h-36 rounded-full bg-gradient-to-br from-primary via-accent to-primary-glow flex items-center justify-center text-5xl font-bold text-white shadow-2xl animate-float">SV</div>
            </div>
          </motion.div>
          <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }} className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-none">
            <span className="gradient-text-white">Santiago Vinoth</span><br /><span className="gradient-text-white">Jeyaseelan</span>
          </motion.h1>
          <motion.p initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 gradient-text-blue">
            VP of Product | D2C & Growth Leader
          </motion.p>
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }} className="glass rounded-2xl p-8 mb-10 max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Product leader with <span className="text-foreground font-semibold">GM‑adjacent ownership</span> building and scaling D2C, B2B, and B2B2C products. Led <span className="gradient-text-purple font-semibold">$XXXM growth</span> and launched products and new verticals for fintech, insurtech, and large financial institutions.
            </p>
          </motion.div>
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }} className="flex flex-wrap justify-center gap-4 mb-12">
            {["D2C Fintechs", "Wealthtechs", "Large Financial Institutions"].map((tag) => (
              <span key={tag} className="relative group">
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-sm opacity-50 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative px-8 py-3 glass rounded-full text-sm md:text-base font-medium text-foreground flex items-center gap-2">
                  <Sparkles size={16} className="text-accent" />{tag}
                </span>
              </span>
            ))}
          </motion.div>
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }} className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button onClick={() => scrollToSection("work")} className="relative group px-10 py-5 rounded-xl font-semibold text-lg overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-primary-glow to-primary bg-[length:200%_100%] animate-gradient-shift"></span>
              <span className="relative text-white flex items-center justify-center gap-2 group-hover:scale-105 transition-transform">View Work Products</span>
            </button>
            <button onClick={() => scrollToSection("contact")} className="relative group px-10 py-5 rounded-xl font-semibold text-lg glass hover:glass-strong transition-all">
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-20 transition-opacity rounded-xl"></span>
              <span className="relative text-foreground group-hover:text-white transition-colors">Connect with Me</span>
            </button>
          </motion.div>
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.7, duration: 0.8 }} className="flex justify-center gap-6">
            <a href="mailto:san.vinodh@gmail.com" className="relative group w-14 h-14 rounded-full glass flex items-center justify-center hover:glass-strong transition-all" aria-label="Email">
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-md"></span>
              <Mail size={22} className="relative text-foreground group-hover:text-white transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/santiago-v-jeyaseelan/" target="_blank" rel="noopener noreferrer" className="relative group w-14 h-14 rounded-full glass flex items-center justify-center hover:glass-strong transition-all" aria-label="LinkedIn">
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-md"></span>
              <Linkedin size={22} className="relative text-foreground group-hover:text-white transition-colors" />
            </a>
          </motion.div>
        </div>
      </div>
      <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.6, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5 }} onClick={() => scrollToSection("about")} className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors" aria-label="Scroll to about section">
        <ChevronDown size={40} />
      </motion.button>
    </section>
  );
};

export default HeroSection;
