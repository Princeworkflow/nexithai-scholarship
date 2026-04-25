import { 
  GraduationCap, 
  Users, 
  Laptop, 
  Award, 
  Clock, 
  HeadphonesIcon 
} from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Expert Instructors",
    description: "Learn from industry professionals with real-world AI experience",
  },
  {
    icon: Laptop,
    title: "Hands-on Projects",
    description: "Build real AI applications and create a portfolio to showcase your skills",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Join a vibrant community of learners and AI enthusiasts",
  },
  {
    icon: Award,
    title: "Certification",
    description: "Earn recognized certificates upon completion of each program",
  },
  {
    icon: Clock,
    title: "Flexible Learning",
    description: "Study at your own pace with 24/7 access to course materials",
  },
  {
    icon: HeadphonesIcon,
    title: "Career Support",
    description: "Get guidance on job placement and career development in AI",
  },
];

const Features = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose <span className="gradient-text">Nexith AI</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive AI education with the tools and support you need to succeed in the tech industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-2xl card-hover bg-card border border-border/50"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl gradient-primary mb-4">
                <feature.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
