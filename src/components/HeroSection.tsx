import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { ArrowRight, Mail } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
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
      title: "Welcome aboard! 🎉",
      description: "You'll be the first to know when we launch!",
    });
    
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-opacity-10 animate-pulse" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[90vh]">
          {/* Left side - Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Master{" "}
                <span className="text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text">
                  Healthcare Data Analysis
                </span>{" "}
                One Query at a Time
              </h1>
              
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-2xl">
                Get daily SQL and Python challenges using real-world datasets. 
                Designed for analysts, data learners, and self-starters. 
                <span className="text-purple-300 font-semibold"> Join early to unlock exclusive content!</span>
              </p>
            </div>

            {/* Email signup form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-glow max-w-lg">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                  <Input
                    type="email"
                    placeholder="Enter your email address"
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
                  {isSubmitting ? "Joining..." : "Join Early"}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </form>
              
              <p className="text-blue-100 text-sm mt-4 text-center">
                Join 2,000+ healthcare professionals improving their data skills daily. 
                <br />
                <span className="text-white/80">No spam, unsubscribe anytime.</span>
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">2K+</div>
                <div className="text-blue-200 text-sm">Active Learners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">95%</div>
                <div className="text-blue-200 text-sm">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">5 min</div>
                <div className="text-blue-200 text-sm">Daily Commitment</div>
              </div>
            </div>
          </div>

          {/* Right side - Hero Image */}
          <div className="relative lg:block hidden">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Healthcare Data Analysis Platform" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
              
              {/* Floating stats */}
              <div className="absolute top-6 right-6 bg-green-500 text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
                95% Success Rate
              </div>
              <div className="absolute bottom-6 left-6 bg-purple-500 text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
                2K+ Active Learners
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};