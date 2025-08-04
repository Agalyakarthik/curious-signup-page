import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { ArrowRight, Mail, Sparkles } from "lucide-react";

export const CTASection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "You're on the list! 🎉",
      description: "Get ready for an amazing learning journey!",
    });
    
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-opacity-10 animate-pulse" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 border border-white/20">
              <Sparkles className="w-8 h-8 text-yellow-300" />
            </div>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Ready to Master Healthcare Data Analysis?
          </h2>
          
          <p className="text-xl lg:text-2xl text-blue-100 mb-12 leading-relaxed">
            Join thousands of healthcare professionals who are already transforming their careers with daily data challenges.
            <br />
            <span className="text-purple-300 font-semibold">Start your journey today!</span>
          </p>

          {/* Email signup form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-glow max-w-lg mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                <Input
                  type="email"
                  placeholder="Enter your email to get started"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-12 h-14 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40 text-lg"
                />
              </div>
              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full h-14 text-lg font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Joining..." : "Start Learning Today"}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </form>
            
            <p className="text-blue-100 text-sm mt-4">
              Free to join • No credit card required • Cancel anytime
            </p>
          </div>

          {/* Trust indicators */}
          <div className="flex justify-center items-center gap-8 mt-12 text-blue-200">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>2,000+ Active Users</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>95% Success Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Real Healthcare Data</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};