import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import sdtLogo from "../../assets/logonoback.png";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "About Us",
      href: "#about",
    },
    {
      name: "Programs",
      href: "#programs",
    },
    {
      name: "Contact Us",
      href: "#contact",
    },
  ];
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg" : "bg-transparent"}`}
    >
      <div className="container px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="flex items-center gap-3"
          >
            <img
              alt="Syrian Digital Trust"
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
              src={sdtLogo}
            />
            <span className="font-bold text-foreground text-sm md:text-base hidden sm:block"></span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-2 text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-primary/10"
              >
                {link.name}
              </button>
            ))}
            <Button
              asChild
              size="sm"
              className="ml-4 glow-primary-sm bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6"
            >
              <a href="mailto:info@syriadigitaltrust.org">Get Involved</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="px-4 py-3 text-left text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors rounded-lg"
                >
                  {link.name}
                </button>
              ))}
              <Button
                asChild
                className="mt-2 glow-primary-sm bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
              >
                <a href="mailto:info@syriadigitaltrust.org">Get Involved</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
