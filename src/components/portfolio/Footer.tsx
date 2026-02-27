import { Mail, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12" style={{ background: "#0f172a" }}>
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm mb-6" style={{ color: "#94a3b8" }}>
          Santiago Vinoth Jeyaseelan · VP of Product · AI Builder
        </p>

        <div className="flex justify-center gap-5 mb-6">
          {[
            { href: "mailto:san.vinodh@gmail.com", icon: Mail, label: "Email" },
            { href: "https://www.linkedin.com/in/santiago-v-jeyaseelan/", icon: Linkedin, label: "LinkedIn" },
            { href: "https://github.com/svj-pm", icon: Github, label: "GitHub" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel={label !== "Email" ? "noopener noreferrer" : undefined}
              className="transition-colors"
              style={{ color: "#94a3b8" }}
              aria-label={label}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#3b82f6")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <p className="text-xs" style={{ color: "#64748b" }}>
          © {new Date().getFullYear()} Santiago Vinoth Jeyaseelan
        </p>
      </div>
    </footer>
  );
};

export default Footer;
