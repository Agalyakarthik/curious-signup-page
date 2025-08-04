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
    <div className="bg-card rounded-lg border border-border p-8 shadow-sm w-full max-w-md">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">Show Your Interest</h3>
        <p className="text-muted-foreground text-sm">
          Be the first to know when we launch our healthcare data analysis platform
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10 h-12 border-border focus:border-primary focus:ring-primary"
            disabled={isSubmitting}
          />
        </div>
        
        <Button 
          type="submit"
          className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              Submitting...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              Show Interest
              <ArrowRight className="w-4 h-4" />
            </span>
          )}
        </Button>
      </form>
      
      <div className="mt-4 text-center">
        <p className="text-xs text-muted-foreground">
          We respect your privacy. No spam, unsubscribe anytime.
        </p>
      </div>
    </div>
  );
};