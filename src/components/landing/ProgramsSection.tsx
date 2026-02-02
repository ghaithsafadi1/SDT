import { Award, Network, Shield } from "lucide-react";

const programs = [
  {
    icon: Award,
    title: "Individual Empowerment",
    subtitle: "Training & Certifications",
    features: [
      "Digital literacy programs",
      "Cyber hygiene education",
      "Professional certifications",
      "Skills development",
    ],
  },
  {
    icon: Network,
    title: "Talent Networking",
    subtitle: "Mentorship & Employment",
    features: [
      "Global community forums",
      "Expert mentorship programs",
      "Remote work opportunities",
      "Career pathway guidance",
    ],
  },
  {
    icon: Shield,
    title: "Institutional Strengthening",
    subtitle: "Cyber Capability Support",
    features: [
      "Security assessments",
      "Capacity building",
      "Policy development",
      "Critical infrastructure protection",
    ],
  },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Connecting lines decoration */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden lg:block" />
      
      <div className="container relative px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="gradient-text">Programs & Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Our strategic goals focus on empowerment, connection, and building resilient institutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className="relative group"
            >
              {/* Glow background */}
              <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative card-glow rounded-2xl p-8 h-full flex flex-col">
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary glow-primary-sm">
                    <program.icon className="w-8 h-8" />
                  </div>
                </div>

                {/* Title */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-primary font-medium">{program.subtitle}</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 flex-1">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Number indicator */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center text-sm font-bold text-primary/50">
                  {index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
