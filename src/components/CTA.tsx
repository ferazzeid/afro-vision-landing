import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-width text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-white">
            We make apps for ourselves first
          </h2>
          
          <p className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed">
            Because if they work for us, they'll work for others.
          </p>
          
          <p className="text-lg text-primary-foreground/70">
            Follow our releases, try them out, and see how small software can make a big difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
              Follow Our Releases
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};