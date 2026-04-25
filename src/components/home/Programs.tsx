import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, BookOpen } from "lucide-react";

const programs = [
  {
    title: "AI Automation",
    description: "Master practical AI automation skills using industry-leading tools to streamline workflows and boost productivity.",
    level: "Intermediate",
    duration: "8 weeks",
    students: "150+",
    topics: ["n8n", "Make.com", "GoHighLevel", "Zapier"],
  },
  {
    title: "AI for Business",
    description: "Leverage AI across all business functions from marketing to operations, content creation to personal branding.",
    level: "Beginner",
    duration: "10 weeks",
    students: "200+",
    topics: ["Business Development", "AI Marketing", "Generative AI", "Content Creation", "Operations & Management", "Personal Branding"],
  },
  {
    title: "Generative AI & Content Creation",
    description: "Master AI-powered content creation for YouTube, social media, and beyond — from faceless channels to viral strategies.",
    level: "Beginner",
    duration: "6 weeks",
    students: "120+",
    topics: ["AI Content Creation", "Generative AI", "Faceless YouTube", "Social Media"],
  },
  {
    title: "AI for Web Development & Vibecoding",
    description: "Learn to build websites and applications using AI-assisted development tools and modern vibecoding techniques.",
    level: "Intermediate",
    duration: "8 weeks",
    students: "85+",
    topics: ["AI-Assisted Coding", "Vibecoding", "Web Development", "App Building"],
  },
  {
    title: "Digital Advertising (Meta & TikTok Ads)",
    description: "Master AI-powered advertising on Meta and TikTok to drive leads, sales, and brand awareness at scale.",
    level: "Beginner",
    duration: "6 weeks",
    students: "90+",
    topics: ["Meta Ads", "TikTok Ads", "AI Ad Creative", "Campaign Optimization"],
  },
  {
    title: "Video Editing with AI",
    description: "Learn professional video editing enhanced by AI tools — from raw footage to polished, publish-ready content.",
    level: "Beginner",
    duration: "8 weeks",
    students: "75+",
    topics: ["Video Editing", "AI Tools", "Color Grading", "Motion Graphics"],
  },
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Beginner":
      return "bg-green-100 text-green-700 border-green-200";
    case "Intermediate":
      return "bg-amber-100 text-amber-700 border-amber-200";
    case "Advanced":
      return "bg-red-100 text-red-700 border-red-200";
    default:
      return "bg-primary/10 text-primary";
  }
};

const Programs = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="gradient-text">Programs</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive AI training programs designed for all skill levels, from beginners to advanced practitioners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <Card 
              key={index} 
              className="card-hover bg-card border-border/50"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className={getLevelColor(program.level)}>
                    {program.level}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{program.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  {program.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {program.topics.map((topic, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border/50 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {program.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {program.students}
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    {program.topics.length} topics
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

export default Programs;
