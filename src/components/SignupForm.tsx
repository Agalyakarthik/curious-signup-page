import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Facebook } from "lucide-react";

export const SignupForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFacebookLogin = async () => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Facebook Login",
      description: "Facebook login would be implemented here",
    });
    setIsSubmitting(false);
  };

  const handleEmailSignup = async () => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Email Signup",
      description: "Email signup would be implemented here",
    });
    setIsSubmitting(false);
  };

  return (
    <div className="bg-card rounded-lg border border-border p-8 shadow-sm w-full max-w-sm">
      <h3 className="text-xl font-semibold text-center mb-6">Sign Up</h3>
      
      <div className="space-y-4">
        <Button 
          onClick={handleFacebookLogin}
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 text-white flex items-center justify-center gap-2 h-12"
        >
          <Facebook className="w-4 h-4" />
          Login with Facebook
        </Button>
        
        <div className="text-center text-sm font-medium text-muted-foreground">
          OR
        </div>
        
        <Button 
          onClick={handleEmailSignup}
          disabled={isSubmitting}
          variant="outline"
          className="w-full border-primary text-primary hover:bg-primary hover:text-white h-12"
        >
          Sign Up with Email
        </Button>
        
        <div className="text-center pt-2">
          <a href="#" className="text-primary text-sm hover:underline font-medium">
            Learn More →
          </a>
        </div>
      </div>
    </div>
  );
};