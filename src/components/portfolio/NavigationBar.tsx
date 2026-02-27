import { useState, useEffect } from "react";
import { Menu, X, Github } from "lucide-react";

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
    { id: "building", label: "Building" },
    { id: "career", label: "Career" },
    { id: "work", label: "Work" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md" : "bg-background/60 backdrop-blur-sm"}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <button onClick={() => scrollToSection("hero")} className="text-base font-medium text-white font-heading hover:opacity-80 transition-opacity">
              Santiago V. Jeyaseelan
            </button>
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button key={link.id} onClick={() => scrollToSection(link.id)} className="text-sm text-muted-foreground hover:text-white transition-colors">
                  {link.label}
                </button>
              ))}
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </div>
            <button className="md:hidden p-2 text-muted-foreground hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-background/95 backdrop-blur-md" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="relative h-full flex items-center justify-center">
            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link) => (
                <button key={link.id} onClick={() => scrollToSection(link.id)} className="text-2xl font-medium text-muted-foreground hover:text-white transition-colors">
                  {link.label}
                </button>
              ))}
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-muted-foreground hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavigationBar;
