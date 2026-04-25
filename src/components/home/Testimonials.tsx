import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, PlayCircle } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";

const testimonials = [
  {
    name: "Samuel Adeyemi",
    role: "AI Developer",
    company: "Tech Solutions Ltd",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content: "Nexith AI transformed my career. The practical approach to teaching AI concepts helped me land my dream job as an AI developer.",
    rating: 5,
    videoThumbnail: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=450&fit=crop",
    videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1" 
  },
  {
    name: "Aisha Mohammed",
    role: "Data Scientist",
    company: "FinTech Corp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    content: "The machine learning course was exceptional. I went from knowing nothing about ML to building production-ready models in just 8 weeks.",
    rating: 5,
    videoThumbnail: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=450&fit=crop",
    videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1"
  },
  {
    name: "Emmanuel Okonkwo",
    role: "ML Engineer",
    company: "StartupHub",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    content: "The instructors are world-class and the community support is amazing. I highly recommend Nexith AI to anyone serious about AI.",
    rating: 5,
  },
  {
    name: "Grace Obi",
    role: "Product Manager",
    company: "InnovateTech",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content: "Even as a non-technical person, I found the AI for Business course incredibly valuable. It helped me understand how to leverage AI in my role.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Student <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from our graduates who have transformed their careers with AI skills. Watch their journeys below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-hover bg-card border-border/50 overflow-hidden">
              <CardContent className="p-0">
                {/* Video Section if available */}
                {testimonial.videoUrl && testimonial.videoThumbnail && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="relative w-full aspect-video group cursor-pointer overflow-hidden bg-muted">
                        <img 
                          src={testimonial.videoThumbnail} 
                          alt={`Video from ${testimonial.name}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 group-hover:bg-black/50">
                          <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <PlayCircle className="w-8 h-8 text-primary-foreground fill-primary-foreground" />
                          </div>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black border-none [&>button]:text-white">
                      <DialogTitle className="sr-only">Success Story Video</DialogTitle>
                      <div className="w-full aspect-video">
                        <iframe 
                          src={testimonial.videoUrl} 
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                          allowFullScreen
                        ></iframe>
                      </div>
                    </DialogContent>
                  </Dialog>
                )}
                
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    {!testimonial.videoUrl && <Quote className="h-8 w-8 text-primary/30 flex-shrink-0" />}
                    <div className="space-y-4 w-full">
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <p className="text-muted-foreground italic">
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center gap-3 pt-2">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                        />
                        <div>
                          <div className="font-semibold text-foreground">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {testimonial.role} at <span className="text-primary/80 font-medium">{testimonial.company}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
