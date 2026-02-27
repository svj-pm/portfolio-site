import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Github, Mail } from "lucide-react";

const skills = [
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
  "D2C",
  "API Platforms",
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-16 md:py-24 bg-[#111827] border-t border-[#1e293b]" ref={ref}>
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center md:items-start">
          {/* Left column — photo + social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center md:w-[40%] shrink-0"
          >
            <div className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden border-2 border-[#334155]">
              <img src="/headshot-ai-v2.png" alt="Santiago Vinoth Jeyaseelan" className="w-full h-full object-cover" />
            </div>
            <div className="flex items-center gap-5 mt-6">
              <a
                href="https://www.linkedin.com/in/santiago-v-jeyaseelan/"
                target="_blank"
                rel="noopener noreferrer"
                className="!text-[#94a3b8] hover:!text-[#3b82f6] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://github.com/svj-pm"
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
            </div>
          </motion.div>

          {/* Right column — text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="md:w-[60%]"
          >
            {/* Label */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-[2px] bg-[#3b82f6]" />
              <span className="text-[#94a3b8] text-xs tracking-[0.2em] uppercase font-sans">ABOUT</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-6">Product Leader Who Builds</h2>

            <p className="text-[#e2e8f0] text-base md:text-lg leading-relaxed mb-5">
              I have spent 15+ years building and scaling products across fintech, insurtech, and enterprise financial
              services — from consumer-facing platforms to B2B infrastructure to card issuing APIs. Led{" "}
              <span className="text-[#3b82f6] font-semibold">$XXXM in growth</span>, launched new product verticals, and
              built cross-functional teams across PM, Design, Product Analytics, and Product Operations.
            </p>

            <p className="text-[#e2e8f0] text-base md:text-lg leading-relaxed mb-8">
              Now I am building with AI. I develop agent systems that solve real-world problems: automating complex
              research workflows, powering e-commerce marketing for a direct-to-consumer brand, and prototyping how AI
              can transform enterprise operations. I believe product leaders who cannot work directly with AI will
              struggle to lead AI-powered teams effectively.
            </p>

            {/* Skill tags */}
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-[#334155] text-[#94a3b8] text-sm rounded-full border border-transparent hover:border-[#3b82f6] transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
