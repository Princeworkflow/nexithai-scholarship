export interface ProgramModule {
  title: string;
  topics: string[];
  duration: string;
}

export interface CertificationDetails {
  certificateType: string;
  certificateTitle: string;
  benefits: string[];
}

export interface Program {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  fullDescription: string;
  level: string;
  duration: string;
  students: string;
  topics: string[];
  price: string;
  modules: ProgramModule[];
  outcomes: string[];
  requirements: string[];
  certification: CertificationDetails;
}

export const programs: Program[] = [
  {
    id: "ai-automation",
    title: "AI Automation",
    shortTitle: "AI Automation",
    description: "Master practical AI automation skills using n8n, build intelligent agents, and launch your automation business.",
    fullDescription: "This comprehensive 12-week program teaches you how to build powerful AI-powered automations using n8n. From foundations to advanced AI agents and voice systems, you'll learn to create intelligent workflows, connect to APIs, master data transformation, and launch your own automation consultancy targeting the African market.",
    level: "Beginner to Advanced",
    duration: "12 weeks",
    students: "150+",
    topics: ["n8n", "AI Agents", "Voice AI", "APIs", "JavaScript", "RAG", "Vector Databases"],
    price: "₦150,000",
    modules: [
      {
        title: "Module 1: Introduction to AI Automation",
        topics: [
          "Understanding AI and Automation in the African Context",
          "Introduction to Workflow Automation: Triggers, Actions, and Conditions",
          "Getting Started with n8n: Interface Tour and Cloud Setup",
          "Your First Workflow: Building a Simple Notification System",
          "Deployment Strategies: Cloud vs. Self-Hosting for African Businesses",
          "Hands-On Project: Personal Daily Briefing System (Weather + Schedule + Telegram)"
        ],
        duration: "Week 1"
      },
      {
        title: "Module 2: Automation Building Blocks",
        topics: [
          "Automation Fundamentals: Input, Processing, and Output",
          "Mastering Triggers: Schedule, Webhooks, and App Events",
          "Action, Logic, and Data Nodes: Making Decisions in Workflows",
          "Introduction to APIs: How Apps Talk and Reading Documentation",
          "Webhooks Deep Dive: Receiving Real-Time Data",
          "Data Flow in n8n: Understanding JSON and Pinning Data",
          "Debugging 101: Using Execution Logs and Fixing Errors",
          "Hands-On Project: Smart Lead Capture System"
        ],
        duration: "Week 2"
      },
      {
        title: "Module 3: Connecting Your Automation to the World",
        topics: [
          "Security & Credentials: API Keys and Safe Storage",
          "AI Model Connections: OpenAI, Claude, Gemini, and DeepSeek",
          "Communication Stack: Gmail Personalization and Processing",
          "Messaging: Telegram Bots and WhatsApp Business API",
          "Productivity Suite: Google Sheets, Notion, and Airtable",
          "Community Nodes: Finding and Installing Custom Integrations",
          "Hands-On Project: AI-Powered Question Bot"
        ],
        duration: "Week 3-4"
      },
      {
        title: "Module 4: AI Intelligence & Smart Automation",
        topics: [
          "How LLMs Work: Tokens, Costs, and Limitations",
          "Prompt Engineering Foundations: Clear Instruction Formulas",
          "Advanced Prompting: Chain-of-Thought and Structured Outputs",
          "System Prompts: Defining Agent Personality and Tone",
          "RAG Explained: Retrieval-Augmented Generation for Accuracy",
          "Vector Databases: Introduction to Pinecone and Supabase",
          "AI Architecture: Agents vs. Assistants vs. Multi-Agent Systems",
          "Hands-On Project: Intelligent Document Processor"
        ],
        duration: "Week 5-6"
      },
      {
        title: "Module 5: Data Mastery - JSON and JavaScript",
        topics: [
          "JSON Fundamentals: Objects, Arrays, and Data Types",
          "Data Structure Inspection: Seeing what n8n sees",
          "Manual JSON Building: Nesting and Formatting",
          "Expressions in n8n: Accessing Data Without Code",
          "Data Transformation Basics: Dates, Times, and Calculations",
          "Advanced Transformations: Filtering, Sorting, and Aggregating Arrays",
          "Intro to JavaScript: Variables and Basic Syntax in Code Nodes",
          "JS for Data: Looping through Arrays and Object Mapping",
          "String & Array Functions: Manipulating Text and Lists",
          "AI-Assisted Coding: Using LLMs to Write and Debug n8n JS",
          "Hands-On Project: Sales Data Analytics Dashboard"
        ],
        duration: "Week 7-8"
      },
      {
        title: "Module 6: Building Professional AI Agents",
        topics: [
          "Agent Architecture Planning: Tools and Capabilities",
          "Your First Agent: Step-by-Step Function and Tool Setup",
          "Content Agents: Blog, Social Media, and Newsletter Creators",
          "Email Agents: Smart Inbox Management and Auto-Responses",
          "Document Agents: Resume Analysis and Invoice Processing",
          "Process Agents: Onboarding and Meeting Schedulers",
          "Performance Optimization: Think Nodes and Error Handling",
          "Multi-Step AI: Breaking Complex Tasks into Sequential Steps",
          "Hands-On Project: Smart HR Recruitment Assistant"
        ],
        duration: "Week 9"
      },
      {
        title: "Module 7: Advanced AI - Voice Agents & Specialized Systems",
        topics: [
          "Voice AI Infrastructure: VAPI, Retell AI, and ElevenLabs",
          "Connecting Voice to n8n: Twilio and Phone Logic",
          "Building Conversational Flows: Interruptions and Transfers",
          "Use Case: Appointment Booking Voice Agents",
          "Use Case: Customer Support with FAQ and Ticketing"
        ],
        duration: "Week 10"
      },
      {
        title: "Module 8: Career Development & Monetization",
        topics: [
          "The African Automation Market: Trends and Demand",
          "Building Your Portfolio: Case Studies and ROI Demonstrations",
          "Global Freelancing: Upwork, Proposal Writing, and Pricing",
          "Productized Services: Recurring Revenue and Retainers",
          "Finding Local Clients: Outreach and Networking in Africa",
          "Sales Mastery: Discovery Calls and Handling Objections",
          "Pricing Your Services: Value-Based vs. Project-Based",
          "Scaling: From Freelancer to Automation Consultancy",
          "Success Stories: Lessons from African Startups (Termii, Mono)",
          "Marketing: Content Strategy and Personal Branding",
          "Capstone Project: Build and Launch Your Market-Ready AI Automation Business"
        ],
        duration: "Week 11-12"
      }
    ],
    outcomes: [
      "Build end-to-end AI-powered automation workflows with n8n",
      "Create intelligent AI agents for content, email, and document processing",
      "Master data transformation with JSON and JavaScript",
      "Build voice AI agents using VAPI, Retell AI, and ElevenLabs",
      "Launch your own automation consulting business targeting African markets"
    ],
    requirements: [
      "Basic computer literacy",
      "Understanding of business processes",
      "Access to a laptop with internet",
      "Willingness to practice hands-on"
    ],
    certification: {
      certificateType: "Professional Certificate",
      certificateTitle: "Certified AI Automation Specialist",
      benefits: [
        "Official NexITHAI certificate of completion",
        "Digital badge for LinkedIn profile",
        "Lifetime access to course materials",
        "Access to exclusive alumni community",
        "Portfolio of automation projects",
        "Job placement assistance"
      ]
    }
  },
  {
    id: "ai-for-business",
    title: "AI for Business",
    shortTitle: "AI Business",
    description: "Leverage AI across all business functions from marketing to operations, content creation to personal branding.",
    fullDescription: "Transform your business operations with artificial intelligence. This program covers how to implement AI solutions across marketing, operations, content creation, customer service, and personal branding. Perfect for entrepreneurs, business owners, and professionals looking to gain a competitive edge.",
    level: "Beginner to Advanced",
    duration: "10 weeks",
    students: "200+",
    topics: ["Business Development", "AI Marketing", "Generative AI", "Content Creation", "Operations & Management", "Personal Branding"],
    price: "₦180,000",
    modules: [
      {
        title: "AI in Business Landscape",
        topics: ["Current AI trends", "AI adoption strategies", "Risk assessment", "ROI calculation for AI projects"],
        duration: "Week 1"
      },
      {
        title: "AI-Powered Marketing",
        topics: ["AI copywriting tools", "Automated ad campaigns", "Personalization at scale", "Analytics and insights"],
        duration: "Week 2-3"
      },
      {
        title: "Content Creation with AI",
        topics: ["ChatGPT for content", "Image generation tools", "Video content automation", "Social media scheduling"],
        duration: "Week 4-5"
      },
      {
        title: "Operations & Management",
        topics: ["Process automation", "AI-driven decision making", "Customer service bots", "Inventory and supply chain AI"],
        duration: "Week 6-7"
      },
      {
        title: "Personal Branding with AI",
        topics: ["Building your AI-powered brand", "Thought leadership content", "LinkedIn optimization", "Networking with AI assistance"],
        duration: "Week 8-9"
      },
      {
        title: "Implementation & Strategy",
        topics: ["Creating your AI roadmap", "Team training strategies", "Measuring success", "Future-proofing your business"],
        duration: "Week 10"
      }
    ],
    outcomes: [
      "Implement AI across all business functions",
      "Reduce operational costs significantly",
      "Create compelling AI-generated content",
      "Build a strong personal brand",
      "Lead AI transformation in your organization"
    ],
    requirements: [
      "No prior AI experience needed",
      "Basic business understanding",
      "Access to a computer and internet",
      "Openness to new technologies"
    ],
    certification: {
      certificateType: "Professional Certificate",
      certificateTitle: "AI Business Strategist",
      benefits: [
        "Official NexITHAI certificate of completion",
        "Digital badge for LinkedIn profile",
        "Lifetime access to course materials",
        "Access to exclusive alumni community",
        "AI implementation case study portfolio",
        "Business networking opportunities"
      ]
    }
  },
  {
    id: "generative-ai-content-creation",
    title: "Generative AI & Content Creation",
    shortTitle: "GenAI Content",
    description: "Master AI-powered content creation for YouTube, social media, and beyond — from faceless channels to viral content strategies.",
    fullDescription: "Learn to create compelling content across platforms using generative AI. This program covers AI-powered video production, scriptwriting, social media content, faceless YouTube channels, and viral content strategies. Build scalable content systems that generate engagement and revenue.",
    level: "Beginner to Advanced",
    duration: "6 weeks",
    students: "120+",
    topics: ["AI Content Creation", "Generative AI", "Faceless YouTube", "Video Production", "Social Media"],
    price: "₦120,000",
    modules: [
      {
        title: "Content Fundamentals & AI Tools",
        topics: ["Understanding the content landscape", "Profitable niche research", "Channel and profile setup", "Branding for faceless content"],
        duration: "Week 1"
      },
      {
        title: "AI Script Writing & Copywriting",
        topics: ["ChatGPT prompting for scripts", "Hook creation", "Story structures", "SEO-optimized titles and descriptions"],
        duration: "Week 2"
      },
      {
        title: "AI Video & Visual Production",
        topics: ["AI voice generation", "Stock footage automation", "AI video editors", "Thumbnail creation with AI"],
        duration: "Week 3-4"
      },
      {
        title: "Content Strategy & Scaling",
        topics: ["Batch content creation", "Scheduling and publishing", "Analytics interpretation", "A/B testing strategies"],
        duration: "Week 5"
      },
      {
        title: "Monetization & Growth",
        topics: ["AdSense optimization", "Sponsorship opportunities", "Affiliate marketing", "Scaling to multiple channels"],
        duration: "Week 6"
      }
    ],
    outcomes: [
      "Launch profitable content channels with AI",
      "Create videos in under 2 hours with AI",
      "Master platform algorithms for growth",
      "Build multiple income streams from content",
      "Scale content production efficiently"
    ],
    requirements: [
      "No prior content creation experience needed",
      "Basic video editing knowledge helpful",
      "Computer with internet access",
      "Commitment to consistent content creation"
    ],
    certification: {
      certificateType: "Professional Certificate",
      certificateTitle: "Generative AI Content Creator",
      benefits: [
        "Official NexITHAI certificate of completion",
        "Digital badge for LinkedIn profile",
        "Lifetime access to course materials",
        "Access to exclusive alumni community",
        "Ready-to-monetize content portfolio",
        "Content creation toolkit access"
      ]
    }
  },
  {
    id: "ai-web-development",
    title: "AI for Web Development & Vibecoding",
    shortTitle: "AI Web Dev",
    description: "Learn to build websites and applications using AI-assisted development tools and modern vibecoding techniques.",
    fullDescription: "Master the art of building websites and applications using AI-powered development tools. This program introduces vibecoding - a revolutionary approach to development where AI assists in writing, debugging, and optimizing code. Perfect for aspiring developers and designers who want to ship products faster.",
    level: "Beginner to Advanced",
    duration: "8 weeks",
    students: "85+",
    topics: ["AI-Assisted Coding", "Vibecoding", "Web Development", "App Building"],
    price: "₦160,000",
    modules: [
      {
        title: "Introduction to Vibecoding",
        topics: ["What is vibecoding", "AI coding assistants overview", "Setting up your environment", "First AI-assisted project"],
        duration: "Week 1"
      },
      {
        title: "AI-Powered Frontend Development",
        topics: ["Building with Lovable/Bolt", "React fundamentals with AI", "Tailwind CSS mastery", "Component generation"],
        duration: "Week 2-3"
      },
      {
        title: "Backend with AI Assistance",
        topics: ["Database design with AI", "API development", "Authentication systems", "Serverless functions"],
        duration: "Week 4-5"
      },
      {
        title: "Full-Stack Projects",
        topics: ["E-commerce applications", "SaaS dashboards", "Portfolio websites", "Landing pages that convert"],
        duration: "Week 6-7"
      },
      {
        title: "Deployment & Scaling",
        topics: ["Hosting solutions", "Domain setup", "Performance optimization", "Launching your projects"],
        duration: "Week 8"
      }
    ],
    outcomes: [
      "Build complete web applications with AI",
      "Ship projects 10x faster than traditional coding",
      "Create professional portfolios and landing pages",
      "Launch SaaS products and e-commerce sites",
      "Start a web development freelance career"
    ],
    requirements: [
      "Basic understanding of HTML/CSS helpful",
      "No coding experience required",
      "Computer with internet access",
      "Creative mindset and problem-solving attitude"
    ],
    certification: {
      certificateType: "Professional Certificate",
      certificateTitle: "AI Web Developer",
      benefits: [
        "Official NexITHAI certificate of completion",
        "Digital badge for LinkedIn profile",
        "Lifetime access to course materials",
        "Access to exclusive alumni community",
        "Portfolio of deployed web projects",
        "Freelance opportunity connections"
      ]
    }
  },
  {
    id: "digital-advertising",
    title: "Digital Advertising (Meta & TikTok Ads)",
    shortTitle: "Digital Ads",
    description: "Master AI-powered advertising on Meta and TikTok to drive leads, sales, and brand awareness at scale.",
    fullDescription: "Learn to plan, launch, and optimize high-performing ad campaigns on Meta (Facebook & Instagram) and TikTok using AI tools. From audience targeting to creative generation and analytics, this program equips you to run profitable campaigns for yourself or clients.",
    level: "Beginner to Advanced",
    duration: "6 weeks",
    students: "90+",
    topics: ["Meta Ads", "TikTok Ads", "AI Ad Creative", "Audience Targeting", "Campaign Optimization"],
    price: "₦130,000",
    modules: [
      {
        title: "Advertising Fundamentals & Strategy",
        topics: ["Digital advertising landscape", "Campaign objectives and funnel mapping", "Budgeting and bidding strategies", "Understanding ad platforms"],
        duration: "Week 1"
      },
      {
        title: "Meta Ads Mastery",
        topics: ["Facebook & Instagram ad setup", "Audience targeting and lookalikes", "Ad placements and formats", "Pixel setup and conversion tracking"],
        duration: "Week 2-3"
      },
      {
        title: "TikTok Ads Mastery",
        topics: ["TikTok ad account setup", "Spark Ads and in-feed ads", "TikTok-specific creative strategies", "TikTok Pixel and analytics"],
        duration: "Week 4"
      },
      {
        title: "AI-Powered Ad Creative",
        topics: ["AI copywriting for ads", "AI image and video generation for ads", "A/B testing creative variations", "Ad fatigue management"],
        duration: "Week 5"
      },
      {
        title: "Optimization, Scaling & Reporting",
        topics: ["Campaign optimization techniques", "Scaling winning campaigns", "Client reporting dashboards", "Building an ads freelance business"],
        duration: "Week 6"
      }
    ],
    outcomes: [
      "Launch and manage profitable Meta and TikTok ad campaigns",
      "Use AI tools to generate high-converting ad creatives",
      "Master audience targeting, retargeting, and lookalike audiences",
      "Read analytics and optimize campaigns for ROI",
      "Start a digital advertising freelance or agency business"
    ],
    requirements: [
      "No prior advertising experience needed",
      "Basic understanding of social media platforms",
      "Access to a computer and internet",
      "Willingness to invest small test ad budgets"
    ],
    certification: {
      certificateType: "Professional Certificate",
      certificateTitle: "Certified Digital Advertising Specialist",
      benefits: [
        "Official NexITHAI certificate of completion",
        "Digital badge for LinkedIn profile",
        "Lifetime access to course materials",
        "Access to exclusive alumni community",
        "Campaign portfolio with real results",
        "Freelance opportunity connections"
      ]
    }
  },
  {
    id: "video-editing",
    title: "Video Editing with AI",
    shortTitle: "Video Editing",
    description: "Learn professional video editing enhanced by AI tools — from raw footage to polished, publish-ready content.",
    fullDescription: "Master video editing using both traditional techniques and cutting-edge AI tools. This program covers editing fundamentals, color grading, motion graphics, sound design, and how to use AI to speed up your workflow dramatically. Perfect for aspiring editors, content creators, and freelancers.",
    level: "Beginner to Advanced",
    duration: "8 weeks",
    students: "75+",
    topics: ["Video Editing", "AI Editing Tools", "Color Grading", "Motion Graphics", "Sound Design"],
    price: "₦140,000",
    modules: [
      {
        title: "Editing Fundamentals",
        topics: ["Understanding timelines and cuts", "Importing and organizing footage", "Basic cuts, trims, and transitions", "Editing software overview (CapCut, DaVinci, Premiere)"],
        duration: "Week 1-2"
      },
      {
        title: "AI-Powered Editing Workflows",
        topics: ["AI auto-cut and scene detection", "AI-generated captions and subtitles", "Background removal with AI", "AI audio enhancement and noise removal"],
        duration: "Week 3-4"
      },
      {
        title: "Color Grading & Visual Effects",
        topics: ["Color correction fundamentals", "Cinematic color grading", "LUTs and AI color matching", "Basic motion graphics and titles"],
        duration: "Week 5-6"
      },
      {
        title: "Sound Design & Music",
        topics: ["Audio editing essentials", "AI music generation", "Sound effects and foley", "Mixing and mastering for video"],
        duration: "Week 7"
      },
      {
        title: "Portfolio & Freelancing",
        topics: ["Building a showreel", "Client workflow management", "Pricing video editing services", "Finding clients on Fiverr, Upwork, and locally"],
        duration: "Week 8"
      }
    ],
    outcomes: [
      "Edit professional-quality videos from start to finish",
      "Use AI tools to dramatically speed up editing workflows",
      "Apply color grading and visual effects confidently",
      "Create motion graphics and polished titles",
      "Launch a video editing freelance career"
    ],
    requirements: [
      "No prior editing experience needed",
      "Computer capable of video editing",
      "Access to internet for AI tools",
      "Creative eye and attention to detail"
    ],
    certification: {
      certificateType: "Professional Certificate",
      certificateTitle: "Certified AI Video Editor",
      benefits: [
        "Official NexITHAI certificate of completion",
        "Digital badge for LinkedIn profile",
        "Lifetime access to course materials",
        "Access to exclusive alumni community",
        "Professional showreel portfolio",
        "Freelance opportunity connections"
      ]
    }
  }
];

export const getLevelColor = (level: string) => {
  if (level.includes("Beginner to Advanced")) {
    return "bg-gradient-to-r from-green-100 to-blue-100 text-green-700 border-green-200";
  }
  return "bg-primary/10 text-primary";
};

export const getProgramById = (id: string): Program | undefined => {
  return programs.find(program => program.id === id);
};
