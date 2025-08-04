import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { ArrowRight, Mail } from "lucide-react";

export const InterestCapture = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address to show your interest",
        variant: "destructive",
      });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call to capture interest
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Thank you for your interest! 🎉",
      description: "We'll keep you updated on our progress and launch details.",
    });
    
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <div className="bg-card border border-border rounded-lg p-4 shadow-sm w-full">
      <h3 className="text-lg font-semibold text-center mb-4">Show Interest</h3>
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10 h-10 border-border focus:border-primary focus:ring-primary"
            disabled={isSubmitting}
          />
        </div>
        
        <Button 
          type="submit"
          className="w-full h-10 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              Submitting...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </span>
          )}
        </Button>
      </form>
      
      <div className="mt-3 text-center">
        <p className="text-xs text-muted-foreground">
          We respect your privacy. No spam, ever.
        </p>
      </div>
    </div>
  );
};