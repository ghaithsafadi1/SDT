import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Globe, Heart } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const EMAIL = "info@syriadigitaltrust.org";
const SUBJECT = "I want to get involved with Syrian Digital Trust";

const emailOptions = [
  {
    name: "Gmail",
    url: `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${encodeURIComponent(SUBJECT)}`,
  },
  {
    name: "Outlook",
    url: `https://outlook.live.com/mail/0/deeplink/compose?to=${EMAIL}&subject=${encodeURIComponent(SUBJECT)}`,
  },
  {
    name: "Yahoo Mail",
    url: `https://compose.mail.yahoo.com/?to=${EMAIL}&subject=${encodeURIComponent(SUBJECT)}`,
  },
  {
    name: "Default Email App",
    url: `mailto:${EMAIL}?subject=${encodeURIComponent(SUBJECT)}`,
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-radial-glow opacity-50" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      <div className="container relative px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex p-4 rounded-2xl bg-primary/20 text-primary mb-8 glow-primary animate-pulse-glow">
            <Heart className="w-10 h-10" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Join Us in Building </span>
            <span className="gradient-text text-glow">Digital Syria</span>
          </h2>

          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Whether you're a cybersecurity expert, a student eager to learn, or an organization 
            looking to strengthen your digital defenses—there's a place for you in our mission.
          </p>

          {/* CTA Button */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                size="lg"
                className="glow-primary-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-7 text-lg rounded-full transition-all duration-300 hover:scale-105 mb-12"
              >
                <Mail className="mr-2 h-6 w-6" />
                Get Involved Today
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              {emailOptions.map((option) => (
                <DropdownMenuItem key={option.name} asChild>
                  <a href={option.url} target={option.name !== "Default Email App" ? "_blank" : undefined} rel="noopener noreferrer">
                    {option.name}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Organization details */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge
              variant="outline"
              className="px-4 py-2 border-border bg-secondary/50 text-muted-foreground"
            >
              <Globe className="w-4 h-4 mr-2" />
              International Organization
            </Badge>
            <Badge
              variant="outline"
              className="px-4 py-2 border-border bg-secondary/50 text-muted-foreground"
            >
              Non-profit
            </Badge>
            <Badge
              variant="outline"
              className="px-4 py-2 border-border bg-secondary/50 text-muted-foreground"
            >
              Volunteer-based
            </Badge>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-primary/30 text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/10 transition-all duration-300 glow-primary-sm"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/syria-digital-trust/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-primary/30 text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/10 transition-all duration-300 glow-primary-sm"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/share/1Db2h17A3B/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-primary/30 text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/10 transition-all duration-300 glow-primary-sm"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
