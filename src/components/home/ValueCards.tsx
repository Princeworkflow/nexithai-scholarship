import { Badge } from "@/components/ui/badge";

const valueCards = [
  {
    title: "Level up your Career",
    description: "Gain practical AI skills and certification to stay ahead in your field",
    bgColor: "bg-blue-100",
    borderColor: "border-l-blue-500",
    testimonial: {
      name: "Adaeze Nwosu",
      role: "Marketing Manager who now uses AI for 80% of her workflows.",
      status: "Active",
      avatar: "AN",
    },
  },
  {
    title: "Grow your Business",
    description: "Discover how to use AI for your Marketing, Operations, and strategy.",
    bgColor: "bg-green-100",
    borderColor: "border-l-green-500",
    stat: {
      label: "Revenue Growth",
      value: "3x",
      icon: "📈",
    },
  },
  {
    title: "Freelance your AI Skills",
    description: "Learn how to package your AI expertise into marketable products and services.",
    bgColor: "bg-amber-100",
    borderColor: "border-l-amber-500",
    job: {
      company: "Upwork",
      title: "AI Automation Specialist",
      name: "Chukwuemeka Obi",
      tags: ["n8n", "Make.com", "Zapier"],
    },
  },
];

const ValueCards = () => {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Floating Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {valueCards.map((card, index) => (
            <div
              key={index}
              className={`${card.bgColor} ${card.borderColor} border-l-4 rounded-2xl p-6 min-h-[320px] relative transition-transform duration-300 hover:-translate-y-2`}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {card.title}
              </h3>
              <p className="text-slate-600 text-sm mb-6">
                {card.description}
              </p>

              {/* Testimonial Card */}
              {card.testimonial && (
                <div className="bg-slate-800 text-white rounded-xl p-4 shadow-lg animate-fade-in">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-sm font-semibold">
                      {card.testimonial.avatar}
                    </div>
                    <Badge className="bg-green-500 text-white text-xs">
                      {card.testimonial.status}
                    </Badge>
                  </div>
                  <h4 className="font-semibold text-sm mb-1">{card.testimonial.name}</h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {card.testimonial.role}
                  </p>
                </div>
              )}

              {/* Stat Card */}
              {card.stat && (
                <div className="bg-emerald-600 text-white rounded-xl p-4 shadow-lg animate-fade-in">
                  <div className="text-3xl mb-1">{card.stat.icon}</div>
                  <p className="text-3xl font-bold mb-1">{card.stat.value}</p>
                  <p className="text-sm font-medium">{card.stat.label}</p>
                </div>
              )}

              {/* Job Card */}
              {card.job && (
                <div className="bg-white rounded-xl p-4 shadow-lg animate-fade-in">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center text-white text-xs font-bold">
                        U
                      </div>
                      <span className="text-xs text-muted-foreground">{card.job.company}</span>
                    </div>
                    <Badge className="text-xs bg-green-100 text-green-700 border-green-300">
                      Hired
                    </Badge>
                  </div>
                  <h4 className="font-semibold text-sm text-foreground">{card.job.name}</h4>
                  <p className="text-xs text-muted-foreground mb-2">{card.job.title}</p>
                  <div className="flex flex-wrap gap-1">
                    {card.job.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="text-center max-w-3xl mx-auto">
          <blockquote className="text-xl md:text-2xl font-medium text-foreground mb-4">
            "AI will not replace humans – but humans with AI will replace Humans without AI"
          </blockquote>
          <cite className="text-muted-foreground text-sm">— Harvard Business Review</cite>
        </div>
      </div>
    </section>
  );
};

export default ValueCards;
