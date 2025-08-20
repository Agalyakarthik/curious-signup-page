import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Chrome, X } from "lucide-react";

declare global {
  interface Window {
    google: any;
  }
}

interface LoginDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const LoginDialog = ({ open, onOpenChange }: LoginDialogProps) => {
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
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const handleGoogleLogin = async (response: any) => {
    setIsLoading(true);
    try {
      // Decode the JWT token to get user info
      const userInfo = JSON.parse(atob(response.credential.split('.')[1]));
      
      const userData = {
        email: userInfo.email,
        name: userInfo.name,
        picture: userInfo.picture,
        method: "google_oauth_login",
      };

      // Store user info locally
      localStorage.setItem('haq_user', JSON.stringify(userData));
      
      toast({
        title: `Welcome back, ${userInfo.name}! 🎉`,
        description: "Successfully signed in with Google",
      });

      // Close the dialog
      onOpenChange(false);
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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">
            Sign in to Healthcare Analysis HQ
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col items-center space-y-6 py-6">
          <div className="text-center text-muted-foreground">
            Access your daily SQL challenges and track your progress
          </div>
          
          <Button 
            onClick={handleGoogleClick}
            disabled={isLoading}
            size="lg"
            className="w-full max-w-sm bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 flex items-center gap-3 px-6 py-3 text-base font-medium shadow-sm"
          >
            <Chrome className="w-5 h-5 text-blue-500" />
            {isLoading ? "Signing in..." : "Continue with Google"}
          </Button>
          
          <div className="text-center text-sm text-muted-foreground max-w-sm">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};