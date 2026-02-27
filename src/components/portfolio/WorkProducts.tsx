import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    name: "Gainbridge Consumer Platform",
    description:
      "Digital platform that brought retirement savings products directly to consumers. End-to-end digital annuity purchasing, AI-powered tools, and an optimized funnel converting thousands of high-value customers.",
    tags: ["D2C", "Insurtech", "Savings", "AI"],
    link: "https://www.gainbridge.io/",
    image: "/gainbridge.png",
  },
  {
    name: "Marqeta Credit Card Platform",
    description:
      "Modern card issuing platform enabling businesses to create innovative credit card programs. API-first infrastructure with real-time transaction processing, customizable programs, and advanced rewards and fraud controls.",
    tags: ["B2B2C", "Payments", "Credit", "Platform"],
    link: "https://www.marqeta.com/platform/credit",
    image: "/marqeta.png",
  },
];

const WorkProducts = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-20 bg-[#111827] border-t border-[#1e293b]" ref={ref}>
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
            <span className="text-[#94a3b8] text-xs tracking-[0.2em] uppercase font-sans">WORK</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-heading">Products I've Built</h2>
        </motion.div>

        {/* Product cards */}
        <div className="space-y-10 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.15 + index * 0.15 }}
              className="bg-[#1e293b] border border-[#334155] rounded-xl overflow-hidden hover:border-[#3b82f6] hover:shadow-lg hover:shadow-[#3b82f6]/5 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image side */}
                <div className="md:w-[55%] p-5">
                  <div className="rounded-lg overflow-hidden border border-[#334155] shadow-lg">
                    {/* Browser frame bar */}
                    <div className="bg-[#0f172a] px-4 py-2.5 flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/60" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#eab308]/60" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]/60" />
                      </div>
                      <div className="flex-1 ml-3">
                        <div className="bg-[#1e293b] rounded-md px-3 py-1 text-[10px] text-[#64748b] truncate max-w-[200px]">
                          {product.link.replace("https://", "")}
                        </div>
                      </div>
                    </div>
                    <img
                      src={product.image}
                      alt={`${product.name} screenshot`}
                      className="w-full h-auto object-cover object-top"
                    />
                  </div>
                </div>

                {/* Text side */}
                <div className="md:w-[45%] p-6 md:py-8 md:pr-8 md:pl-2 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-white font-heading mb-3">{product.name}</h3>
                  <p className="text-[#e2e8f0] text-sm md:text-[15px] leading-relaxed mb-5">
                    {product.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {product.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[#334155] text-[#94a3b8] text-xs rounded-full border border-transparent hover:border-[#3b82f6] transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#3b82f6] text-sm font-medium hover:underline"
                  >
                    View Live Product <ArrowUpRight className="w-4 h-4" />
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

export default WorkProducts;
