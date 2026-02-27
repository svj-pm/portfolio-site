import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, CheckCircle2 } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fitPoints = [
    "Building 0→1→scale products for fintech and wealthtech",
    "Driving P&L impact with high-performing, cross-functional teams",
    "GM-adjacent product ownership with strategic thinking",
    "Proven track record in D2C, B2B, and B2B2C financial products",
  ];

  return (
    <section id="contact" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Let's Build Something Great Together
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Looking for a D2C Product Leader?
            </h3>
            <p className="text-lg text-muted-foreground text-center mb-8">
              I excel at building 0→1→scale products for fintech and wealthtech, driving P&L impact with
              high-performing teams.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {fitPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground">{point}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-background border border-border rounded-lg p-6 mb-8">
              <p className="text-center text-foreground font-medium text-lg">
                <span className="text-primary font-bold">Ideal for:</span> Companies seeking GM-adjacent product
                ownership with proven track record in D2C fintechs, wealthtechs, and enterprise financial products
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <a
                  href="mailto:san.vinodh@gmail.com"
                  className="flex items-center justify-center gap-3"
                >
                  <Mail className="w-5 h-5" />
                  Email Me
                </a>
              </Button>

              <Button asChild size="lg" variant="outline" className="text-lg px-8">
                <a
                  href="https://www.linkedin.com/in/santiago-v-jeyaseelan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3"
                >
                  <Linkedin className="w-5 h-5" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center text-muted-foreground"
          >
            <p className="text-sm">
              Email:{" "}
              <a href="mailto:san.vinodh@gmail.com" className="text-primary hover:text-primary-hover font-medium">
                san.vinodh@gmail.com
              </a>
            </p>
            <p className="text-sm mt-2">
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/santiago-v-jeyaseelan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-hover font-medium"
              >
                Santiago V Jeyaseelan
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
