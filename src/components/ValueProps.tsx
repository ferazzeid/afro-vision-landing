const values = [
  {
    title: "Human-First",
    description: "Designed to match real experiences, not assumptions."
  },
  {
    title: "Focused Scope",
    description: "One problem, one audience, one clear outcome."
  },
  {
    title: "Platform-Native",
    description: "Delivered where people already spend their time."
  },
  {
    title: "Built for Adoption",
    description: "Minimal friction, maximum usefulness."
  }
];

export const ValueProps = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-width">
        <h2 className="text-center mb-16">
          Our Value Propositions
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold text-xl">
                  {index + 1}
                </span>
              </div>
              
              <h3 className="font-semibold">
                {value.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};