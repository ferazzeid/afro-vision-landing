const steps = [
  {
    title: "Spot",
    description: "Notice the friction in real life."
  },
  {
    title: "Live It",
    description: "Understand the experience from the inside."
  },
  {
    title: "Shape",
    description: "Build a tool that mirrors the real-world flow."
  },
  {
    title: "Release",
    description: "Put it where people can start using it right away."
  }
];

export const Approach = () => {
  return (
    <section className="section-padding">
      <div className="container-width">
        <h2 className="text-center mb-16">
          Our Approach
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-border"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step circle */}
              <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 font-bold text-lg">
                {index + 1}
              </div>
              
              <div className="text-center space-y-4">
                <h3 className="font-semibold text-xl">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};