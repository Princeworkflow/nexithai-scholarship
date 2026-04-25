import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: "ai-automation-beginners",
    title: "Getting Started with AI Automation: A Beginner's Guide",
    excerpt: "Learn how AI automation tools like n8n, Make.com, and Zapier can transform your workflow and save hours of repetitive work.",
    category: "AI Automation",
    date: "March 20, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
  },
  {
    id: "why-ai-literacy-matters",
    title: "Why AI Literacy Matters for African Youth in 2026",
    excerpt: "The AI revolution is here. Discover why understanding AI is no longer optional and how African youth can position themselves for success.",
    category: "Industry Insights",
    date: "March 15, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop",
  },
  {
    id: "vibecoding-future",
    title: "Vibecoding: The Future of AI-Assisted Development",
    excerpt: "Explore how AI-assisted coding is changing the way we build software, and why traditional coding skills are being augmented, not replaced.",
    category: "Web Development",
    date: "March 10, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
  },
  {
    id: "youtube-automation-income",
    title: "How to Build a YouTube Channel with AI Automation",
    excerpt: "Step-by-step guide to creating and scaling a faceless YouTube channel using AI tools for content creation, editing, and optimization.",
    category: "YouTube Automation",
    date: "March 5, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&h=400&fit=crop",
  },
  {
    id: "ai-business-tools",
    title: "Top 10 AI Tools Every Business Owner Should Know",
    excerpt: "From marketing automation to customer service chatbots, these AI tools can help you run a smarter, more efficient business.",
    category: "AI for Business",
    date: "February 28, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    id: "scholarship-success-stories",
    title: "From Scholarship to Success: Cohort 5 Graduate Stories",
    excerpt: "Meet the graduates of our Cohort 5 program who have gone on to build businesses, land jobs, and transform their communities with AI.",
    category: "Success Stories",
    date: "February 20, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",
  },
];

const Blog = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 gradient-primary text-primary-foreground">Resources</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Blog & <span className="gradient-text">Resources</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Insights, tutorials, and stories from the world of AI education and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="group card-hover overflow-hidden border-border/50">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <CardHeader className="pb-2">
                  <Badge variant="secondary" className="w-fit text-xs">{post.category}</Badge>
                  <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mt-2 line-clamp-2">
                    {post.title}
                  </h2>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                    <span className="text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
