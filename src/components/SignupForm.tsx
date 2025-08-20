import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { Chrome } from "lucide-react";

declare global {
  interface Window {
    google: any;
  }
}

export const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [n8nWebhookUrl, setN8nWebhookUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Load Google OAuth SDK
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (window.google) {
        window.google.accounts.id.initialize({
          client_id: '284394187603-a9k90ml8samr6k9puoc4s7lr3bg4kfil.apps.googleusercontent.com', // Demo client ID
          callback: handleGoogleLogin,
        });
      }
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const triggerN8nWebhook = async (userData: any) => {
    if (!n8nWebhookUrl) {
      console.log("No n8n webhook configured, skipping automation");
      return;
    }

    try {
      await fetch(n8nWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          ...userData,
          timestamp: new Date().toISOString(),
          source: "healthcare-analysis-hq",
        }),
      });
      
      toast({
        title: "Automation Triggered",
        description: "n8n workflow has been notified of your signup!",
      });
    } catch (error) {
      console.error("n8n webhook error:", error);
    }
  };

  const handleGoogleLogin = async (response: any) => {
    setIsLoading(true);
    try {
      // Decode the JWT token to get user info
      const userInfo = JSON.parse(atob(response.credential.split('.')[1]));
      
      const userData = {
        email: userInfo.email,
        name: userInfo.name,
        picture: userInfo.picture,
        method: "google_oauth",
      };

      // Store user info locally
      localStorage.setItem('haq_user', JSON.stringify(userData));
      
      // Trigger n8n automation
      await triggerN8nWebhook(userData);
      
      toast({
        title: `Welcome ${userInfo.name}! 🎉`,
        description: "Successfully signed in with Google",
      });
    } catch (error) {
      console.error('Google login error:', error);
      toast({
        title: "Login Error",
        description: "Failed to process Google login",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailSignup = async () => {
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    const userData = {
      email,
      method: "email_signup",
    };

    // Store user info locally
    localStorage.setItem('haq_user', JSON.stringify(userData));
    
    // Trigger n8n automation
    await triggerN8nWebhook(userData);
    
    toast({
      title: "Welcome aboard! 🎉",
      description: "You'll be the first to know when we launch!",
    });
    
    setEmail("");
    setIsLoading(false);
  };

  const handleGoogleClick = () => {
    if (window.google) {
      window.google.accounts.id.prompt();
    } else {
      toast({
        title: "Loading...",
        description: "Google OAuth is still loading, please try again",
      });
    }
  };

  return (
    <div className="bg-white rounded-lg border border-border p-6 shadow-sm w-full max-w-sm">
      <h3 className="text-lg font-semibold text-center mb-6">Join Healthcare Analysis HQ</h3>
      
      <div className="space-y-4">
        <Button 
          onClick={handleGoogleClick}
          disabled={isLoading}
          className="w-full bg-primary hover:bg-primary/90 text-white flex items-center gap-2"
        >
          <Chrome className="w-4 h-4" />
          {isLoading ? "Signing in..." : "Continue with Google"}
        </Button>
        
        <div className="text-center text-sm font-medium text-muted-foreground">or</div>
        
        <div className="space-y-3">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            className="w-full"
          />
          <Button 
            onClick={handleEmailSignup}
            disabled={isLoading || !email}
            variant="outline"
            className="w-full"
          >
            {isLoading ? "Signing up..." : "Sign Up with Email"}
          </Button>
        </div>

        {/* n8n Webhook Configuration */}
        <div className="border-t border-border pt-4 mt-6">
          <details className="group">
            <summary className="text-sm font-medium text-muted-foreground cursor-pointer hover:text-foreground">
              ⚙️ Setup n8n Automation (Optional)
            </summary>
            <div className="mt-3 space-y-2">
              <Input
                type="url"
                placeholder="Your n8n webhook URL"
                value={n8nWebhookUrl}
                onChange={(e) => setN8nWebhookUrl(e.target.value)}
                className="w-full text-xs"
              />
              <p className="text-xs text-muted-foreground">
                Add your n8n webhook to trigger automations on signup
              </p>
            </div>
          </details>
        </div>
        
        <div className="text-center">
          <a href="#" className="text-primary text-sm hover:underline">
            Learn More About Daily Challenges
          </a>
        </div>
      </div>
    </div>
  );
};