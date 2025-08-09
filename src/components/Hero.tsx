import { AfroLogo } from "./AfroLogo";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container-width text-center">
        <div className="flex justify-center mb-8">
          <AfroLogo size={160} className="animate-pulse" />
        </div>
        
        <h1 className="mb-6 max-w-4xl mx-auto">
          We build apps for{" "}
          <span className="text-gradient">real humans</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          We don't build for hypothetical users. Every app we make starts with a real human frustration we've lived through or observed up close.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-6">
            See Our Work
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6">
            Our Approach
          </Button>
        </div>
      </div>
    </section>
  );
};