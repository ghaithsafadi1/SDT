import { GraduationCap, Users2, Building2, Briefcase, Globe } from "lucide-react";

const audiences = [
  {
    icon: GraduationCap,
    title: "Syrian Youth & Students",
    description: "Those seeking digital skills to qualify for the labor market and build meaningful careers.",
  },
  {
    icon: Users2,
    title: "Women in Tech",
    description: "Aspiring professionals looking to enter the technology sector safely and confidently.",
  },
  {
    icon: Building2,
    title: "Public Institutions",
    description: "Entities requiring support to build cyber resilience and protect critical infrastructure.",
  },
  {
    icon: Briefcase,
    title: "Startups & SMEs",
    description: "Small businesses facing digital threats without sufficient resources or expertise.",
  },
  {
    icon: Globe,
    title: "Diaspora Professionals",
    description: "Experts seeking a neutral and reliable way to contribute to their homeland's rebuilding.",
  },
];

const WhoWeServeSection = () => {
  return (
    <section id="serve" className="py-24 bg-background relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      
      <div className="container relative px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="gradient-text">Who We Serve</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Connecting diverse groups across Syria and the diaspora to build a stronger digital ecosystem.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {audiences.map((audience, index) => (
            <div
              key={audience.title}
              className={`group card-glow rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:scale-105 ${
                index === 4 ? 'sm:col-span-2 lg:col-span-1 lg:col-start-2' : ''
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/20 text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <audience.icon className="w-6 h-6" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {audience.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {audience.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServeSection;
