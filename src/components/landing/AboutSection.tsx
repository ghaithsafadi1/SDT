import { AlertTriangle, Users, Target } from "lucide-react";

const aboutCards = [
  {
    icon: AlertTriangle,
    title: "Rising Threats",
    description: "Increasing cyber threats, digital illiteracy, and infrastructure fragility put public institutions, small businesses, and citizens at risk.",
    color: "text-red-400",
  },
  {
    icon: Users,
    title: "Untapped Talent",
    description: "A talented generation of youth and professionals—both inside Syria and in the diaspora—is ready to contribute to digital transformation.",
    color: "text-primary",
  },
  {
    icon: Target,
    title: "The Opportunity",
    description: "The Syrian Digital Trust was established to transform this challenge into a national opportunity for growth and resilience.",
    color: "text-emerald-400",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background relative">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="container relative px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="gradient-text">Why Now?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Syria is entering a critical post-conflict phase where digital transformation 
            is no longer an option but a necessity for national recovery and inclusive growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {aboutCards.map((card, index) => (
            <div
              key={card.title}
              className="group card-glow rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`inline-flex p-4 rounded-xl bg-secondary mb-6 ${card.color}`}>
                <card.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {card.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
