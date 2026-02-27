import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const publications = [
  {
    title: "Redefining Retirement: The Impact of Fully Digitized Annuities in the Age of AI and Blockchain",
    badge: "Forbes Tech Council",
    description:
      "Exploring how digital transformation, AI, and blockchain technology are revolutionizing retirement products and making annuities accessible to a new generation of investors.",
    link: "https://www.forbes.com/councils/forbestechcouncil/2024/06/24/redefining-retirement-the-impact-of-fully-digitized-annuities-in-the-age-of-ai-and-blockchain/",
  },
];

const Publications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="publications" className="py-16 md:py-24 bg-[#111827] border-t border-[#1e293b]" ref={ref}>
      <div className="container mx-auto px-6 md:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-[2px] bg-[#3b82f6]" />
            <span className="text-[#94a3b8] text-xs tracking-[0.2em] uppercase font-sans">WRITING</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-heading">Publications & Thought Leadership</h2>
        </motion.div>

        {/* Publication cards */}
        <div className="space-y-6 max-w-4xl">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-[#1e293b] border border-[#334155] rounded-xl p-6 md:p-8 hover:border-[#3b82f6] hover:shadow-lg hover:shadow-[#3b82f6]/5 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-5">
                {/* Badge */}
                <div className="shrink-0">
                  <span className="inline-block px-4 py-2 bg-[#0f172a] border border-[#334155] rounded-lg text-[#3b82f6] text-xs font-bold tracking-wide uppercase">
                    Forbes Tech Council
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-white font-heading mb-3 leading-snug">
                    {pub.title}
                  </h3>
                  <p className="text-[#e2e8f0] text-sm md:text-[15px] leading-relaxed mb-4">
                    {pub.description}
                  </p>
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#3b82f6] text-sm font-medium hover:underline"
                  >
                    Read Article <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
