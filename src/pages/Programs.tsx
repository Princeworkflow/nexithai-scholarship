import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Users, BookOpen, ArrowRight, CheckCircle2 } from "lucide-react";
import { programs, getLevelColor } from "@/lib/programs-data";

const Programs = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
              Transform Your Career
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="gradient-text">Programs</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive AI training programs designed for all skill levels. Master the tools 
              and techniques that are shaping the future of work.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8">
            {programs.map((program, index) => (
              <Card 
                key={program.id}
                className="bg-card border-border/50 overflow-hidden card-hover"
              >
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Program Info */}
                  <div className="lg:col-span-2 p-6 lg:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="outline" className={getLevelColor(program.level)}>
                        {program.level}
                      </Badge>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {program.duration}
                      </span>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {program.students} students
                      </span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                      {program.title}
                    </h2>
                    
                    <p className="text-muted-foreground mb-6">
                      {program.fullDescription}
                    </p>

                    {/* Topics */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {program.topics.map((topic, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>

                    {/* Modules Preview */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                        Course Modules
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {program.modules.slice(0, 4).map((module, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                            <span className="truncate">{module.title}</span>
                          </div>
                        ))}
                        {program.modules.length > 4 && (
                          <div className="text-sm text-primary font-medium">
                            +{program.modules.length - 4} more modules
                          </div>
                        )}
                      </div>
                    </div>

                    <Button asChild className="gradient-primary hover:opacity-90">
                      <Link to={`/programs/${program.id}`} className="flex items-center gap-2">
                        View Full Curriculum
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  {/* Outcomes Sidebar */}
                  <div className="bg-muted/30 p-6 lg:p-8 border-t lg:border-t-0 lg:border-l border-border/50">
                    <h4 className="font-semibold text-foreground mb-4">What You'll Achieve</h4>
                    <ul className="space-y-3">
                      {program.outcomes.slice(0, 4).map((outcome, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 pt-6 border-t border-border/50">
                      <p className="text-xs text-muted-foreground">Scholarship available</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Start Your AI Journey?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Apply for our scholarship program and get up to 100% off your tuition. 
            Limited spots available for the upcoming cohort.
          </p>
          <Button asChild size="lg" className="gradient-primary hover:opacity-90">
            <a href="https://scholarship.nexithai.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              Apply for Scholarship
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Programs;
