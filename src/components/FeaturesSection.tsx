import { CheckCircle, Database, TrendingUp, Users } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: <Database className="w-8 h-8 text-primary" />,
      title: "Real Problems, Real Skills",
      description: "Each day, solve one real-world healthcare problem using SQL or Python",
      highlight: "100% Real Data"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-500" />,
      title: "Instant Feedback",
      description: "Get immediate results and explanations for every query",
      highlight: "Instant"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
      title: "Track Progress",
      description: "Build your streak and monitor skill development",
      highlight: "Track"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Built for Busy Learners",
      description: "Just 5 minutes a day. Perfect for healthcare professionals with demanding schedules",
      highlight: "5 min/day"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Why This <span className="text-transparent bg-gradient-primary bg-clip-text">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Microlearning with real-world application creates the most effective path to data mastery
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-card backdrop-blur-sm rounded-2xl p-8 border border-border hover:shadow-card transition-all duration-300 group-hover:scale-105">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  {feature.highlight}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};