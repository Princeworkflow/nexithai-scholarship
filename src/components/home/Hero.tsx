import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-primary opacity-10" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6 animate-fade-in">
            <Sparkles className="h-4 w-4" />
            Empowering the Future with AI
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
            Master <span className="gradient-text">Artificial Intelligence</span> for Tomorrow's World
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Join Nexith AI and gain the skills to thrive in a technology-driven future. Our comprehensive programs prepare you for careers in AI, machine learning, and data science.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button asChild size="lg" className="gradient-primary hover:opacity-90 text-lg px-8">
              <a href="https://scholarship.nexithai.com" target="_blank" rel="noopener noreferrer">
                Apply for Scholarship
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-12 mt-16 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <div className="text-center p-3 md:p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="text-2xl md:text-4xl font-bold gradient-text">1,000+</div>
              <div className="text-muted-foreground text-xs md:text-sm mt-1">Students Trained</div>
            </div>
            <div className="text-center p-3 md:p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="text-2xl md:text-4xl font-bold gradient-text"><div className="text-2xl md:text-4xl font-bold gradient-text">6+</div></div>
              <div className="text-muted-foreground text-xs md:text-sm mt-1">Expert-Led Programs</div>
            </div>
            <div className="text-center p-3 md:p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="text-2xl md:text-4xl font-bold gradient-text">95%</div>
              <div className="text-muted-foreground text-xs md:text-sm mt-1">Completion Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
