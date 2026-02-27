import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote:
      "Santiago's proven execution capabilities in his role as Director of Product Management at Marqeta, Inc. were critical for the company's growth and differentiation in the marketplace.",
    author: "Jason Gardner",
    title: "Founder & Director, Marqeta, Inc.",
  },
  {
    quote:
      "As a pioneer in the annuity industry, a niche space in the insurance world, it was extremely important for Gainbridge to stay differentiated, and Santiago's contributions have been instrumental in helping us do that.",
    author: "Justin Wee",
    title: "President, Gainbridge",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="voices" className="py-20 bg-[#111827] border-t border-[#1e293b]" ref={ref}>
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
            <span className="text-[#94a3b8] text-xs tracking-[0.2em] uppercase font-sans">VOICES</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-heading">What Others Say</h2>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.15 + index * 0.15 }}
              className="relative bg-[#1e293b] border border-[#334155] rounded-xl p-6 pt-10 hover:border-[#3b82f6] hover:shadow-lg hover:shadow-[#3b82f6]/5 transition-all duration-300"
            >
              {/* Decorative quote mark */}
              <span className="absolute top-4 left-5 text-[#3b82f6] opacity-30 font-serif leading-none select-none" style={{ fontSize: '56px' }}>
                "
              </span>

              <p className="text-[#e2e8f0] italic text-base md:text-[17px] leading-relaxed mb-5">
                "{t.quote}"
              </p>

              <div className="border-t border-[#334155] pt-4">
                <p className="font-bold text-white text-sm">{t.author}</p>
                <p className="text-xs text-[#94a3b8]">{t.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
