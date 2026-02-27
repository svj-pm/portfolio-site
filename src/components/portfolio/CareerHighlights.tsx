import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Quote } from "lucide-react";

const CareerHighlights = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const roles = [
    {
      company: "Gainbridge",
      role: "VP of Product",
      period: "2022 - 2025",
      achievements: [
        "Scaled Gainbridge's direct-to-consumer business from $XX million to $XXX million in 2024, and on pace to exceed $X billion in 2025",
        "Drove $XX million revenue run rate through innovative product features",
        "Built and scaled the product function of XX+ members",
      ],
      tags: ["D2C", "Insurtech", "Scale"],
    },
    {
      company: "Marqeta",
      role: "Director of Product Management",
      period: "2019 - 2022",
      achievements: [
        "Launched new product vertical with XXX million in TPV, ~XXX thousand accounts",
        "Optimized API product performance to achieve 250-500ms SLOs for key APIs and maintain 99.99% platform uptime.",
        "Established product launch playbooks for scaling customer programs",
      ],
      tags: ["B2B2C", "Fintech", "0→1→scale"],
    },
    {
      company: "Bank of the West",
      role: "Senior Consultant, Product",
      period: "2017 - 2019",
      achievements: [
        "Launched card and payments servicing features via Online/Web and Mobile banking channels, improved UX for over X million+ customers",
        "Transformed Bank of the West's entire card servicing products and features, including credit, debit, and prepaid cards across consumer, SMB, and commercial portfolios.",
        "Increased user engagement by XX% through product improvements",
      ],
      tags: ["Large FI", "Retention", "D2C"],
    },
  ];

  const testimonials = [
    {
      quote:
        "Santiago's proven execution capabilities in his role as Director of Product Management at Marqeta, Inc. were critical for the company's growth and differentiation in the marketplace.",
      author: "Jason Gardner",
      title: "Founder & Director, Marqeta, Inc.",
    },
    {
      quote:
        "As a pioneer in the annuity industry, a niche space in the insurance world, it was extremely important for Gainbridge to stay differentiated and Santiago's contributions have been instrumental in helping us do that.",
      author: "Justin Wee",
      title: "President, Gainbridge",
    },
  ];

  return (
    <section id="career" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Career Highlights</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1 bg-card border-border">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{role.company}</CardTitle>
                  <p className="text-sm font-semibold text-primary">{role.role}</p>
                  <p className="text-xs text-muted-foreground">{role.period}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-4">
                    {role.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {role.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-background text-muted-foreground rounded-lg text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-center mb-8">What Others Say</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Quote className="w-8 h-8 text-primary mb-4" />
                  <p className="text-muted-foreground italic mb-4 text-lg">"{testimonial.quote}"</p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CareerHighlights;
