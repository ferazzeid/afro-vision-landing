import { Hero } from "@/components/Hero";
import { ValueProps } from "@/components/ValueProps";
import { Approach } from "@/components/Approach";
import { CTA } from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ValueProps />
      <Approach />
      <CTA />
    </div>
  );
};

export default Index;
