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
    <footer className="border-t border-border py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-3">
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
                  className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  {link.label}
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
                className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center hover:border-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} className="text-foreground" />
              </a>
              <a
                href="https://www.linkedin.com/in/santiago-v-jeyaseelan/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center hover:border-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-foreground" />
              </a>
            </div>
            <a 
              href="mailto:san.vinodh@gmail.com"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              san.vinodh@gmail.com
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Santiago Vinoth Jeyaseelan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
