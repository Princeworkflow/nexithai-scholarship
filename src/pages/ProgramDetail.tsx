import { useParams, Link, Navigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Clock, 
  Users, 
  BookOpen, 
  ArrowRight, 
  CheckCircle2, 
  GraduationCap,
  Target,
  ArrowLeft,
  Award,
  BadgeCheck,
  Gift
} from "lucide-react";
import { getProgramById, getLevelColor } from "@/lib/programs-data";

const ProgramDetail = () => {
  const { programId } = useParams<{ programId: string }>();
  const program = programId ? getProgramById(programId) : undefined;

  if (!program) {
    return <Navigate to="/programs" replace />;
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          {/* Back Link */}
          <Link 
            to="/programs" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All Programs
          </Link>

          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge variant="outline" className={getLevelColor(program.level)}>
                {program.level}
              </Badge>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {program.duration}
              </span>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Users className="h-4 w-4" />
                {program.students} students enrolled
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {program.title}
            </h1>
            
            <p className="text-lg text-muted-foreground mb-6">
              {program.fullDescription}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {program.topics.map((topic, i) => (
                <Badge key={i} variant="secondary">
                  {topic}
                </Badge>
              ))}
            </div>

            <Button asChild size="lg" className="gradient-primary hover:opacity-90">
              <a href="https://scholarship.nexithai.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Apply for Scholarship
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content - Modules */}
            <div className="lg:col-span-2">
              <Card className="bg-card border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    Course Curriculum
                  </CardTitle>
                  <p className="text-muted-foreground text-sm">
                    {program.modules.length} modules • {program.duration} total
                  </p>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {program.modules.map((module, index) => (
                      <AccordionItem key={index} value={`module-${index}`}>
                        <AccordionTrigger className="hover:no-underline">
                          <div className="flex items-center gap-4 text-left">
                            <span className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-primary-foreground text-sm font-bold shrink-0">
                              {index + 1}
                            </span>
                            <div>
                              <h4 className="font-semibold text-foreground">{module.title}</h4>
                              <p className="text-sm text-muted-foreground">{module.duration}</p>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="pl-12 pt-2">
                            <ul className="space-y-2">
                              {module.topics.map((topic, i) => (
                                <li key={i} className="flex items-center gap-2 text-muted-foreground">
                                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                                  {topic}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Outcomes */}
              <Card className="bg-card border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Target className="h-5 w-5 text-primary" />
                    Learning Outcomes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {program.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Certification */}
              <Card className="bg-card border-border/50 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Award className="h-5 w-5 text-amber-600" />
                    Certification
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="text-center mb-4 p-4 bg-gradient-to-br from-amber-100/50 to-orange-100/50 dark:from-amber-900/10 dark:to-orange-900/10 rounded-lg border border-amber-200/50 dark:border-amber-800/30">
                    <BadgeCheck className="h-10 w-10 text-amber-600 mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      {program.certification.certificateType}
                    </p>
                    <h4 className="font-bold text-foreground">
                      {program.certification.certificateTitle}
                    </h4>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Gift className="h-4 w-4 text-primary" />
                      What You'll Receive:
                    </p>
                    <ul className="space-y-2">
                      {program.certification.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Requirements */}
              <Card className="bg-card border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {program.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-muted-foreground/50 shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* CTA Card */}
              <Card className="gradient-primary text-primary-foreground">
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-xl mb-2">Ready to Enroll?</h3>
                  <p className="text-primary-foreground/80 text-sm mb-4">
                    Limited spots available. Apply now for scholarship opportunities.
                  </p>
                  <Button asChild variant="secondary" className="w-full">
                    <a href="https://scholarship.nexithai.com" target="_blank" rel="noopener noreferrer">Apply for Scholarship</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProgramDetail;
