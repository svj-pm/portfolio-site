import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      className="py-24 border-t border-[#1e293b]"
      style={{ background: "linear-gradient(180deg, #0f172a 0%, #111827 100%)" }}
      ref={ref}
    >
      <div className="container mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-[40px] font-bold text-white font-heading mb-6">Let's Build Together</h2>

          <p className="text-[#e2e8f0] text-base md:text-[17px] leading-relaxed max-w-[600px] mx-auto mb-8">
            I'm a product leader who builds — with teams, with strategy, and now directly with AI. If you're looking for
            someone who combines enterprise product leadership with hands-on AI fluency, let's talk.
          </p>

          <p className="text-[#94a3b8] text-sm md:text-[15px] leading-relaxed max-w-[640px] mx-auto mb-6">
            15+ years building 0→1→scale products · GM-adjacent P&L ownership · Hands-on AI agent development ·
            High-performing cross-functional teams
          </p>

          <p className="text-[#94a3b8] text-sm italic max-w-[600px] mx-auto mb-10">
            Ideal for companies building AI-powered products, enterprise platforms, or anyone who wants a product leader
            who understands what the engineering team is actually building.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:san.vinodh@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#3b82f6] text-white text-sm font-medium rounded-lg hover:bg-[#2563eb] transition-colors"
            >
              <Mail className="w-4 h-4" />
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/santiago-v-jeyaseelan/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#3b82f6] text-[#3b82f6] text-sm font-medium rounded-lg hover:bg-[#3b82f6]/10 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              Connect on LinkedIn
            </a>
            <a
              href="https://github.com/svj-pm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#3b82f6] text-[#3b82f6] text-sm font-medium rounded-lg hover:bg-[#3b82f6]/10 transition-colors"
            >
              <Github className="w-4 h-4" />
              View GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
