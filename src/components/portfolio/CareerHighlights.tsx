import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const roles = [
  {
    company: "Gainbridge",
    logo: "/gainbridge.png",
    role: "VP of Product",
    period: "2022 - 2025",
    description:
      "Led product strategy and execution for the D2C & B2B2C platforms. Drove ~$X billion annual (2025) investment volume, a 30x increase in under 3 years. Built and scaled a high-performing team of XX+ members across PM, Design, Product Analytics, and Product Operations.",
    tags: ["D2C", "Insurtech", "Scale"],
  },
  {
    company: "Marqeta",
    logo: "/marqeta.png",
    role: "Director of Product Management",
    period: "2019 - 2022",
    description:
      "Launched a new product vertical generating $XX billion in annual TPV. Optimized API performance to four-9 uptime with sub-500ms latency. Established product launch playbooks for scaling custom programs across the platform.",
    tags: ["B2B2C", "Fintech", "0→1→Scale"],
  },
  {
    company: "Bank of the West",
    logo: null,
    role: "Senior Consultant, Product",
    period: "2017 - 2019",
    description:
      "Launched card and payments servicing features across online and mobile channels, improving UX for over 1.5M customers. Transformed the entire card servicing portfolio across consumer, SMB and commercial products. Increased user engagement by XX%.",
    tags: ["Enterprise FI", "Payments", "D2C"],
  },
  {
    company: "JP Morgan Chase",
    logo: null,
    role: "Consultant, Product",
    period: "2012 - 2016",
    description:
      "Managed Global Treasury and Liquidity products, optimizing cash management rails like ACH, Wires, and SWIFT for enterprise clients. Streamlined settlement efficiency and liquidity reporting across complex multi-currency accounts.",
    tags: ["Large FI", "Payments", "B2B"],
  },
];


const CareerHighlights = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="career" className="py-16 md:py-24 bg-[#111827] border-t border-[#1e293b]" ref={ref}>
      <div className="container mx-auto px-6 md:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-[2px] bg-[#3b82f6]" />
            <span className="text-[#94a3b8] text-xs tracking-[0.2em] uppercase font-sans">
              CAREER HIGHLIGHTS
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-heading">Where I've Built</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — hidden on mobile */}
          <div className="hidden md:block absolute left-[19px] top-0 bottom-0 w-px bg-[#334155]" />

          <div className="space-y-8 md:space-y-10">
            {roles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.15 + index * 0.12 }}
                className="relative md:pl-14"
              >
                {/* Timeline dot — hidden on mobile */}
                <div className="hidden md:block absolute left-[14px] top-7 w-[11px] h-[11px] rounded-full bg-[#3b82f6] border-2 border-[#111827]" />

                {/* Card */}
                <div className="bg-[#1e293b] border border-[#334155] rounded-xl p-6 hover:border-[#3b82f6] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#3b82f6]/5 transition-all duration-300">
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-white font-heading">{role.company}</h3>
                    <p className="text-sm text-[#94a3b8]">{role.role}</p>
                    <p className="text-xs text-[#94a3b8] mt-0.5">{role.period}</p>
                  </div>

                  <p className="text-[#e2e8f0] text-sm md:text-[15px] leading-relaxed mb-4">
                    {role.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {role.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[#334155] text-[#94a3b8] text-xs rounded-full border border-transparent hover:border-[#3b82f6] transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CareerHighlights;
