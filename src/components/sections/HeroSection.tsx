
import { Card, CardContent } from '@/components/ui/card';

export const HeroSection = () => {
  return (
    <section className="px-4 py-8 text-center mt-16 animate-fade-in bg-background">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4 animate-scale-in">
          Stock Market Foundation Program
        </h1>
        <h2 className="text-lg md:text-2xl text-primary/80 mb-8 animate-fade-in delay-200">
          A Complete Course on the Stock Market
        </h2>
        
        {/* Hero Image */}
        <div className="mb-8 flex justify-center">
          <img 
            src="/lovable-uploads/fc953a32-347e-4939-a68a-5857c9ed0de0.png" 
            alt="Stock Market Foundation Program" 
            className="max-w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-500 hover:shadow-2xl"
          />
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { value: "100+", label: "Pre-recorded Sessions" },
            { value: "75+", label: "Hours of Content" },
            { value: "20+", label: "Comprehensive Modules" },
            { value: "1 Year", label: "Course Validity" }
          ].map((stat, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-all duration-300 hover:scale-105 transform hover:bg-accent group">
              <CardContent className="p-4 text-center">
                <div className="text-xl md:text-2xl font-bold text-primary group-hover:text-primary/90 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-base md:text-lg text-primary mb-8 font-semibold animate-pulse">
          Language: Hindi
        </div>
      </div>
    </section>
  );
};
