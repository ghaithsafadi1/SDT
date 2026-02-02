import { Shield, Mail, ArrowUp } from "lucide-react";
import sdtLogo from "@/assets/logonoback.png";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const quickLinks = [
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Mission",
      href: "#mission",
    },
    {
      name: "Who We Serve",
      href: "#serve",
    },
    {
      name: "Programs",
      href: "#programs",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container px-4 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                alt="Syrian Digital Trust"
                className="w-12 h-12 object-contain"
                src={sdtLogo}
              />
              <div>
                <h3 className="font-bold text-foreground">
                  Syrian Digital Trust
                </h3>
                <p className="text-sm text-muted-foreground">Foundation</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              An international, non-profit, non-political, and volunteer-driven
              organization dedicated to empowering Syria's digital future.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm w-fit"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              Get in Touch
            </h4>
            <a
              href="mailto:info@syriadigitaltrust.org"
              className="text-primary hover:underline text-sm block"
            >
              info@syriadigitaltrust.org
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Syrian Digital Trust Foundation. All
            rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
