import { Star } from "lucide-react";

export const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Data Analyst at Mayo Clinic",
      content: "The daily challenges have transformed how I approach healthcare data. Real datasets make all the difference!",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Healthcare Data Scientist",
      content: "Perfect for my busy schedule. 5 minutes a day and I'm constantly improving my SQL skills with relevant problems.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      role: "Medical Research Analyst",
      content: "The instant feedback and explanations help me understand not just the 'how' but the 'why' behind each solution.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What Our <span className="text-transparent bg-gradient-primary bg-clip-text">Learners</span> Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of healthcare professionals already advancing their careers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-card backdrop-blur-sm rounded-2xl p-8 border border-border hover:shadow-card transition-all duration-300">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-lg mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div>
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};