import { ArrowRight, FileText, Play, Target } from "lucide-react";

export const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "Import the Dataset",
      description: "Access curated healthcare datasets with documentation and context for each challenge."
    },
    {
      number: "02", 
      icon: <Play className="w-8 h-8 text-secondary" />,
      title: "Solve the Daily Challenge",
      description: "Work through real-world problems using SQL or Python with guided hints when needed."
    },
    {
      number: "03",
      icon: <Target className="w-8 h-8 text-green-500" />,
      title: "Get Feedback and Track Your Streak",
      description: "Receive instant feedback, explanations, and build your learning streak over time."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Simple <span className="text-transparent bg-gradient-primary bg-clip-text">Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to master healthcare data analysis, one challenge at a time
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-8 mb-12 last:mb-0">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-glow">
                  {step.number}
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  {step.icon}
                  <h3 className="text-2xl font-semibold">{step.title}</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block">
                  <ArrowRight className="w-6 h-6 text-muted-foreground" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};