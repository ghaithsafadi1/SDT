import { Button } from "@/components/ui/button";
import { Mail, Shield } from "lucide-react";
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

const HeroSection = () => {
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      
      {/* Radial glow effect */}
      <div className="absolute inset-0 bg-radial-glow" />
      
      {/* Animated particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => <div key={i} className="absolute w-1 h-1 bg-primary rounded-full opacity-30 animate-pulse" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${2 + Math.random() * 3}s`
      }} />)}
      </div>

      <div className="container relative z-10 px-4 py-20">
        <div className="items-center text-center space-y-8 flex flex-col">
          {/* Logo */}
          <div className="relative animate-float">
            <div className="absolute inset-0 blur-2xl bg-primary/30 rounded-full scale-150" />
            <div className="relative backdrop-blur-sm rounded-full p-4 bg-[#ebfeeb]">
              <img alt="Syrian Digital Trust Logo" className="relative w-36 h-36 md:w-48 md:h-48 object-contain drop-shadow-2xl" src="/lovable-uploads/241d0291-f827-4364-b110-841e3a076999.png" />
            </div>
          </div>

          {/* Main heading */}
          <div className="space-y-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-foreground">Building a </span>
              <span className="gradient-text text-glow">Resilient Digital Syria</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Empowering Syria's digital future by connecting global cybersecurity expertise 
              with local talent, building national capacities, and providing ethical career paths.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="lg" className="glow-primary animate-pulse-glow bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105">
                  <Mail className="mr-2 h-5 w-5" />
                  Get Involved
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
            
            <Button variant="outline" size="lg" className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary px-8 py-6 text-lg rounded-full transition-all duration-300" onClick={() => document.getElementById('mission')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              <Shield className="mr-2 h-5 w-5" />
              Learn More
            </Button>
          </div>

          {/* Badge */}
          <div className="flex items-center gap-2 pt-8">
            <div className="px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-sm text-muted-foreground">
              Non-profit • Non-political • Volunteer-based
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-2.5 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>;
};
export default HeroSection;