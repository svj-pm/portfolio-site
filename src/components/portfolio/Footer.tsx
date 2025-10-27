import { Mail, Linkedin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { id: "about", label: "About" },
    { id: "career", label: "Career Highlights" },
    { id: "work", label: "Work Products" },
    { id: "publications", label: "Publications" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <footer className="relative border-t border-white/10 py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card to-background"></div>
      
      {/* Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text-blue mb-3">
              Santiago Vinoth Jeyaseelan
            </h3>
            <p className="text-muted-foreground">
              VP of Product | D2C Product Leader
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-6 text-lg">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left group relative w-fit"
                >
                  <span className="relative">
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-6 text-lg">Connect</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="mailto:san.vinodh@gmail.com"
                className="relative group w-12 h-12 rounded-full glass flex items-center justify-center hover:glass-strong transition-all"
                aria-label="Email"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-md"></span>
                <Mail size={20} className="relative text-foreground group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/santiago-v-jeyaseelan/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group w-12 h-12 rounded-full glass flex items-center justify-center hover:glass-strong transition-all"
                aria-label="LinkedIn"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-md"></span>
                <Linkedin size={20} className="relative text-foreground group-hover:text-white transition-colors" />
              </a>
            </div>
            <a 
              href="mailto:san.vinodh@gmail.com"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              san.vinodh@gmail.com
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Santiago Vinoth Jeyaseelan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
