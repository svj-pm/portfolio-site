import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const WorkProducts = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const products = [
    {
      name: "Gainbridge D2C Platform",
      description:
        "Revolutionary digital platform bringing retirement savings products directly to consumers through an intuitive, AI-powered experience.",
      features: [
        "End-to-end digital annuity purchasing",
        "AI-driven retirement planning tools",
        "Seamless user experience for complex financial products",
        "Efficient funnel converting thousands of high-value customers",
      ],
      tags: ["D2C", "Insurtech", "Savings", "AI"],
      link: "https://www.gainbridge.io/",
    },
    {
      name: "Marqeta Credit Card Platform",
      description:
        "Modern card issuing platform enabling businesses to create innovative credit card programs with flexible controls and real-time processing.",
      features: [
        "API-first credit card issuing infrastructure",
        "Real-time transaction processing",
        "Customizable credit card programs",
        "Advanced rewards and fraud controls",
      ],
      tags: ["B2B2C", "Payments", "Credit", "Platform"],
      link: "https://www.marqeta.com/platform/credit",
    },
  ];

  return (
    <section id="work" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Work Products</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Products I've built and scaled that are transforming industries
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
            >
              <Card className="h-full hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden group bg-card border-border">
                <div className="h-64 relative overflow-hidden bg-background">
                  <img
                    src={index === 0 ? "/gainbridge.png" : "/marqeta.png"}
                    alt={`${product.name} screenshot`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <CardHeader>
                  <CardTitle className="text-2xl">{product.name}</CardTitle>
                  <CardDescription className="text-base">{product.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-primary mr-2">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {product.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-background text-muted-foreground rounded-lg text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Button asChild className="w-full mt-4" size="lg">
                      <a
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        View Live Product
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProducts;
