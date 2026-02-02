import { Badge } from "@/components/ui/badge";
import { Compass, Eye, Heart } from "lucide-react";

const coreValues = [
  { name: "Neutrality", description: "Non-political and inclusive of all Syrians" },
  { name: "Empowerment", description: "Building local capacities" },
  { name: "Transparency", description: "Financial and operational openness" },
  { name: "Collaboration", description: "Global knowledge exchange" },
  { name: "Ethical Innovation", description: "Responsible technology use" },
];

const MissionSection = () => {
  return (
    <section id="mission" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container relative px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="gradient-text">Mission & Vision</span>
          </h2>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Mission */}
          <div className="card-glow rounded-2xl p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-primary/20 text-primary">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">
              "To empower Syria's digital future by connecting global cybersecurity expertise 
              with local talent, building national capacities, enhancing knowledge, and providing 
              ethical, future-oriented career paths in this field."
            </p>
          </div>

          {/* Vision */}
          <div className="card-glow rounded-2xl p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-primary/20 text-primary">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">
              "A resilient digital Syria led by trusted cybersecurity specialists who contribute 
              to secure innovation, economic renewal, and a peaceful digital future through 
              collaboration and public trust."
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Heart className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">Core Values</h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {coreValues.map((value) => (
              <div
                key={value.name}
                className="group relative"
              >
                <Badge
                  variant="outline"
                  className="px-5 py-3 text-base border-primary/40 bg-primary/10 text-foreground hover:bg-primary/20 hover:border-primary cursor-default transition-all duration-300 glow-primary-sm"
                >
                  {value.name}
                </Badge>
                
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-card border border-border rounded-lg text-sm text-muted-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                  {value.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
