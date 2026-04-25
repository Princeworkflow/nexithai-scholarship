import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who is this program for?",
    answer: "Our AI programs are designed for professionals, business owners, students, and anyone looking to upskill in artificial intelligence. Whether you're a complete beginner or have some technical background, we have courses tailored to your level.",
  },
  {
    question: "Do I need any prior coding experience?",
    answer: "No prior coding experience is required for most of our courses. Our AI for Business and YouTube Automation courses are designed for non-technical learners. For the Web Development & Vibecoding course, basic computer literacy is helpful but not mandatory.",
  },
  {
    question: "How long does each program take to complete?",
    answer: "Program duration varies: AI Automation (8 weeks), AI for Business (10 weeks), YouTube Automation (6 weeks), and AI for Web Development (8 weeks). Each program includes self-paced modules with live sessions and support.",
  },
  {
    question: "Will I receive a certificate upon completion?",
    answer: "Yes! All graduates receive a verified certificate of completion that can be shared on LinkedIn and added to your professional portfolio. Our certificates are recognized by employers across various industries.",
  },
  {
    question: "What tools and software will I learn to use?",
    answer: "Depending on your chosen program, you'll learn industry-leading tools like n8n, Make.com, Zapier, GoHighLevel, ChatGPT, Midjourney, and various AI content creation tools. All software access is included in your enrollment.",
  },
  {
    question: "Is there a scholarship or payment plan available?",
    answer: "Yes! We offer scholarships for eligible candidates and flexible payment plans to make AI education accessible. Visit our Scholarship page to learn more about eligibility and how to apply.",
  },
  {
    question: "What kind of support will I receive during the program?",
    answer: "You'll have access to dedicated mentors, a community of fellow learners, weekly live Q&A sessions, and 24/7 access to our learning platform. Our support team is always ready to help you succeed.",
  },
  {
    question: "Can I take multiple courses at the same time?",
    answer: "While it's possible, we recommend focusing on one program at a time to maximize your learning. However, many students enroll in a second course after completing their first for a discounted bundle rate.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our AI training programs
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-lg px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-medium hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
