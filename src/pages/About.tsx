import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Users, Award, Globe } from "lucide-react";
import emmanuelImage from "@/assets/emmanuel-jokotoye.jpg";
import miracleImage from "@/assets/miracle-pepple.jpg";
import zainabImage from "@/assets/zainab-jimoh.jpg";

const values = [
  {
    icon: Heart,
    title: "Passion for Learning",
    description: "We believe in fostering a love for continuous learning and growth.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "Building a supportive community where everyone can thrive together.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to delivering the highest quality education and support.",
  },
  {
    icon: Globe,
    title: "Accessibility",
    description: "Making AI education accessible to everyone, regardless of background.",
  },
];

const team = [
  {
    name: "Jokotoye Emmanuel",
    role: "Founder & Lead Instructor",
    image: emmanuelImage,
    bio: "AI Consultant and Educator with 5+ years of experience.",
  },
  {
    name: "Miracle Pepple Tanumodein",
    role: "Head of Education",
    image: miracleImage,
    bio: "Former EdTech lead with expertise in curriculum design and learning outcomes. Driving student success and educational excellence.",
  },
  {
    name: "Zainab Jimoh",
    role: "Community & Social Media Manager",
    image: zainabImage,
    bio: "Digital marketing strategist with a track record of building engaged online communities. Amplifying brand voice and driving user growth across platforms.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="gradient-text">Nexith AI</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We are on a mission to democratize AI education and empower the next generation of innovators across Africa and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-hover bg-card border-border/50">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl gradient-primary">
                    <Target className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
                </div>
                <p className="text-muted-foreground">
                  To provide accessible, high-quality AI education that empowers individuals to build innovative solutions, advance their careers, and contribute to the global AI ecosystem. We believe everyone deserves the opportunity to understand and leverage artificial intelligence.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover bg-card border-border/50">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl gradient-primary">
                    <Eye className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
                </div>
                <p className="text-muted-foreground">
                  A world where AI literacy is universal, and everyone has the skills to participate in and shape the future of technology. We envision Africa becoming a leading hub for AI innovation and talent development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
              <span className="gradient-text">Democratizing the Future</span>
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-lg">
                I am an AI expert. For years, I watched a dangerous gap grow across Africa.
              </p>
              <p>
                Big companies were using AI to build wealth, but millions of young people were being left behind. They believed AI was too hard, too expensive, or "only for computer geniuses."
              </p>
              <p className="text-foreground font-medium">
                I realized that the rules had changed.
              </p>
              <p>
                AI is no longer just for coders. It is for everyone. In today's world, if you cannot use AI, you cannot compete. Whether you are an entrepreneur, a creative, or a student, AI is the new literacy.
              </p>
              <p className="text-foreground font-medium">
                That is why I built Nexith AI Academy.
              </p>
              <p>
                Our mission is to make world-class AI education accessible to all. We don't just teach coding. We teach everything AI—from building apps and automating businesses to creating professional content. We stripped away the complexity to create a practical curriculum that anyone can master.
              </p>
              <div className="my-8 p-6 rounded-2xl gradient-primary text-center">
                <p className="text-3xl font-bold text-primary-foreground mb-2">1,000+</p>
                <p className="text-primary-foreground/90">Students Already Trained</p>
              </div>
              <p className="text-foreground font-semibold text-xl">
                My goal is bold: To empower 100,000 African youth by 2030.
              </p>
              <p>
                We are giving everyone the tools to build their own future.
              </p>
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-foreground font-semibold">Jokotoye Emmanuel</p>
                <p className="text-primary">Founder, Nexith AI Academy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Our <span className="gradient-text">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-2xl card-hover bg-card border border-border/50"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl gradient-primary mb-4">
                  <value.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Meet the <span className="gradient-text">Team</span>
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="card-hover bg-card border-border/50 overflow-hidden">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
