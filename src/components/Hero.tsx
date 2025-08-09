import { AfroLogo } from "./AfroLogo";

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
      </div>
    </section>
  );
};