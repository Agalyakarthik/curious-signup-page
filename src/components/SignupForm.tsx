import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { Facebook } from "lucide-react";

export const SignupForm = () => {
  const [email, setEmail] = useState("");

  const handleEmailSignup = () => {
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Welcome aboard! 🎉",
      description: "You'll be the first to know when we launch!",
    });
    setEmail("");
  };

  const handleFacebookLogin = () => {
    toast({
      title: "Facebook Login",
      description: "Facebook login would be implemented here",
    });
  };

  return (
    <div className="bg-white rounded-lg border border-border p-6 shadow-sm w-full max-w-sm">
      <h3 className="text-lg font-semibold text-center mb-6">Sign Up</h3>
      
      <div className="space-y-4">
        <Button 
          onClick={handleFacebookLogin}
          className="w-full bg-primary hover:bg-primary/90 text-white flex items-center gap-2"
        >
          <Facebook className="w-4 h-4" />
          Login with Facebook
        </Button>
        
        <div className="text-center text-sm text-muted-foreground">
          Posce consentir admittendum metu sit sinas.
        </div>
        
        <div className="text-center text-sm font-medium">or</div>
        
        <div className="space-y-3">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full"
          />
          <Button 
            onClick={handleEmailSignup}
            variant="outline"
            className="w-full"
          >
            Sign Up with Email
          </Button>
        </div>
        
        <div className="text-center">
          <a href="#" className="text-primary text-sm hover:underline">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};