import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NavigationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: "about", label: "About" },
    { id: "career", label: "Career" },
    { id: "building", label: "Building" },
    { id: "work", label: "Work" },
    { id: "publications", label: "Publications" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "glass border-b border-white/10" : "bg-transparent"}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <button onClick={() => scrollToSection("hero")} className="text-xl font-bold gradient-text-blue hover:scale-105 transition-transform">
              SVJ
            </button>
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button key={link.id} onClick={() => scrollToSection(link.id)} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group">
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
            <button className="md:hidden p-2 text-foreground hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="relative h-full flex items-center justify-center animate-fade-in">
            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link, index) => (
                <button key={link.id} onClick={() => scrollToSection(link.id)} className="text-2xl font-medium text-foreground hover:text-primary transition-colors animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavigationBar;
