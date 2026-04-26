import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, GraduationCap, Users, Award, Sparkles } from "lucide-react";

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
  }
}

const courses = [
  { value: "ai-automation", label: "AI Automation", description: "n8n, Make.com, GoHighLevel, Zapier" },
  { value: "ai-business", label: "AI for Business", description: "Marketing, Operations, Content Creation, Personal Branding" },
  { value: "generative-ai-content-creation", label: "Generative AI & Content Creation", description: "AI Content Creation, Faceless YouTube, Social Media" },
  { value: "web-development", label: "AI for Web Development & Vibecoding", description: "AI-Assisted Coding, App Building" },
  { value: "digital-advertising", label: "Digital Advertising (Meta & TikTok Ads)", description: "Meta Ads, TikTok Ads, AI Ad Creative" },
  { value: "video-editing", label: "Video Editing with AI", description: "Video Editing, AI Tools, Color Grading" },
];

const benefits = [
  {
    icon: GraduationCap,
    title: "Full Tuition Coverage",
    description: "100% of course fees covered for selected candidates",
  },
  {
    icon: Users,
    title: "Mentorship",
    description: "One-on-one guidance from industry professionals",
  },
  {
    icon: Award,
    title: "Certification",
    description: "Industry-recognized certificate upon completion",
  },
];

const Scholarship = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    selectedCourse: "",
    whyAI: "",
    goals: "",
    experience: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const getSelectedCourseName = () => {
    const course = courses.find(c => c.value === formData.selectedCourse);
    return course ? course.label : "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.selectedCourse || !formData.whyAI || !formData.goals) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);

      // Fire Meta Pixel CompleteRegistration — only on successful submission
      if (typeof window.fbq !== "undefined") {
        window.fbq("track", "CompleteRegistration", {
          content_name: getSelectedCourseName(),
          currency: "NGN",
          status: true,
        });
      }

      // Redirect to home after 4 seconds
      setTimeout(() => {
        navigate("/");
      }, 4000);
    }, 1500);
  };

  // Success Screen
  if (isSubmitted) {
    return (
      <Layout>
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 gradient-primary opacity-5" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-lg mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full gradient-primary mb-6">
                <CheckCircle className="h-10 w-10 text-primary-foreground" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Application Submitted!
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Thank you for applying for the <span className="font-semibold text-primary">{getSelectedCourseName()}</span> scholarship. We'll review your application and get back to you soon.
              </p>
              <p className="text-sm text-muted-foreground">
                Redirecting to homepage in a few seconds...
              </p>
              <div className="mt-8">
                <Button onClick={() => navigate("/")} variant="outline">
                  Go to Homepage Now
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              Limited Spots Available
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              <span className="gradient-text">Scholarship</span> Program
            </h1>
            <p className="text-lg text-muted-foreground">
              We believe talent should not be limited by financial constraints. Apply for our scholarship and start your AI journey today.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-card border border-border/50"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl gradient-primary mb-4">
                  <benefit.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto bg-card border-border/50">
            <CardHeader>
              <CardTitle>Scholarship Application</CardTitle>
              <CardDescription>
                Fill in all required fields to submit your application
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                    Personal Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+234 800 000 0000" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Input id="country" name="country" value={formData.country} onChange={handleChange} placeholder="Nigeria" />
                    </div>
                  </div>
                </div>

                {/* Course Selection */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                    Course Selection
                  </h3>
                  <div className="space-y-2">
                    <Label htmlFor="selectedCourse">Select Course *</Label>
                    <Select value={formData.selectedCourse} onValueChange={(value) => handleSelectChange("selectedCourse", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose the course you want to enroll in" />
                      </SelectTrigger>
                      <SelectContent>
                        {courses.map((course) => (
                          <SelectItem key={course.value} value={course.value}>
                            <span className="font-medium">{course.label}</span>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {formData.selectedCourse && (
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                      <h4 className="font-semibold text-foreground mb-1">{getSelectedCourseName()}</h4>
                      <p className="text-sm text-muted-foreground">
                        {courses.find(c => c.value === formData.selectedCourse)?.description}
                      </p>
                    </div>
                  )}
                </div>

                {/* Motivation */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                    Motivation & Goals
                  </h3>
                  <div className="space-y-2">
                    <Label htmlFor="whyAI">Why do you want to learn AI? *</Label>
                    <Textarea id="whyAI" name="whyAI" value={formData.whyAI} onChange={handleChange} placeholder="Share your motivation for learning artificial intelligence..." rows={4} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="goals">What are your career goals? *</Label>
                    <Textarea id="goals" name="goals" value={formData.goals} onChange={handleChange} placeholder="Describe your short and long-term career goals..." rows={4} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="experience">Prior experience with AI/Programming</Label>
                    <Textarea id="experience" name="experience" value={formData.experience} onChange={handleChange} placeholder="Share any relevant experience (optional)..." rows={3} />
                  </div>
                </div>

                {(() => {
                  const isFormValid = 
                    formData.firstName.trim() !== "" &&
                    formData.lastName.trim() !== "" &&
                    formData.email.trim() !== "" &&
                    formData.selectedCourse !== "" &&
                    formData.whyAI.trim() !== "" &&
                    formData.goals.trim() !== "";

                  return (
                    <Button
                      type="submit"
                      className="w-full gradient-primary hover:opacity-90"
                      disabled={isLoading || !isFormValid}
                    >
                      {isLoading ? "Submitting..." : "Submit Application"}
                    </Button>
                  );
                })()}
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Scholarship;
