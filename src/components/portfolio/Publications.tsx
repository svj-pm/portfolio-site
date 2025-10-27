import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Publications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const publications = [
    {
      title: "Redefining Retirement: The Impact of Fully Digitized Annuities in the Age of AI and Blockchain",
      publication: "Forbes Tech Council",
      date: "June 2024",
      excerpt:
        "Exploring how digital transformation, AI, and blockchain technology are revolutionizing retirement products and making annuities accessible to a new generation of investors.",
      link: "https://www.forbes.com/councils/forbestechcouncil/2024/06/24/redefining-retirement-the-impact-of-fully-digitized-annuities-in-the-age-of-ai-and-blockchain/",
      gradient: "from-primary to-accent",
    },
    {
      title: "Wealth Creation Could Be the Next Big Thing",
      publication: "Truptinatu Substack",
      date: "2024",
      excerpt:
        "An in-depth analysis of emerging trends in wealth creation, exploring how technology and innovative financial products are democratizing wealth building opportunities.",
      link: "https://truptinatu.substack.com/p/wealth-creation-could-be-the-next",
      gradient: "from-accent to-success",
    },
    {
      title: "Why Niche Financial Services Could Be The Next Embedded Finance Trend",
      publication: "Forbes Tech Council",
      date: "May 2023",
      excerpt:
        "Examining how specialized financial services are emerging as the next wave of embedded finance, enabling businesses to offer tailored solutions to niche markets and underserved segments.",
      link: "https://www.forbes.com/councils/forbestechcouncil/2023/05/31/why-niche-financial-services-could-be-the-next-embedded-finance-trend/",
      gradient: "from-success to-primary",
    },
  ];

  return (
    <section id="publications" className="py-20 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Publications & Thought Leadership
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-success mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Sharing insights on product strategy, fintech innovation, and the future of financial services
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="max-w-6xl mx-auto"
        >
          <CarouselContent>
            {publications.map((pub, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                  className="h-full"
                >
                  <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-2 overflow-hidden group">
                    {/* Gradient Thumbnail */}
                    <div className={`h-40 bg-gradient-to-br ${pub.gradient} relative overflow-hidden`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <FileText className="w-16 h-16 text-white/20 group-hover:scale-110 transition-transform" />
                      </div>
                      <div className="absolute top-4 right-4">
                        <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                          <p className="text-xs font-semibold text-foreground">{pub.date}</p>
                        </div>
                      </div>
                    </div>

                    <CardHeader>
                      <div className="text-sm font-semibold text-primary mb-2">
                        {pub.publication}
                      </div>
                      <CardTitle className="text-xl leading-tight">
                        {pub.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {pub.excerpt}
                      </p>

                      <Button
                        asChild
                        variant="outline"
                        className="w-full"
                        size="lg"
                      >
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          Read Article
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Publications;
